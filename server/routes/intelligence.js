const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
// const i18n = require('i18n');
const i18n = require('../plugins/i18n.js');
const { Purchase } = require('../models/Purchase');
const { VariantIndicator } = require('../models/VariantIndicator');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/intelligence/purchase
 */
router.get('/purchase', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let filterJsonStr = '{ ';
    let collections = req.query.collections ? JSON.parse(req.query.collections) : null;
    let collectionIDs = [];
    let collectionTitles = [];
    if (collections) {
        for (let i = 0; i < collections.length; i++) {
            let collection = collections[i];
            collectionIDs.push(collection.id);
            collectionTitles.push(collection.title);
        }
    }
    if (collectionIDs && collectionIDs.length > 0) {
        filterJsonStr = filterJsonStr + `"collection_id": { "$in": ${collectionIDs} }`;
        filterJsonStr = filterJsonStr + ', ';
    }

    let productTypes = req.query.product_types ? JSON.parse(req.query.product_types) : null;
    if (productTypes && productTypes.length > 0) {
        filterJsonStr = filterJsonStr + `"product_type": { "$in": ${productTypes} }`;
        filterJsonStr = filterJsonStr + ', ';
    }

    let priceRanges = req.query.price_ranges ? JSON.parse(req.query.price_ranges) : null;
    let priceRangesParams = '';
    if (priceRanges && priceRanges.length > 0) {
        priceRangesParams = priceRangesParams + '"$or": [';
        for (let i = 0; i < priceRanges.length; i++) {
            let priceRange = priceRanges[i];
            priceRangesParams =
                priceRangesParams +
                `{ "$and": [ { "price": { "$gte": ${priceRange.from} } }, { "price": { "$lte": ${priceRange.to} } } ] }`;
            if (i < priceRanges.length) {
                priceRangesParams = priceRangesParams + ', ';
            }
        }
        priceRangesParams = priceRangesParams + ']';
    }
    if (priceRangesParams && priceRangesParams.length > 0) {
        filterJsonStr = filterJsonStr + priceRangesParams;
    }
    // Add closing parenthesis and Remove last comma separator
    filterJsonStr = filterJsonStr + ' }';
    filterJsonStr = filterJsonStr.replace(/,([^,]*)$/, ' $1');
    let filterObj = JSON.parse(filterJsonStr);

    let comparedBudget =
        req.query.compared_budget && parseInt(req.query.compared_budge) > 0
            ? req.query.compared_budget
            : null;

    let plannedBudget =
        req.query.planned_budget && parseInt(req.query.planned_budget) > 0
            ? req.query.planned_budget
            : null;

    let purchaseID = req.query.purchase_id ? req.query.purchase_id : null;
    let purchaseTitle = req.query.purchase_title ? req.query.purchase_title : null;

    let param = {
        purchase_title: purchaseTitle,
        collection: collections,
        product_type: productTypes,
        price_range: priceRanges,
        planned_budget: plannedBudget,
        compared_budget: comparedBudget
    };

    const variantIndicators = await VariantIndicator.findByFilter(filterObj);
    if (param && variantIndicators) {
        const purchase = prototypePurchase(param, variantIndicators);

        const groupByProperties = ['collection_title', 'product_type'];
        const sumByProperties = [
            'inventory_quantity',
            'inventory_optimal',
            'purchase_quantity_to_buy',
            'purchase_quantity_to_buy_modified'
        ];
        const purchaseGroupedByDivisionCategory = groupBySumDivisionCategory({
            group: purchase.purchases,
            by: groupByProperties,
            sum: sumByProperties
        });

        let results = {};
        results.purchase = purchase;
        results.purchaseGroupedByDivisionCategory = purchaseGroupedByDivisionCategory;
        return res.status(200).json(results);
    } else {
        return res.status(404).json({ error: res.$t('variantIndicators_error_NOTFOUND') });
    }
});

/**
 * @description POST /api/purchase
 */
// router.post(
//     '/',
//     [passport.authenticate('jwt', { session: false }), checkCreateRoomFields],
//     async (req, res) => {
//         let errors = [];

//         const room = await Room.findOne({ name: req.body.room_name }).exec();
//         if (room) {
//             if (room.name === req.body.room_name) {
//                 errors.push({ param: 'room_taken', msg: res.$t('room_error_NAMEEXISTS') });
//             }
//             return res.json({ errors: createErrorObject(errors) });
//         } else {
//             const newRoom = new Room({
//                 name: req.body.room_name,
//                 user: req.user.id,
//                 access: req.body.password ? false : true,
//                 password: req.body.password
//             });

//             if (newRoom.access === false) {
//                 newRoom.accessIds.push(req.user.id);
//             }

//             newRoom
//                 .save()
//                 .then(room => {
//                     Room.populate(room, { path: 'user', select: 'username' }, (err, room) => {
//                         if (err) {
//                             console.log(err);
//                         }
//                         return res.status(200).json(room);
//                     });
//                 })
//                 .catch(err => {
//                     return res.json(err);
//                 });
//         }
//     }
// );

/**
 * @description POST /api/room/verify
 */
// router.post('/verify', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     if (!req.body.password === true) {
//         return res.json({
//             errors: createErrorObject([
//                 {
//                     param: 'password_required',
//                     msg: res.$t('password_error_REQUIRED')
//                 }
//             ])
//         });
//     }

//     const room = await Room.findOne({ name: req.body.room_name }).exec();

//     if (room) {
//         const verified = await room.isValidPassword(req.body.password);

//         if (verified === true) {
//             room.accessIds.push(req.user.id);
//             await room.save();
//             return res.status(200).json({ success: true });
//         } else {
//             return res.json({
//                 errors: createErrorObject([
//                     {
//                         param: 'invalid_password',
//                         msg: res.$t('password_error_INVALID')
//                     }
//                 ])
//             });
//         }
//     } else {
//         return res.status(404).json({
//             errors: `${res.$t('room_error_NONAME')} ${req.params.room_name} ${res.$t('found')}`
//         });
//     }
// });

/**
 * @description DELETE /api/room/:room_name
 */
// router.delete('/:room_name', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     try {
//         const room = await Room.findOneAndDelete({ name: req.params.room_name })
//             .populate('user', ['username'])
//             .select('-password')
//             .lean();

//         if (room) {
//             return res.status(200).json(room);
//         } else {
//             return res.status(404).json({
//                 errors: `${res.$t('room_error_NONAME')}
//                 ${req.params.room_name} ${res.$t('found')} + ',' + ${res.$t('will_redirect')}`
//             });
//         }
//     } catch (err) {
//         return res.status(404).json(err);
//     }
// });

/**
 * @description PUT /api/room/update/name
 */
// router.post('/update/name', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     req.check('new_room_name')
//         .isString()
//         .isLength({ min: 5, max: 20 })
//         .withMessage(res.$t('room_error_LENGTH'));

//     let errors = req.validationErrors();

//     if (errors.length > 0) {
//         return res.send({
//             errors: createErrorObject(errors)
//         });
//     }

//     const room = await Room.findOneAndUpdate(
//         { name: req.body.room_name },
//         { name: req.body.new_room_name },
//         { fields: { password: 0 }, new: true }
//     )
//         .populate('user', ['username'])
//         .populate('users.lookup', ['username']);

//     if (room) {
//         return res.status(200).json(room);
//     } else {
//         return res.status(404).json({
//             errors: `${res.$t('room_error_NONAME')} ${req.params.room_name} ${res.$t('found')}`
//         });
//     }
// });

/**
 * @description PUT /api/room/remove/users
 */
// router.post('/remove/users', passport.authenticate('jwt', { session: false }), async (req, res) => {
//     const room = await Room.findOne({ name: req.body.room_name });

//     if (room) {
//         if (room.users.find(user => user.lookup.toString() === req.user.id)) {
//             room.users = room.users.filter(user => user.lookup.toString() !== req.user.id);
//             await room.save();
//         }
//         const returnRoom = await Room.populate(room, {
//             path: 'user users.lookup',
//             select: 'username social image handle'
//         });
//         return res.status(200).json(returnRoom);
//     } else {
//         return res.status(404).json({
//             errors: `${res.$t('room_error_NONAME')} ${req.params.room_name} ${res.$t('found')}`
//         });
//     }
// });

/**
 * @description PUT /api/room/remove/users/:id/all
 */
// router.put(
//     '/remove/users/all',
//     passport.authenticate('jwt', { session: false }),
//     async (req, res) => {
//         await Room.updateMany({ $pull: { users: { $in: [req.body.user_id] } } });

//         const rooms = await Room.find({})
//             .populate('user', ['username'])
//             .populate('users.lookup', ['username'])
//             .select('-password')
//             .exec();

//         if (rooms) {
//             return res.status(200).json(rooms);
//         } else {
//             return res.status(404).json({ error: res.$t('rooms_error_NOTFOUND') });
//         }
//     }
// );

/**
 * Prototype new object with parameter properties
 * @param param Parameters used to filter data for purchase
 * @param variantIndicators List of object as of search result
 * @returns {Purchase} Purchase object model
 */
function prototypePurchase(param, variantIndicators) {
    let purchase = {};
    if (!param && !variantIndicators) return purchase;
    let newPurchases = [];
    for (let key in variantIndicators) {
        let variantIndicator = variantIndicators[key];
        let newPurchase = {};
        newPurchase.product_id = variantIndicator.product_id;
        newPurchase.variant_id = variantIndicator.variant_id;
        newPurchase.title = variantIndicator.title;
        newPurchase.handle = variantIndicator.handle;
        newPurchase.product_type = variantIndicator.product_type;
        newPurchase.collection_title = variantIndicator.collection_title;
        newPurchase.image_src = variantIndicator.image_src;
        newPurchase.sku = variantIndicator.sku;
        newPurchase.price = variantIndicator.price;
        newPurchase.size = variantIndicator.size;
        newPurchase.color = variantIndicator.color;
        newPurchase.material = variantIndicator.material;
        newPurchase.vendor = variantIndicator.vendor;
        newPurchase.inventory_quantity = variantIndicator.inventory_quantity;
        newPurchase.inventory_cost = variantIndicator.inventory_cost;
        newPurchase.inventory_optimal = variantIndicator.inventory_optimal;
        newPurchase.purchase_quantity_to_buy = 95;
        newPurchase.purchase_quantity_to_buy_modified = 95;
        newPurchase.purchase_cost = 950;
        newPurchase.purchase_cost_modified = 950;
        newPurchases.push(newPurchase);
    }
    purchase = new Purchase({
        param: param,
        purchases: newPurchases
    });

    return purchase;
}

/**
 * GroupBy and Sum
 * @param data Array of objects to be grouped by
 * @param groupByProperties Array of properties to group of
 * @returns [groupBySumDivisionResult] Array of objects grouped and summed
 */
const groupBySumDivisionCategory = ({
    group: data,
    by: groupByProperties,
    sum: sumByProperties
}) => {
    getGroupedItems = item => {
        returnArray = [];
        let i;
        for (i = 0; i < groupByProperties.length; i++) {
            returnArray.push(item[groupByProperties[i]]);
        }
        return returnArray;
    };

    getReducedDataRecord = item => {
        let concatProperties = _.concat(groupByProperties, sumByProperties);
        return _.pick(item, concatProperties);
    };

    let groupResult = {};
    for (let i = 0; i < data.length; i++) {
        const fullDataRecord = data[i];
        const group = JSON.stringify(getGroupedItems(fullDataRecord));
        groupResult[group] = groupResult[group] || [];

        const reducedDataRecord = getReducedDataRecord(fullDataRecord);
        groupResult[group].push(reducedDataRecord);
    }

    result = [];
    for (let i in groupResult) {
        let groupArray = groupResult[i];
        groupArray.forEach(function(item) {
            if (!this[item.collection_title] && !this[item.product_type]) {
                this[item.collection_title] = {
                    header: i18n.__('purchase.header'),
                    collection_title: item.collection_title,
                    product_type: item.product_type,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    purchase_quantity_to_buy: 0,
                    purchase_quantity_to_buy_modified: 0
                };
                result.push(this[item.collection_title]);
            }
            this[item.collection_title].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.collection_title].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.collection_title].purchase_quantity_to_buy += parseFloat(
                item.purchase_quantity_to_buy
            );
            this[item.collection_title].purchase_quantity_to_buy_modified += parseFloat(
                item.purchase_quantity_to_buy_modified
            );
        }, Object.create(null));
    }
    return result;
};

module.exports = router;

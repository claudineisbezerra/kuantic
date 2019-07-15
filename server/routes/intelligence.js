const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const CONSTANT = require('../utils/serverConstants');
const i18n = require('../plugins/i18n.js');
const { Collection } = require('../models/Collection');
const { ProductType } = require('../models/ProductType');
const { PriceRange } = require('../models/PriceRange');
const { Purchase } = require('../models/Purchase');
const { PurchasePlannedItem } = require('../models/PurchasePlannedItem');
const { PurchaseExecutedItem } = require('../models/PurchaseExecutedItem');
const { VariantIndicator } = require('../models/VariantIndicator');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/intelligence/purchase
 */
router.get('/init', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};

    let collectionProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };
    let collections = await Collection.find({}, collectionProjection);
    if (collections) {
        results.collections = collections;
    } else {
        return res.status(404).json({ error: res.$t('collections_error_NOTFOUND') });
    }

    let productTypeProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };
    let productTypes = await ProductType.find({}, productTypeProjection);
    if (productTypes) {
        results.productTypes = productTypes;
    } else {
        return res.status(404).json({ error: res.$t('productTypes_error_NOTFOUND') });
    }

    let priceRangeProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };
    let priceRanges = await PriceRange.find({}, priceRangeProjection);
    if (priceRanges) {
        results.priceRanges = priceRanges;
    } else {
        return res.status(404).json({ error: res.$t('priceRanges_error_NOTFOUND') });
    }

    return res.status(200).json(results);
});

/**
 * @description GET /api/admin/intelligence/purchase
 */
router.get('/purchase', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let filterJsonStr = '{ ';
    let purchaseID = req.query.purchase_id ? req.query.purchase_id : null;
    let purchaseTitle = req.query.purchase_title ? req.query.purchase_title : null;

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
    let productTypeIDs = [];
    let productTypeTitles = [];
    if (productTypes) {
        for (let i = 0; i < productTypes.length; i++) {
            let productType = productTypes[i];
            productTypeIDs.push(productType.id);
            productTypeTitles.push(productType.title);
        }
    }
    if (productTypes && productTypes.length > 0) {
        filterJsonStr = filterJsonStr + `"product_type": { "$in": "${productTypeTitles}" }`;
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

    let plannedBudget =
        req.query.planned_budget && parseFloat(req.query.planned_budget) > 0
            ? req.query.planned_budget
            : 0;
    let planned_budget_not_used = req.query.planned_budget_not_used
        ? req.query.planned_budget_not_used
        : 0;

    let executedBudget = null;
    if (req.query.executed_budget && parseFloat(req.query.executed_budget) > 0) {
        executedBudget = parseFloat(req.query.executed_budget);
    } else {
        if (parseFloat(req.query.planned_budget) > 0) {
            executedBudget = parseFloat(req.query.planned_budget);
        }
    }

    let executed_budget_not_used = req.query.executed_budget_not_used
        ? req.query.executed_budget_not_used
        : 0;

    let params = {
        purchase_id: purchaseID,
        purchase_title: purchaseTitle,
        collection: collections,
        product_type: productTypes,
        price_range: priceRanges,
        planned_budget: plannedBudget,
        planned_budget_not_used: planned_budget_not_used,
        executed_budget: executedBudget,
        executed_budget_not_used: executed_budget_not_used
    };

    let variantIndicators = await VariantIndicator.findByFilter(filterObj);
    if (params && variantIndicators) {
        let purchase = computeRepurchase(params, variantIndicators);

        let purchasePlannedBudgetGroupedByCollectionProductType = [];
        if (plannedBudget && parseFloat(plannedBudget) > 0) {
            let groupByFields_plannedBudget = ['collection_title', 'product_type'];
            let sumByFields_plannedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'purchase_planned_quantity_to_buy',
                'purchase_executed_quantity_to_buy'
            ];
            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.PLANNED;
            objParam.groupByData = purchase.purchases;
            objParam.groupByFields = groupByFields_plannedBudget;
            objParam.sumByFields = sumByFields_plannedBudget;
            purchasePlannedBudgetGroupedByCollectionProductType = groupBySumCollectionProductType(
                objParam
            );
        }

        let purchasePlannedBudgetGroupedByProductType = [];
        if (plannedBudget && parseFloat(plannedBudget) > 0) {
            let groupByFields_plannedBudget = ['product_type'];
            let sumByFields_plannedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'purchase_planned_quantity_to_buy',
                'purchase_executed_quantity_to_buy'
            ];
            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.PLANNED;
            objParam.groupByData = purchase.purchases;
            objParam.groupByFields = groupByFields_plannedBudget;
            objParam.sumByFields = sumByFields_plannedBudget;
            purchasePlannedBudgetGroupedByProductType = groupBySumProductType(objParam);
        }

        let purchaseExecutedBudgetGroupedByCollectionProductType = [];
        if (executedBudget && parseFloat(executedBudget) > 0) {
            let groupByFields_executedBudget = ['collection_title', 'product_type'];
            let sumByFields_executedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'purchase_planned_quantity_to_buy',
                'purchase_executed_quantity_to_buy'
            ];

            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.EXECUTED;
            objParam.groupByData = purchase.purchases;
            objParam.groupByFields = groupByFields_executedBudget;
            objParam.sumByFields = sumByFields_executedBudget;
            purchaseExecutedBudgetGroupedByCollectionProductType = groupBySumCollectionProductType(
                objParam
            );
        }

        let purchaseExecutedBudgetGroupedByProductType = [];
        if (executedBudget && parseFloat(executedBudget) > 0) {
            let groupByFields_executedBudget = ['product_type'];
            let sumByFields_executedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'purchase_planned_quantity_to_buy',
                'purchase_executed_quantity_to_buy'
            ];
            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.EXECUTED;
            objParam.groupByData = purchase.purchases;
            objParam.groupByFields = groupByFields_executedBudget;
            objParam.sumByFields = sumByFields_executedBudget;
            purchaseExecutedBudgetGroupedByProductType = groupBySumProductType(objParam);
        }

        let results = {};
        results.purchase = purchase;
        results.purchasePlannedBudgetGroupedByCollectionProductType = purchasePlannedBudgetGroupedByCollectionProductType;
        results.purchasePlannedBudgetGroupedByProductType = purchasePlannedBudgetGroupedByProductType;

        results.purchaseExecutedBudgetGroupedByCollectionProductType = purchaseExecutedBudgetGroupedByCollectionProductType;
        results.purchaseExecutedBudgetGroupedByProductType = purchaseExecutedBudgetGroupedByProductType;
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
 * @param params Parameters used to filter data for purchase
 * @param plannedItems List of object as result of Planned Budget
 * @param executedItems List of object as result of Compared Budget
 * @returns {Purchase} Purchase object model
 */

function prototypePurchase(params, plannedItems, executedItems) {
    if (!params && !plannedItems) return purchase;

    let purchases = {};
    purchases.planned_items = [];
    purchases.executed_items = [];
    if (plannedItems && plannedItems.length > 0) {
        purchases.planned_items = plannedItems;
    }
    if (executedItems && executedItems.length > 0) {
        purchases.executed_items = executedItems;
    }

    let purchase = new Purchase({
        params: params,
        purchases: purchases
    });

    return purchase;
}

/**
 * Prototype new object with parameter properties
 * @param variantIndicators List of object as of search result
 * @param budgetType Type of budget to be processed I.E.: 'planned' or 'executed'
 * @param qtyBuyIn Qty of products to buy
 * @param valueBuyIn Value of products to buy
 * @returns {Purchase} Purchase object model
 */

function prototypePurchaseItem(variantIndicator, budgetType, qtyBuyIn, valueBuyIn) {
    if (!variantIndicator || !qtyBuyIn || !valueBuyIn) return purchaseItem;

    let purchaseItem = null;
    if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
        purchaseItem = new PurchasePlannedItem();
    }
    if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
        purchaseItem = new PurchaseExecutedItem();
    }

    purchaseItem.product_id = variantIndicator.product_id;
    purchaseItem.variant_id = variantIndicator.variant_id;
    purchaseItem.title = variantIndicator.title;
    purchaseItem.handle = variantIndicator.handle;
    purchaseItem.product_type = variantIndicator.product_type;
    purchaseItem.collection_title = variantIndicator.collection_title;
    purchaseItem.image_src = variantIndicator.image_src;
    purchaseItem.sku = variantIndicator.sku;
    purchaseItem.price = variantIndicator.price;
    purchaseItem.size = variantIndicator.size;
    purchaseItem.color = variantIndicator.color;
    purchaseItem.material = variantIndicator.material;
    purchaseItem.vendor = variantIndicator.vendor;
    purchaseItem.inventory_quantity = variantIndicator.inventory_quantity;
    purchaseItem.inventory_cost = variantIndicator.inventory_cost;
    purchaseItem.inventory_optimal = variantIndicator.inventory_optimal;

    purchaseItem.purchase_planned_quantity_to_buy = 0;
    purchaseItem.purchase_planned_value_to_buy = 0.0;
    if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
        purchaseItem.purchase_planned_quantity_to_buy = qtyBuyIn ? qtyBuyIn : 0;
        purchaseItem.purchase_planned_value_to_buy = valueBuyIn ? valueBuyIn : 0.0;
    }

    purchaseItem.purchase_executed_quantity_to_buy = 0;
    purchaseItem.purchase_executed_value_to_buy = 0.0;
    if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
        purchaseItem.purchase_executed_quantity_to_buy = qtyBuyIn ? qtyBuyIn : 0;
        purchaseItem.purchase_executed_value_to_buy = valueBuyIn ? valueBuyIn : 0.0;
    }

    return purchaseItem;
}

/**
 * GroupBy and SumBy Collection and Category
 * @param objParam Object parameter
 * @returns [purchaseGroupedByCollectionProductType] Array of objects grouped by and summed up
 */
const groupBySumCollectionProductType = objParam => {
    let result = [];
    if (!objParam) return result;
    let budgetType = objParam.budgetType;

    let groupByData = [];
    if (objParam.groupByData && Object.keys(objParam.groupByData).length > 0) {
        let planned_items = objParam.groupByData.planned_items;
        let executed_items = objParam.groupByData.executed_items;
        if (!planned_items || !executed_items) return result;

        if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
            _.forEach(planned_items, function(item, index) {
                _.assign(
                    item,
                    _.pick(
                        _.find(executed_items, function(o) {
                            return (
                                o.collection_title === item.collection_title &&
                                o.product_type === item.product_type &&
                                o.sku === item.sku
                            );
                        }),
                        ['purchase_executed_quantity_to_buy', 'purchase_executed_value_to_buy']
                    )
                );
                _.defaults(item, {
                    purchase_executed_quantity_to_buy: 0,
                    purchase_executed_value_to_buy: 0.0
                });
            });
            groupByData = planned_items;
        }

        if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
            _.forEach(executed_items, function(item, index) {
                _.assign(
                    item,
                    _.pick(
                        _.find(planned_items, function(o) {
                            return (
                                o.collection_title === item.collection_title &&
                                o.product_type === item.product_type &&
                                o.sku === item.sku
                            );
                        }),
                        ['purchase_planned_quantity_to_buy', 'purchase_planned_value_to_buy']
                    )
                );
                _.defaults(item, {
                    purchase_planned_quantity_to_buy: 0,
                    purchase_planned_value_to_buy: 0.0
                });
            });
            groupByData = executed_items;
        }
    }
    let groupByFields = objParam.groupByFields;
    let sumByFields = objParam.sumByFields;

    getGroupedItems = item => {
        returnArray = [];
        for (let i = 0; i < groupByFields.length; i++) {
            returnArray.push(item[groupByFields[i]]);
        }
        return returnArray;
    };

    getReducedDataRecord = item => {
        let concatProperties = _.concat(groupByFields, sumByFields);
        return _.pick(item, concatProperties);
    };

    let groupResult = {};
    for (let i = 0; i < groupByData.length; i++) {
        const fullDataRecord = groupByData[i];
        const group = JSON.stringify(getGroupedItems(fullDataRecord));
        groupResult[group] = groupResult[group] || [];

        const reducedDataRecord = getReducedDataRecord(fullDataRecord);
        groupResult[group].push(reducedDataRecord);
    }

    for (let i in groupResult) {
        let groupArray = groupResult[i];
        groupArray.forEach(function(item) {
            if (!this[item.collection_title] && !this[item.product_type]) {
                this[item.collection_title] = {
                    header: i18n.__('purchase_header_by_collection_product_type'),
                    collection_title: item.collection_title,
                    product_type: item.product_type,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    purchase_planned_quantity_to_buy: 0,
                    purchase_executed_quantity_to_buy: 0
                };
                result.push(this[item.collection_title]);
            }
            this[item.collection_title].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.collection_title].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.collection_title].purchase_planned_quantity_to_buy += parseFloat(
                item.purchase_planned_quantity_to_buy
            );
            this[item.collection_title].purchase_executed_quantity_to_buy += parseFloat(
                item.purchase_executed_quantity_to_buy
            );
        }, Object.create(null));
    }
    return result;
};

/**
 * GroupBy and SumBy Category
 * @param objParam Object parameter
 * @returns [purchaseGroupedByProductType] Array of objects grouped by and summed up
 */
const groupBySumProductType = objParam => {
    let result = [];
    if (!objParam) return result;
    let budgetType = objParam.budgetType;

    let groupByData = [];
    if (objParam.groupByData && Object.keys(objParam.groupByData).length > 0) {
        let planned_items = objParam.groupByData.planned_items;
        let executed_items = objParam.groupByData.executed_items;
        if (!planned_items || !executed_items) return result;

        if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
            _.forEach(planned_items, function(item, index) {
                _.assign(
                    item,
                    _.pick(
                        _.find(executed_items, function(o) {
                            return (
                                o.collection_title === item.collection_title &&
                                o.product_type === item.product_type &&
                                o.sku === item.sku
                            );
                        }),
                        ['purchase_executed_quantity_to_buy', 'purchase_executed_value_to_buy']
                    )
                );
                _.defaults(item, {
                    purchase_executed_quantity_to_buy: 0,
                    purchase_executed_value_to_buy: 0.0
                });
            });
            groupByData = planned_items;
        }

        if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
            _.forEach(executed_items, function(item, index) {
                _.assign(
                    item,
                    _.pick(
                        _.find(planned_items, function(o) {
                            return (
                                o.collection_title === item.collection_title &&
                                o.product_type === item.product_type &&
                                o.sku === item.sku
                            );
                        }),
                        ['purchase_planned_quantity_to_buy', 'purchase_planned_value_to_buy']
                    )
                );
                _.defaults(item, {
                    purchase_planned_quantity_to_buy: 0,
                    purchase_planned_value_to_buy: 0.0
                });
            });
            groupByData = executed_items;
        }
    }
    let groupByFields = objParam.groupByFields;
    let sumByFields = objParam.sumByFields;

    getGroupedItems = item => {
        returnArray = [];
        for (let i = 0; i < groupByFields.length; i++) {
            returnArray.push(item[groupByFields[i]]);
        }
        return returnArray;
    };

    getReducedDataRecord = item => {
        let concatProperties = _.concat(groupByFields, sumByFields);
        return _.pick(item, concatProperties);
    };

    let groupResult = {};
    for (let i = 0; i < groupByData.length; i++) {
        const fullDataRecord = groupByData[i];
        const group = JSON.stringify(getGroupedItems(fullDataRecord));
        groupResult[group] = groupResult[group] || [];

        const reducedDataRecord = getReducedDataRecord(fullDataRecord);
        groupResult[group].push(reducedDataRecord);
    }

    result = [];
    for (let i in groupResult) {
        let groupArray = groupResult[i];
        groupArray.forEach(function(item) {
            if (!this[item.product_type] && !this[item.product_type]) {
                this[item.product_type] = {
                    header: i18n.__('purchase_header_by_product_type'),
                    product_type: item.product_type,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    purchase_planned_quantity_to_buy: 0,
                    purchase_executed_quantity_to_buy: 0
                };
                result.push(this[item.product_type]);
            }
            this[item.product_type].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.product_type].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.product_type].purchase_planned_quantity_to_buy += parseFloat(
                item.purchase_planned_quantity_to_buy
            );
            this[item.product_type].purchase_executed_quantity_to_buy += parseFloat(
                item.purchase_executed_quantity_to_buy
            );
        }, Object.create(null));
    }
    return result;
};

/**
 * Calculate and prototype new object result
 * @param params Parameters used to filter data for purchase
 * @param variantIndicators List of object as of search result
 * @returns {purchase} Purchase object model
 */
const computeRepurchase = (params, variantIndicators) => {
    if (!params || !variantIndicators) return;

    // Execute Planned Budget
    let planned_items = [];
    let budgetToExecute = 0;
    if (parseFloat(params.planned_budget) > 0) {
        budgetToExecute = parseFloat(params.planned_budget);
    }

    for (let i in variantIndicators) {
        let variantIndicator = variantIndicators[i];
        let itemCost =
            variantIndicator.inventory_cost > 0 ? parseFloat(variantIndicator.inventory_cost) : 0;
        let qtyBuyIn = parseFloat(
            variantIndicator.inventory_optimal - variantIndicator.inventory_quantity
        );
        let valueBuyIn = parseFloat(itemCost * qtyBuyIn);

        if (budgetToExecute >= 0 && budgetToExecute >= itemCost) {
            if (budgetToExecute >= 0 && budgetToExecute >= valueBuyIn) {
                budgetToExecute = budgetToExecute - valueBuyIn;
            } else {
                while (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemCost &&
                    budgetToExecute < valueBuyIn
                ) {
                    qtyBuyIn = qtyBuyIn - 1;
                    valueBuyIn = parseFloat(itemCost * qtyBuyIn);
                }
                if (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemCost &&
                    budgetToExecute >= valueBuyIn
                ) {
                    budgetToExecute = budgetToExecute - valueBuyIn;
                }
            }
            let planned_item = prototypePurchaseItem(
                variantIndicator,
                CONSTANT.BUDGET.TYPE.PLANNED,
                qtyBuyIn,
                valueBuyIn
            );
            planned_items.push(planned_item);
        }
    }
    params.planned_budget_not_used = budgetToExecute;

    // Execute Compared Budget
    let executed_items = [];
    budgetToExecute = 0;
    if (parseFloat(params.executed_budget) > 0) {
        budgetToExecute = parseFloat(params.executed_budget);
    } else {
        if (parseFloat(params.planned_budget) > 0) {
            budgetToExecute = parseFloat(params.planned_budget);
        }
    }

    for (let i in variantIndicators) {
        let variantIndicator = variantIndicators[i];
        let itemCost =
            variantIndicator.inventory_cost > 0 ? parseFloat(variantIndicator.inventory_cost) : 0;
        let qtyBuyIn = parseFloat(
            variantIndicator.inventory_optimal - variantIndicator.inventory_quantity
        );
        let valueBuyIn = parseFloat(itemCost * qtyBuyIn);

        if (budgetToExecute >= 0 && budgetToExecute >= itemCost) {
            if (budgetToExecute >= 0 && budgetToExecute >= valueBuyIn) {
                budgetToExecute = budgetToExecute - valueBuyIn;
            } else {
                while (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemCost &&
                    budgetToExecute < valueBuyIn
                ) {
                    qtyBuyIn = qtyBuyIn - 1;
                    valueBuyIn = parseFloat(itemCost * qtyBuyIn);
                }
                if (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemCost &&
                    budgetToExecute >= valueBuyIn
                ) {
                    budgetToExecute = budgetToExecute - valueBuyIn;
                }
            }
            let executed_item = prototypePurchaseItem(
                variantIndicator,
                CONSTANT.BUDGET.TYPE.EXECUTED,
                qtyBuyIn,
                valueBuyIn
            );
            executed_items.push(executed_item);
        }
    }
    params.executed_budget_not_used = budgetToExecute;

    let purchase = prototypePurchase(params, planned_items, executed_items);

    return purchase;
};

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');

const { Purchase } = require('../models/Purchase');

const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/intelligence/purchase
 */
router.get('/purchase', passport.authenticate('jwt', { session: false }), async (req, res) => {
    // console.log('/purchase REACHED ...');
    // console.log('intelligence.js req.query', req.query);
    let collection = req.query.collection ? req.query.collection : null;
    let product_type = req.query.product_type ? req.query.product_type : null;
    let price_range = req.query.price_range ? req.query.price_range : null;
    let compared_budget =
        req.query.compared_budget && parseInt(req.query.compared_budge) > 0
            ? req.query.compared_budget
            : null;
    let planned_budget =
        req.query.planned_budget && parseInt(req.query.planned_budget) > 0
            ? req.query.planned_budget
            : null;

    console.log('intelligence.js collection', collection);
    console.log('intelligence.js product_type', product_type);
    console.log('intelligence.js price_range', price_range);
    console.log('intelligence.js compared_budget', compared_budget);
    console.log('intelligence.js planned_budget', planned_budget);

    return false;

    // const purchases = await Purchase.find({})
    //     .populate('user', ['username'])
    //     .populate('users.lookup', ['username'])
    //     .select('-password')
    //     .exec();

    // if (purchases) {
    //     return res.status(200).json(purchases);
    // } else {
    //     return res.status(404).json({ error: res.$t('purchases_error_NOTFOUND') });
    // }
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

module.exports = router;

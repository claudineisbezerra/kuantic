const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Coverage } = require('../models/Coverage');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/coverage/getCoverages
 */
router.get('/getCoverages', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};
    let coverageProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };

    let coverage = await Coverage.findOne({}, coverageProjection);
    if (coverage) {
        results.coverage = coverage;
    } else {
        return res.status(404).json({ error: res.$t('coverage_error_NOTFOUND') });
    }

    return res.status(200).json(results);
});

/**
 * @description POST /api/admin/coverage/update
 */
router.post('/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};
    req.check('coverage_min')
        .isNumeric()
        .withMessage(res.$t('coverage_error_NOTNUMERIC'));
    req.check('coverage_optimal')
        .isNumeric()
        .withMessage(res.$t('coverage_error_NOTNUMERIC'));
    let errors = req.validationErrors();
    if (errors.length > 0) {
        return res.send({
            errors: createErrorObject(errors)
        });
    }
    let filter = { 'product_types._id': req.body._id };
    let update = {
        $set: {
            'product_types.$.coverage_min': req.body.coverage_min,
            'product_types.$.coverage_optimal': req.body.coverage_optimal
        }
    };
    let options = { upsert: true, new: true };
    let coverage = await Coverage.findOneAndUpdate(filter, update, options);
    if (coverage) {
        results.coverage = coverage;
        return res.status(200).json(results);
    } else {
        return res.status(500).json({
            errors: `${res.$t('coverage_error_UPDATE')}`
        });
    }
});

/**
 * @description DELETE /api/admin/coverage/remove
 */
router.delete('/remove', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let results = {};
        let filter = { 'product_types._id': req.query._id };
        let update = { $pull: { product_types: { _id: req.query._id } } };
        let options = { new: true, multi: true };

        let coverage = await Coverage.findOneAndUpdate(filter, update, options);
        if (coverage) {
            results.coverage = coverage;
            return res.status(200).json(results);
        } else {
            return res.status(500).json({
                errors: `${res.$t('coverage_error_REMOVE')}`
            });
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;

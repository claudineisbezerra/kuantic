const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Configurations } = require('../models/Configurations');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/config/getConfigs
 */
router.get('/getConfigs', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};
    let configurationsProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };

    let configurations = await Configurations.findOne({}, configurationsProjection);
    if (configurations) {
        results.configurations = configurations;
    } else {
        return res.status(404).json({ error: res.$t('configurations_error_NOTFOUND') });
    }

    return res.status(200).json(results);
});

/**
 * @description POST /api/admin/config/updateCoverage
 */
router.post(
    '/updateCoverage',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
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
        let filter = { 'coverages._id': req.body._id };
        let update = {
            $set: {
                'coverages.$.coverage_min': req.body.coverage_min,
                'coverages.$.coverage_optimal': req.body.coverage_optimal
            }
        };
        let options = { upsert: true, new: true };
        let configurations = await Configurations.findOneAndUpdate(filter, update, options);
        if (configurations) {
            results.configurations = configurations;
            return res.status(200).json(results);
        } else {
            return res.status(500).json({
                errors: `${res.$t('coverage_error_UPDATE')}`
            });
        }
    }
);

/**
 * @description DELETE /api/admin/config/removeCoverage
 */
router.delete(
    '/removeCoverage',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            let results = {};
            let filter = { 'coverages._id': req.query._id };
            let update = { $pull: { coverages: { _id: req.query._id } } };
            let options = { new: true, multi: true };

            let configurations = await Configurations.findOneAndUpdate(filter, update, options);
            if (configurations) {
                results.configurations = configurations;
                return res.status(200).json(results);
            } else {
                return res.status(500).json({
                    errors: `${res.$t('coverage_error_REMOVE')}`
                });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);

module.exports = router;

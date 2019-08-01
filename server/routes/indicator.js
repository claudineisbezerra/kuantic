const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ProductVariant } = require('../models/ProductVariant');
const { ProductImage } = require('../models/ProductImage');
const { ProductVariantIndicator } = require('../models/ProductVariantIndicator');
const { DailyProductVariantIndicator } = require('../models/DailyProductVariantIndicator');
const { InventoryItem } = require('../models/InventoryItem');
const { InventoryLevel } = require('../models/InventoryLevel');
const { Indicator } = require('../models/Indicator');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/indicator/composeIndicators
 */
router.get(
    '/composeIndicators',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        // 1. Get ALL Variant data
        // let productVariants = await getProductVariants();
        // console.log('/composeIndicators productVariants:', productVariants);

        // 2. Get Inventory data of all productVariants (ITEM)
        // 3. Get Inventory daily balance

        let dailyIndicators = await composeDailyIndicators();
        console.log('/composeIndicators dailyIndicators:', dailyIndicators);

        // TODOS OS DADOS DEVEM SER CALCULADOS POR DIA (Mesmo se não houver movimento, deverá haver registro com indicações zeradas)
        // 4. Get Coverage settings data (configurações de cobertura mínima / cobertura ideal)
        // 5. Calcular quantidade de productVariants (QUANTIDADE DE ITENS VENDIDOS POR DIA)
        // 6. Calcular valor de productVariants (VALOR DE ITENS VENDIDOS POR DIA)
        // 7. Calcular indicador diário de POTENCIAL DE VENDA
        // 8. Calcular indicador diário de ESTOQUE IDEAL
        // 9. Calcular indicador diário de PC1
        // 10. Calcular indicador diário de PC1 / ITEM
        let results = {};
        let indicatorProjection = {
            created_at: false,
            updated_at: false,
            __v: false,
            _id: false
        };

        let indicator = await Indicator.findOne({}, indicatorProjection);
        if (indicator) {
            results.indicator = indicator;
        } else {
            return res.status(404).json({ error: res.$t('indicator_error_NOTFOUND') });
        }

        return res.status(200).json(results);
    }
);
/**
 * @description GET /api/admin/indicator/getIndicators
 */
router.get('/getIndicators', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};
    let indicatorProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };

    let indicator = await Indicator.findOne({}, indicatorProjection);
    if (indicator) {
        results.indicator = indicator;
    } else {
        return res.status(404).json({ error: res.$t('indicator_error_NOTFOUND') });
    }

    return res.status(200).json(results);
});

/**
 * @description POST /api/admin/indicator/update
 */
router.post('/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = {};
    req.check('indicator_min')
        .isNumeric()
        .withMessage(res.$t('indicator_error_NOTNUMERIC'));
    req.check('indicator_optimal')
        .isNumeric()
        .withMessage(res.$t('indicator_error_NOTNUMERIC'));
    let errors = req.validationErrors();
    if (errors.length > 0) {
        return res.send({
            errors: createErrorObject(errors)
        });
    }
    let filter = { 'product_types._id': req.body._id };
    let update = {
        $set: {
            'product_types.$.indicator_min': req.body.indicator_min,
            'product_types.$.indicator_optimal': req.body.indicator_optimal
        }
    };
    let options = { upsert: true, new: true };
    let indicator = await Indicator.findOneAndUpdate(filter, update, options);
    if (indicator) {
        results.indicator = indicator;
        return res.status(200).json(results);
    } else {
        return res.status(500).json({
            errors: `${res.$t('indicator_error_UPDATE')}`
        });
    }
});

/**
 * @description DELETE /api/admin/indicator/remove
 */
router.delete('/remove', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let results = {};
        let filter = { 'product_types._id': req.query._id };
        let update = { $pull: { product_types: { _id: req.query._id } } };
        let options = { new: true, multi: true };

        let indicator = await Indicator.findOneAndUpdate(filter, update, options);
        if (indicator) {
            results.indicator = indicator;
            return res.status(200).json(results);
        } else {
            return res.status(500).json({
                errors: `${res.$t('indicator_error_REMOVE')}`
            });
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

/**
 * GET Compose dailyIndicators collection
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyIndicators() {
    let dailyProductVariantsIndicator = [];
    let productVariants = ProductVariant.find({}).cursor();
    await productVariants.eachAsync(async function(variant) {
        let dailyProductVariantIndicator = new DailyProductVariantIndicator();
        dailyProductVariantIndicator.indicator_at = getDateKey();
        dailyProductVariantIndicator.product_id = variant.product_id;
        dailyProductVariantIndicator.variant_id = variant.id;

        dailyProductVariantIndicator.image_id = variant.image_id;

        // Get image_src from productImages collection
        let images = ProductImage.find({ id: variant.image_id }).cursor();
        let image_src = null;
        await images.eachAsync(async function(image) {
            image_src = image['src'];
        });
        dailyProductVariantIndicator.image_src = image_src;

        dailyProductVariantIndicator.inventory_item_id = variant.inventory_item_id;

        // Get cost from inventoryItems collection;
        let inventoryItems = InventoryItem.find({ id: variant.inventory_item_id }).cursor();
        let cost = null;
        await inventoryItems.eachAsync(async function(inventoryItem) {
            cost = inventoryItem['cost'];
        });
        dailyProductVariantIndicator.inventory_unit_cost = cost ? cost : 0.0;

        dailyProductVariantIndicator.inventory_quantity = variant.inventory_quantity
            ? variant.inventory_quantity
            : 0.0;
        dailyProductVariantIndicator.price = variant.price ? variant.price : 0.0;
        dailyProductVariantIndicator.sku = variant.sku;
        dailyProductVariantsIndicator.push(dailyProductVariantIndicator);
    });

    return dailyProductVariantsIndicator;
}
/**
 * GET ProductVariants
 * @returns { productVariants } ProductVariants collection model
 */
function getProductVariants() {
    let variantProjection = {
        created_at: false,
        updated_at: false,
        __v: false,
        _id: false
    };

    ProductVariant.find({}, variantProjection)
        .then(productVariants => {
            return productVariants;
        })
        .catch(errors => {
            console.log('Variant errors:', errors);
        });
}
/**
 * GET Formatted date key
 * @returns { Date } Format date YYYYMMDD
 */
function getDateKey() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = `0${dd}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    let formattedDate = `${yyyy}${mm}${dd}`;
    console.log('formattedDate: ', formattedDate);
    return formattedDate;
}
/**
 * GET Compose productVariantsInventory collection
 * @returns { productVariantsInventory } productVariantsInventory collection model
 */
async function getAggregatedInventory() {
    let productVariantsInventory = [];
    let items = InventoryItem.find({}).cursor();
    let available = 0;
    await items.eachAsync(async function(item) {
        // Aggregate of inventory across all locations
        let levels = InventoryLevel.find({ inventory_item_id: item.id }).cursor();
        await levels.eachAsync(async function(level) {
            available += level['available'];
        });
    });
    return available;
}

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Product } = require('../models/Product');
const { ProductVariant } = require('../models/ProductVariant');
const { ProductImage } = require('../models/ProductImage');
const { Configurations } = require('../models/Configurations');
const { ProductVariantIndicator } = require('../models/ProductVariantIndicator');
const { DailyProductVariantIndicator } = require('../models/DailyProductVariantIndicator');
const { InventoryItem } = require('../models/InventoryItem');
const { InventoryLevel } = require('../models/InventoryLevel');
const { Indicator } = require('../models/Indicator');
const { Order } = require('../models/Order');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');
const CONSTANT = require('../utils/serverConstants');

/**
 * @description GET /api/admin/indicator/composeDailyIndicators
 */
router.get(
    '/composeDailyIndicators',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        // 1. Get ALL Variant data
        // 2. Get Inventory data of all productVariants (ITEM)
        // 3. Get Inventory daily balance (Quantidade de estoque no dia. Será usado como histórico de estoques)
        // 4. Configurar CRUD para CONFIG coverage properties
        // 5. onfigurar CRUD para CONFIG de INTERVALO DE PROCESSAMENTO DE INFORMAÇÕES
        // 6. Get and distribute coverage properties over Variants
        // 7. Calcular quantidade de productVariants (QUANTIDADE DE ITENS VENDIDOS POR DIA)
        // 8. Calcular valor de productVariants (VALOR DE ITENS VENDIDOS POR DIA)
        let dailyIndicators = await composeDailyIndicators();
        console.log('/summaryIndicators dailyIndicators.length:', dailyIndicators.length);

        let results = {};
        if (dailyIndicators) {
            results.indicators = dailyIndicators;
        } else {
            return res.status(404).json({ error: res.$t('summaryIndicator_error_NOTFOUND') });
        }

        return res.status(200).json(results);
    }
);

/**
 * @description GET /api/admin/indicator/composeSummaryIndicators
 */
router.get(
    '/composeSummaryIndicators',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        // TODOS OS DADOS DEVEM SER CALCULADOS POR DIA (Mesmo se não houver movimento, deverá haver registro com indicações zeradas)
        // 9. Calcular PERIODO COM ESTOQUE
        // 10. Calcular indicador diário de POTENCIAL DE VENDA
        // 11. Calcular indicador diário de ESTOQUE IDEAL
        // 12. Calcular indicador diário de PC1
        // 13. Calcular indicador diário de PC1 / ITEM
        let summaryIndicators = await composeDailyIndicators();
        console.log('/summaryIndicators summaryIndicators.length:', summaryIndicators.length);

        let results = {};
        if (summaryIndicators) {
            results.indicators = summaryIndicators;
        } else {
            return res.status(404).json({ error: res.$t('summaryIndicator_error_NOTFOUND') });
        }

        return res.status(200).json(results);
    }
);

/**
 * @description GET Compose Indicators collection
 * @returns { indicators } Indicators collection model
 */
async function composeDailyIndicators() {
    let startDateKey = computeDaysToDateKey(new Date(), -Math.abs(days_of_calculation));
    let currentDateKey = getCurrentDateKey();

    // Obter quantidade de dias com estoque
    // SERÁ NECESSÁRIO MONTAR UM SELECT DISTINCT POR DATA
    // RESPEITANDO O RANGE DE BUSCA a partir de dailyIndicators

    // 1. Selecionar TODOS OS dailyIndicators contidos no RANGE DE DATAS (indicator_at)
    //    que possuam (inventory_quantity) maior que ZEROS
    // 2. Agrupar por (indicator_at, product_id, variant_id) e fazer COUNT dos registros

    // let days_of_inventory = 0;
    // dailyIndicators.forEach(async function(dailyIndicator) {
    //     if (
    //         parseInt(dailyIndicator.indicator_at) <= parseInt(currentDateKey) &&
    //         parseInt(dailyIndicator.indicator_at) >= parseInt(startDateKey)
    //     ) {
    //         days_of_inventory = days_of_inventory + 1;
    //     }
    // });

    return [];
}
/**
 * @description GET Compose dailyIndicators collection
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyIndicators() {
    // Compose dailyIndicators
    let dailyIndicators_0 = await composeDailyVariants();
    let dailyIndicators_1 = await composeDailyInventoryItems(dailyIndicators_0);
    let dailyIndicators_2 = await composeDailyCoverages(dailyIndicators_1);
    let dailyIndicators = await composeDailyOrders(dailyIndicators_2);

    // Persist dailyIndicators
    dailyIndicators.forEach(async function(dailyIndicator) {
        let filter = {
            indicator_at: dailyIndicator.indicator_at,
            product_id: dailyIndicator.product_id,
            variant_id: dailyIndicator.variant_id
        };
        let update = {
            $set: {
                indicator_at: dailyIndicator.indicator_at,
                product_id: dailyIndicator.product_id,
                variant_id: dailyIndicator.variant_id,
                title: dailyIndicator.title,
                handle: dailyIndicator.handle,
                product_type_id: dailyIndicator.product_type_id,
                product_type_title: dailyIndicator.product_type_title,
                collection_id: dailyIndicator.collection_id,
                collection_title: dailyIndicator.collection_title,
                image_id: dailyIndicator.image_id,
                image_src: dailyIndicator.image_src,
                sku: dailyIndicator.sku,
                price: dailyIndicator.price,
                size: dailyIndicator.size,
                color: dailyIndicator.color,
                material: dailyIndicator.material,
                vendor: dailyIndicator.vendor,
                inventory_item_id: dailyIndicator.inventory_item_id,
                inventory_quantity: dailyIndicator.inventory_quantity,
                inventory_unit_cost: dailyIndicator.inventory_unit_cost,
                coverage_min: dailyIndicator.coverage_min,
                coverage_optimal: dailyIndicator.coverage_optimal,
                sales_volume: dailyIndicator.sales_volume,
                sales_value: dailyIndicator.sales_value,
                pc1: dailyIndicator.pc1
            }
        };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        await DailyProductVariantIndicator.updateOne(filter, update, options, function(err, res) {
            if (error) {
                console.log(error);
            }
        });
    });

    return dailyIndicators;
}

/**
 * @description ADD ProductVariants data to dailyIndicators
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyVariants() {
    let paramObj = await getCalcParams();
    let at_date = paramObj.date_of_calculation.at_date
        ? paramObj.date_of_calculation.at_date
        : new Date();
    let indicator_at = parseToDateKey(at_date);

    try {
        return Product.find({})
            .exec()
            .then(products => {
                let dailyIndicators = [];
                products.forEach(async function(product) {
                    let product_type = product.product_type;
                    let variants = product.variants;
                    variants.forEach(async productVariant => {
                        let dailyIndicator = new DailyProductVariantIndicator();
                        dailyIndicator.indicator_at = indicator_at;
                        dailyIndicator.product_id = productVariant.product_id;
                        dailyIndicator.variant_id = productVariant.id;
                        dailyIndicator.image_id = productVariant.image_id;
                        // Get image_src from images collection
                        let images = product.images;
                        let image_src = null;
                        images.forEach(async function(image) {
                            image_src = image['src'];
                        });
                        dailyIndicator.image_src = image_src;
                        dailyIndicator.title = productVariant.product_title;
                        dailyIndicator.handle = productVariant.product_handle;
                        dailyIndicator.product_type_id = null;
                        dailyIndicator.product_type_title = product_type;
                        dailyIndicator.collection_id = null;
                        dailyIndicator.collection_title = null;
                        dailyIndicator.sku = productVariant.sku;
                        dailyIndicator.price = productVariant.price ? productVariant.price : 0.0;
                        dailyIndicator.size = productVariant.size ? productVariant.size : null;
                        dailyIndicator.color = productVariant.color ? productVariant.color : null;
                        dailyIndicator.material = productVariant.material
                            ? productVariant.material
                            : null;
                        dailyIndicator.vendor = productVariant.vendor
                            ? productVariant.vendor
                            : null;
                        dailyIndicator.inventory_item_id = productVariant.inventory_item_id;
                        dailyIndicator.inventory_quantity = productVariant.inventory_quantity
                            ? productVariant.inventory_quantity
                            : 0.0;
                        dailyIndicators.push(dailyIndicator);
                    });
                });
                return dailyIndicators;
            });
    } catch (error) {
        console.log(error);
    }
}

/**
 * @description ADD InventoryItem data to dailyIndicators
 * @param dailyIndicators dailyIndicators collection model
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyInventoryItems(dailyIndicators) {
    if (!dailyIndicators) return;
    try {
        return InventoryItem.find({})
            .exec()
            .then(inventoryItems => {
                inventoryItems.forEach(async function(inventoryItem) {
                    dailyIndicators.forEach(async function(dailyIndicator) {
                        if (dailyIndicator.inventory_item_id === inventoryItem.id) {
                            dailyIndicator.inventory_unit_cost = inventoryItem.cost
                                ? inventoryItem.cost
                                : 0.0;
                        }
                    });
                });
                return dailyIndicators;
            });
    } catch (error) {
        console.log(error);
    }
}

/**
 * @description ADD Coverages data to dailyIndicators
 * @param dailyIndicators dailyIndicators collection model
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyCoverages(dailyIndicators) {
    if (!dailyIndicators) return;
    try {
        return Configurations.find({})
            .exec()
            .then(configurations => {
                configurations.forEach(async function(configuration) {
                    configuration.coverages.forEach(async function(coverage) {
                        dailyIndicators.forEach(async function(dailyIndicator) {
                            if (dailyIndicator.product_type_title === coverage.product_type_title) {
                                dailyIndicator.coverage_min = coverage.coverage_min;
                                dailyIndicator.coverage_optimal = coverage.coverage_optimal;
                            }
                        });
                    });
                });
                return dailyIndicators;
            });
    } catch (error) {
        console.log(error);
    }
}

/**
 * @description GET configuration parameters to execute general calculations
 * @returns { paramObj } Calculation configurations
 */
async function getCalcParams() {
    let configurations = await Configurations.find({}).exec();
    let paramObj = {};
    configurations.forEach(function(configuration) {
        paramObj = configuration.calculation;
    });
    return paramObj;
}

/**
 * @description ADD Orders data to dailyIndicators
 * @param dailyIndicators dailyIndicators collection model
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyOrders(dailyIndicators) {
    if (!dailyIndicators) return;

    let paramObj = await getCalcParams();
    let at_date = paramObj.date_of_calculation.at_date;
    let startDate = parseDatetimeToDate(at_date);
    let endDate = parseDatetimeToDate(computeDaysToDate(at_date, 1));
    try {
        return Order.find({
            $and: [
                { processed_at: { $gte: new Date(startDate) } },
                { processed_at: { $lt: new Date(endDate) } }
            ]
        })
            .exec()
            .then(orders => {
                let items = {};
                orders.forEach(async function(order) {
                    let lineItems = order.line_items;
                    lineItems.forEach(async function(lineItem) {
                        let composedKey = `${lineItem.product_id}_${lineItem.variant_id}_${lineItem.sku}`;
                        let item = {};
                        item.product_id = lineItem.product_id;
                        item.variant_id = lineItem.variant_id;
                        item.sku = lineItem.sku;
                        let volume = parseInt(lineItem.quantity);
                        item.sales_volume = volume;

                        let value = parseInt(lineItem.quantity) * parseFloat(lineItem.price);
                        item.sales_value = parseFloat(value).toFixed(2);

                        if (items[composedKey]) {
                            let volume =
                                items[composedKey].sales_volume + parseInt(lineItem.quantity);
                            items[composedKey].sales_volume = volume;
                            let value =
                                parseFloat(items[composedKey].sales_value) +
                                parseInt(lineItem.quantity) * parseFloat(lineItem.price);
                            items[composedKey].sales_value = parseFloat(value).toFixed(2);
                        } else {
                            items[composedKey] = item;
                        }
                    });
                });

                for (let i in items) {
                    let item = items[i];
                    dailyIndicators.forEach(async function(dailyIndicator) {
                        if (
                            dailyIndicator.product_id === item.product_id &&
                            dailyIndicator.variant_id === item.variant_id &&
                            dailyIndicator.sku === item.sku
                        ) {
                            dailyIndicator.sales_volume = item.sales_volume;
                            dailyIndicator.sales_value = item.sales_value;
                        }
                    });
                }
                return dailyIndicators;
            });
    } catch (error) {
        console.log(error);
    }
}

/**
 * @description GET ProductVariants
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
        .catch(error => {
            console.log(error);
        });
}
/**
 * @description Convert string date to dateKey format
 * @param stringDate ISO formatted date (i.e. '2019-07-30T0300:00:000Z' | 'yyyy-mm-ddTLLhh:mm:sssZ')
 * @returns { substringDate } return format yyyymmdd
 */
function parseToDateKey(stringDate) {
    if (!stringDate) return null;

    let substringDate = stringDate
        .toISOString()
        .substring(0, 10)
        .replace(/\D/g, '');

    return substringDate;
}
/**
 * @description Convert datetime to date format
 * @param stringDate ISO formatted date (i.e. '2019-07-30T0300:00:000Z' | 'yyyy-mm-ddTLLhh:mm:sssZ')
 * @returns { substringDate } return format yyyy-mm-dd
 */
function parseDatetimeToDate(stringDate) {
    if (!stringDate) return null;
    let substringDate = stringDate.toISOString().substring(0, 10);
    return substringDate;
}
/**
 * @description GET Formatted date key
 * @returns { Date } Format date YYYYMMDD
 */
function getCurrentDateKey() {
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
    return formattedDate;
}
/**
 * @description GET Compute days to Date() and return formattedDate
 * @returns { formattedDate } Format date YYYYMMDD
 */
function computeDaysToDateKey(date, days) {
    if (!days) return;
    date.setDate(date.getDate() + parseInt(days));

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = `0${dd}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    let formattedDate = `${yyyy}${mm}${dd}`;
    return formattedDate;
}
/**
 * @description GET Compute days to Date()
 * @returns { date } new Date() without formatting
 */
function computeDaysToDate(date, days) {
    if (!days) return;
    date.setDate(date.getDate() + parseInt(days));

    // let dd = date.getDate();
    // let mm = date.getMonth() + 1;
    // let yyyy = date.getFullYear();
    // if (dd < 10) {
    //     dd = `0${dd}`;
    // }
    // if (mm < 10) {
    //     mm = `0${mm}`;
    // }
    // let formattedDate = `${yyyy}${mm}${dd}`;
    return date;
}
/**
 * @description GET Compose productVariantsInventory collection
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

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Product } = require('../models/Product');
const { Configurations } = require('../models/Configurations');
const { SummaryProductVariantIndicator } = require('../models/SummaryProductVariantIndicator');
const { DailyProductVariantIndicator } = require('../models/DailyProductVariantIndicator');
const { InventoryItem } = require('../models/InventoryItem');
const { InventoryLevel } = require('../models/InventoryLevel');
const { Collect } = require('../models/Collect');
const { Order } = require('../models/Order');
const { createErrorObject, checkCreateRoomFields } = require('../middleware/authenticate');

/**
 * @description GET /api/admin/indicator/composeDailyIndicators
 */
router.get(
    '/composeDailyIndicators',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        let dailyIndicators = await composeDailyIndicators();

        let results = {};
        if (dailyIndicators) {
            results.indicators = dailyIndicators;
        } else {
            return res.status(404).json({ error: res.$t('dailyIndicator_error_NOTFOUND') });
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
        let summaryIndicators = await composeSummaryIndicators();

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
 * @description GET Compose dailyIndicators
 *              Variants -> InventoryItems -> Coverages -> Orders
 *              await composeDailyOrders(
 *                await composeDailyVariants()
 *              );
 * @returns { dailyIndicators } dailyIndicators collection
 */
async function composeDailyIndicators() {
    let dailyIndicators = await composeDailyOrders(await composeDailyVariants());
    saveDailyIndicators(dailyIndicators);
    return dailyIndicators;
}
/**
 * @description ADD ProductVariants data to dailyIndicators
 * @returns { dailyIndicators } dailyIndicators collection
 */
async function composeDailyVariants() {
    let paramObj = await getCalculationParams();
    let at_date = paramObj.date_of_calculation.at_date
        ? paramObj.date_of_calculation.at_date
        : new Date();
    let indicator_at = parseToDateKey(at_date);
    let collections = await getCollections();

    try {
        return Product.find({})
            .exec()
            .then(products => {
                let dailyIndicators = [];
                products.forEach(async function(product) {
                    let product_id = product.id;
                    let product_type = product.product_type;
                    let product_title = product.title;
                    let variants = product.variants;
                    let coverageParam = await getCoverageParams(product_type);
                    variants.forEach(async productVariant => {
                        let dailyIndicator = new DailyProductVariantIndicator();
                        dailyIndicator.indicator_at = indicator_at;
                        dailyIndicator.product_id = productVariant.product_id;
                        dailyIndicator.variant_id = productVariant.id;
                        dailyIndicator.image_id = productVariant.image_id;

                        let images = product.images;
                        let image_src = null;
                        images.forEach(async function(image) {
                            image_src = image['src'];
                        });
                        dailyIndicator.image_src = image_src;
                        dailyIndicator.product_title = product_title;
                        dailyIndicator.variant_title = productVariant.title;
                        dailyIndicator.handle = productVariant.product_handle;
                        dailyIndicator.product_type_id = null;
                        dailyIndicator.product_type_title = product_type;
                        dailyIndicator.collection_id = findPropertyValueByProductId(
                            collections,
                            product_id,
                            'collection_id'
                        );
                        dailyIndicator.collection_title = findPropertyValueByProductId(
                            collections,
                            product_id,
                            'collection_title'
                        );
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
                        let inventoryItem = await getInventoryItem(
                            productVariant.inventory_item_id
                        );
                        dailyIndicator.inventory_unit_cost = inventoryItem
                            ? inventoryItem.cost
                            : null;

                        dailyIndicator.coverage_min = coverageParam.coverage_min
                            ? coverageParam.coverage_min
                            : 0;
                        dailyIndicator.coverage_optimal = coverageParam.coverage_optimal
                            ? coverageParam.coverage_optimal
                            : 0;

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
 * @description Get InventoryItem
 * @param itemId ID of the item to get
 * @returns { inventoryItem } inventoryItem object
 */
async function getInventoryItem(itemId) {
    if (!itemId) return;

    let filter = { id: itemId };
    let inventoryItem = await InventoryItem.findOne(filter).exec();
    return inventoryItem;
}
/**
 * @description ADD Orders data to dailyIndicators
 * @param dailyIndicators dailyIndicators collection model
 * @returns { dailyIndicators } dailyIndicators collection model
 */
async function composeDailyOrders(dailyIndicators) {
    if (!dailyIndicators) return;

    let paramObj = await getCalculationParams();
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
 * @description Persist dailyIndicators to database
 * @param dailyIndicators dailyIndicators collection model
 */
async function saveDailyIndicators(dailyIndicators) {
    if (!dailyIndicators) return;

    dailyIndicators.forEach(async function(indicator) {
        let filter = {
            indicator_at: indicator.indicator_at,
            product_id: indicator.product_id,
            variant_id: indicator.variant_id
        };
        let update = {
            $set: {
                indicator_at: indicator.indicator_at,
                product_id: indicator.product_id,
                variant_id: indicator.variant_id,
                product_title: indicator.product_title,
                variant_title: indicator.variant_title,
                handle: indicator.handle,
                product_type_id: indicator.product_type_id,
                product_type_title: indicator.product_type_title,
                collection_id: indicator.collection_id,
                collection_title: indicator.collection_title,
                image_id: indicator.image_id,
                image_src: indicator.image_src,
                sku: indicator.sku,
                price: indicator.price,
                size: indicator.size,
                color: indicator.color,
                material: indicator.material,
                vendor: indicator.vendor,
                inventory_item_id: indicator.inventory_item_id,
                inventory_quantity: indicator.inventory_quantity,
                inventory_unit_cost: indicator.inventory_unit_cost,
                coverage_min: indicator.coverage_min,
                coverage_optimal: indicator.coverage_optimal,
                sales_volume: indicator.sales_volume,
                sales_value: indicator.sales_value,
                pc1: indicator.pc1
            }
        };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        await DailyProductVariantIndicator.updateOne(filter, update, options, function(error, res) {
            if (error) {
                console.log(error);
            }
        });
    });
}

/**
 * @description GET Compose summaryIndicators
 *              Variants ->InventoryItems -> Coverages -> Orders
 *              await composeSummaryOrders(
 *                await composeSummaryVariants()
 *              );
 * @returns { indicators } summaryIndicators collection
 */
async function composeSummaryIndicators() {
    let summaryIndicators = await composeSummaryAggregated(await composeSummaryVariants());
    saveSummaryIndicators(summaryIndicators);
    return summaryIndicators;
}
/**
 * @description ADD ProductVariants data to summaryIndicators
 * @returns { summaryIndicators } summaryIndicators collection
 */
async function composeSummaryVariants() {
    let collections = await getCollections();

    try {
        return Product.find({})
            .exec()
            .then(products => {
                let summaryIndicators = [];
                products.forEach(async function(product) {
                    let product_id = product.id;
                    let product_type = product.product_type;
                    let product_title = product.title;
                    let variants = product.variants;
                    let coverageParam = await getCoverageParams(product_type);
                    variants.forEach(async productVariant => {
                        let summaryIndicator = new SummaryProductVariantIndicator();
                        summaryIndicator.product_id = productVariant.product_id;
                        summaryIndicator.variant_id = productVariant.id;
                        summaryIndicator.image_id = productVariant.image_id;

                        let images = product.images;
                        let image_src = null;
                        images.forEach(async function(image) {
                            image_src = image['src'];
                        });
                        summaryIndicator.image_src = image_src;

                        summaryIndicator.product_title = product_title;
                        summaryIndicator.variant_title = productVariant.title;
                        summaryIndicator.handle = productVariant.product_handle;
                        summaryIndicator.product_type_id = null;
                        summaryIndicator.product_type_title = product_type;
                        summaryIndicator.collection_id = findPropertyValueByProductId(
                            collections,
                            product_id,
                            'collection_id'
                        );
                        summaryIndicator.collection_title = findPropertyValueByProductId(
                            collections,
                            product_id,
                            'collection_title'
                        );
                        summaryIndicator.sku = productVariant.sku;
                        summaryIndicator.price = productVariant.price ? productVariant.price : 0.0;
                        summaryIndicator.size = productVariant.size ? productVariant.size : null;
                        summaryIndicator.color = productVariant.color ? productVariant.color : null;
                        summaryIndicator.material = productVariant.material
                            ? productVariant.material
                            : null;
                        summaryIndicator.vendor = productVariant.vendor
                            ? productVariant.vendor
                            : null;
                        summaryIndicator.inventory_item_id = productVariant.inventory_item_id;
                        summaryIndicator.inventory_quantity = productVariant.inventory_quantity
                            ? productVariant.inventory_quantity
                            : 0.0;
                        let inventoryItem = await getInventoryItem(
                            productVariant.inventory_item_id
                        );
                        summaryIndicator.inventory_unit_cost = inventoryItem
                            ? inventoryItem.cost
                            : null;

                        summaryIndicator.coverage_min = coverageParam.coverage_min
                            ? coverageParam.coverage_min
                            : 0;
                        summaryIndicator.coverage_optimal = coverageParam.coverage_optimal
                            ? coverageParam.coverage_optimal
                            : 0;

                        summaryIndicators.push(summaryIndicator);
                    });
                });
                return summaryIndicators;
            });
    } catch (error) {
        console.log(error);
    }
}
/**
 * @description Computes all aggregated indicators
 * @returns { aggregatedIndicators } aggregatedIndicators object
 */
async function composeSummaryAggregated(summaryIndicators) {
    if (!summaryIndicators) return;

    let paramObj = await getCalculationParams();
    let number_of_days = paramObj.days_of_calculation.number_of_days;
    let startDateKey = computeDaysToDateKey(new Date(), -Math.abs(number_of_days));
    let endDateKey = computeDaysToDateKey(new Date(), 1);

    let pipes = [
        {
            $match: {
                $and: [
                    { indicator_at: { $gte: startDateKey } },
                    { indicator_at: { $lt: endDateKey } },
                    { inventory_quantity: { $gt: 0 } }
                ]
            }
        },
        {
            $group: {
                _id: {
                    variant_id: '$variant_id'
                },
                sales_volume: { $sum: '$sales_volume' },
                avg_sales_volume: { $avg: '$sales_volume' },
                sales_value: { $sum: '$sales_value' },
                avg_sales_value: { $avg: '$sales_value' },
                inventory_available_days: { $sum: 1 }
            }
        },
        {
            $replaceRoot: {
                newRoot: {
                    variant_id: '$_id.variant_id',
                    sales_volume: '$sales_volume',
                    avg_sales_volume: '$avg_sales_volume',
                    sales_value: '$sales_value',
                    inventory_available_days: '$inventory_available_days'
                }
            }
        },
        {
            $sort: {
                variant_id: 1
            }
        }
    ];
    let aggregatedIndicators = [];
    let cursor = DailyProductVariantIndicator.aggregate(pipes)
        .cursor({ batchSize: 1000 })
        .exec();
    while ((aggregatedIndicator = await cursor.next())) {
        aggregatedIndicators.push(aggregatedIndicator);
    }

    aggregatedIndicators.forEach(async function(aggregatedIndicator) {
        summaryIndicators.forEach(async function(summaryIndicator) {
            if (aggregatedIndicator.variant_id === summaryIndicator.variant_id) {
                summaryIndicator.inventory_available_days =
                    aggregatedIndicator.inventory_available_days;
                summaryIndicator.sales_volume = aggregatedIndicator.sales_volume;

                let salesPotential = computeSalesPotential(
                    aggregatedIndicator.sales_volume,
                    aggregatedIndicator.inventory_available_days
                );

                let inventoryOptimal = computeInventoryOptimal(
                    summaryIndicator.coverage_optimal,
                    salesPotential
                );
                summaryIndicator.inventory_optimal = inventoryOptimal;
                summaryIndicator.sales_potential = salesPotential;
                summaryIndicator.sales_volume_avg = aggregatedIndicator.sales_volume_avg;
                summaryIndicator.sales_value = aggregatedIndicator.sales_value;
                summaryIndicator.sales_value_avg = aggregatedIndicator.sales_value_avg;
            }
        });
    });

    return summaryIndicators;
}
/**
 * @description Compute sales potential
 * @param summaryIndicators salesPotential
 */
function computeSalesPotential(salesVolume, inventoryAvailableDays) {
    let salesPotential = parseFloat(0.0).toFixed(2);
    if (parseFloat(inventoryAvailableDays) <= parseFloat(0)) {
        return salesPotential;
    }

    salesPotential = parseFloat(salesVolume / inventoryAvailableDays).toFixed(2);
    return salesPotential;
}
/**
 * @description Compute inventory optimal
 * @param summaryIndicators inventoryOptimal
 */
function computeInventoryOptimal(coverageOptimal, salesPotential) {
    let inventoryOptimal = parseInt(0);
    if (parseInt(salesPotential) <= parseInt(0)) {
        return inventoryOptimal;
    }

    inventoryOptimal = parseInt(coverageOptimal * salesPotential);
    return inventoryOptimal;
}
/**
 * @description Persist summaryIndicators to database
 * @param summaryIndicators summaryIndicators collection
 */
async function saveSummaryIndicators(summaryIndicators) {
    if (!summaryIndicators) return;

    summaryIndicators.forEach(async function(indicator) {
        let filter = {
            product_id: indicator.product_id,
            variant_id: indicator.variant_id
        };
        let update = {
            $set: {
                product_id: indicator.product_id,
                variant_id: indicator.variant_id,
                product_title: indicator.product_title,
                variant_title: indicator.variant_title,
                handle: indicator.handle,
                product_type_id: indicator.product_type_id,
                product_type_title: indicator.product_type_title,
                collection_id: indicator.collection_id,
                collection_title: indicator.collection_title,
                image_id: indicator.image_id,
                image_src: indicator.image_src,
                sku: indicator.sku,
                price: indicator.price,
                size: indicator.size,
                color: indicator.color,
                material: indicator.material,
                vendor: indicator.vendor,
                inventory_available_days: indicator.inventory_available_days,
                inventory_item_id: indicator.inventory_item_id,
                inventory_quantity: indicator.inventory_quantity,
                inventory_unit_cost: indicator.inventory_unit_cost,
                inventory_optimal: indicator.inventory_optimal,
                coverage_min: indicator.coverage_min,
                coverage_optimal: indicator.coverage_optimal,
                sales_potential: indicator.sales_potential,
                sales_potential_avg: indicator.sales_potential_avg,
                sales_volume: indicator.sales_volume,
                sales_volume_avg: indicator.sales_volume_avg,
                sales_volume_optimal: indicator.sales_volume_optimal,
                sales_value: indicator.sales_value,
                sales_value_avg: indicator.sales_value_avg,
                sales_value_optimal: indicator.sales_value_optimal,
                pc1: indicator.pc1,
                pc1_percentage: indicator.pc1_percentage,
                pc1_potential: indicator.pc1_potential,
                pc1_potential_percentage: indicator.pc1_potential_percentage,
                pc1_optimal: indicator.pc1_optimal,
                pc1_optimal_percentage: indicator.pc1_optimal_percentage
            }
        };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        await SummaryProductVariantIndicator.updateOne(filter, update, options, function(
            error,
            res
        ) {
            if (error) {
                console.log(error);
            }
        });
    });
}
/**
 * @description Compose Collects array of objects using ( Collect + SmartCollection  | CustomCollection)
 * @returns { collects } Formated <Array>collects[<collect>]
 */
async function getCollections() {
    let pipes = [
        {
            $lookup: {
                from: 'customCollections',
                localField: 'collection_id',
                foreignField: 'id',
                as: 'custom_collections'
            }
        },
        {
            $lookup: {
                from: 'smartCollections',
                localField: 'collection_id',
                foreignField: 'id',
                as: 'smart_collections'
            }
        },
        { $unwind: { path: '$custom_collections', preserveNullAndEmptyArrays: true } },
        { $unwind: { path: '$smart_collections', preserveNullAndEmptyArrays: true } },
        {
            $replaceRoot: {
                newRoot: {
                    $mergeObjects: [
                        { collection_id: '$collection_id', product_id: '$product_id' },
                        { collection_title: '$custom_collections.title' },
                        { collection_title: '$smart_collections.title' }
                    ]
                }
            }
        },
        {
            $sort: {
                collection_id: 1,
                product_id: 1
            }
        }
    ];

    let collects = [];
    let cursor = Collect.aggregate(pipes)
        .cursor({ batchSize: 1000 })
        .exec();
    while ((collect = await cursor.next())) {
        collects.push(collect);
    }

    return collects;
}
/**
 * @description Find property value in a collection based in product_id
 * @returns { value }Value of the property
 */
function findPropertyValueByProductId(collection, product_id, propertyName) {
    if (!collection || !product_id || !propertyName) return;
    let result;
    collection.forEach(function(obj) {
        if (parseInt(obj.product_id) === parseInt(product_id)) {
            result = obj[propertyName];
        }
    });
    return result;
}
/**
 * @description GET configuration parameters for calculation
 * @returns { paramObj } Calculation configurations
 */
async function getCalculationParams() {
    let configurations = await Configurations.find({}).exec();
    let paramObj = {};
    configurations.forEach(function(configuration) {
        paramObj = configuration.calculation;
    });
    return paramObj;
}
/**
 * @description GET configuration parameters for coverage distribution
 * @returns { paramObj } Coverages configurations
 */
async function getCoverageParams(productTypeTitle) {
    if (!productTypeTitle) return;

    let coverage = {};
    let cursor = Configurations.aggregate()
        .cursor({ batchSize: 1000 })
        .exec();
    while ((configuration = await cursor.next())) {
        for (let i = 0; i < configuration.coverages.length; i++) {
            if (configuration.coverages[i].product_type_title === productTypeTitle) {
                coverage = configuration.coverages[i];
            }
        }
    }
    return coverage;
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
 * @returns { Date } Cast to integer in format YYYYMMDD
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
    return parseInteger(formattedDate);
}
/**
 * @description GET Compute days to Date() and return formattedDate
 * @returns { formattedDate } Cast to integer in format YYYYMMDD
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
    return parseInt(formattedDate);
}
/**
 * @description GET Compute days to Date()
 * @returns { date } new Date() without formatting
 */
function computeDaysToDate(date, days) {
    if (!days) return;
    date.setDate(date.getDate() + parseInt(days));
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

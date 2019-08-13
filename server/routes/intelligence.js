const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');
const CONSTANT = require('../utils/serverConstants');
const i18n = require('../plugins/i18n.js');
const uidGenerator = require('node-unique-id-generator');
const { Collection } = require('../models/Collection');
const { ProductType } = require('../models/ProductType');
const { PriceRange } = require('../models/PriceRange');
const { Purchase } = require('../models/Purchase');
const { PurchasePlannedItem } = require('../models/PurchasePlannedItem');
const { PurchaseExecutedItem } = require('../models/PurchaseExecutedItem');
const { SummaryProductVariantIndicator } = require('../models/SummaryProductVariantIndicator');

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
    if (collections && collections.length > 0) {
        let collectionsParam = '[';
        for (let i = 0; i < collections.length; i++) {
            let item = collections[i];
            collectionsParam = collectionsParam + `"${item}"`;
            if (parseInt(i + 1) < collections.length) {
                collectionsParam = collectionsParam + ', ';
            } else {
                collectionsParam = collectionsParam + ']';
            }
        }

        filterJsonStr = filterJsonStr + `"collection_title": { "$in": ${collectionsParam} }`;
        filterJsonStr = filterJsonStr + ', ';
    }

    let productTypes = req.query.product_types ? JSON.parse(req.query.product_types) : null;
    if (productTypes && productTypes.length > 0) {
        let productTypesParam = '[';
        for (let i = 0; i < productTypes.length; i++) {
            let item = productTypes[i];
            productTypesParam = productTypesParam + `"${item}"`;
            if (parseInt(i + 1) < productTypes.length) {
                productTypesParam = productTypesParam + ', ';
            } else {
                productTypesParam = productTypesParam + ']';
            }
        }
        filterJsonStr = filterJsonStr + `"product_type_title": { "$in": ${productTypesParam} }`;
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

    let summaryProductVariantIndicators = await SummaryProductVariantIndicator.findByFilter(
        filterObj
    );

    if (params && summaryProductVariantIndicators) {
        let filter = {};
        if (params.purchase_id) {
            filter = { 'params.purchase_id': params.purchase_id };
        }
        let update = computeRepurchase(params, summaryProductVariantIndicators);
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        let purchase = await Purchase.findOneAndUpdate(filter, update, options);

        let purchasePlannedBudgetGroupedByCollectionProductType = [];
        if (plannedBudget && parseFloat(plannedBudget) > 0) {
            let groupByFields_plannedBudget = ['collection_title', 'product_type_title'];
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
            let groupByFields_plannedBudget = ['product_type_title'];
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
            let groupByFields_executedBudget = ['collection_title', 'product_type_title'];
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
            let groupByFields_executedBudget = ['product_type_title'];
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
        return res.status(404).json({ error: res.$t('summaryIndicator_error_NOTFOUND') });
    }
});

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

    let purchase = {
        params: {},
        purchases: {
            planned_items: [],
            executed_items: []
        }
    };

    if (params.purchase_id) {
        purchase.params.purchase_id = params.purchase_id;
    } else {
        purchase.params.purchase_id = uidGenerator.generateUniqueId();
    }
    if (params.purchase_title) {
        purchase.params.purchase_title = params.purchase_title;
    } else {
        let defaultName = `${i18n.__('purchase_default_name')} ${purchase.params.purchase_id}`;
        purchase.params.purchase_title = defaultName;
    }
    if (params.collection && params.collection.length > 0) {
        purchase.params.collection = params.collection;
    }
    if (params.product_type && params.product_type.length > 0) {
        purchase.params.product_type = params.product_type;
    }
    if (params.price_range && params.price_range.length > 0) {
        purchase.params.price_range = params.price_range;
    }
    if (params.planned_budget && params.planned_budget > 0) {
        purchase.params.planned_budget = params.planned_budget;
    }
    if (params.planned_budget_not_used && params.planned_budget_not_used >= 0) {
        purchase.params.planned_budget_not_used = params.planned_budget_not_used;
    }
    if (params.executed_budget && params.executed_budget > 0) {
        purchase.params.executed_budget = params.executed_budget;
    }
    if (params.executed_budget_not_used && params.executed_budget_not_used >= 0) {
        purchase.params.executed_budget_not_used = params.executed_budget_not_used;
    }

    if (purchases && Object.keys(purchases).length > 0) {
        purchase.purchases = purchases;
    }

    return purchase;
}

/**
 * Prototype new object with parameter properties
 * @param summaryProductVariantIndicators List of object as of search result
 * @param budgetType Type of budget to be processed I.E.: 'planned' or 'executed'
 * @param qtyBuyIn Qty of products to buy
 * @param valueBuyIn Value of products to buy
 * @returns {Purchase} Purchase object model
 */
function prototypePurchaseItem(summaryProductVariantIndicator, budgetType, qtyBuyIn, valueBuyIn) {
    if (!summaryProductVariantIndicator || !budgetType) return;
    if (qtyBuyIn <= 0 || valueBuyIn <= 0) return;

    let purchaseItem = null;
    if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
        purchaseItem = new PurchasePlannedItem();
    }
    if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
        purchaseItem = new PurchaseExecutedItem();
    }

    purchaseItem.product_id = summaryProductVariantIndicator.product_id;
    purchaseItem.product_title = summaryProductVariantIndicator.product_title;
    purchaseItem.variant_id = summaryProductVariantIndicator.variant_id;
    purchaseItem.variant_title = summaryProductVariantIndicator.variant_title;
    purchaseItem.title = summaryProductVariantIndicator.title;
    purchaseItem.handle = summaryProductVariantIndicator.handle;
    purchaseItem.collection_id = summaryProductVariantIndicator.collection_id;
    purchaseItem.collection_title = summaryProductVariantIndicator.collection_title;
    purchaseItem.product_type_id = summaryProductVariantIndicator.product_type_id;
    purchaseItem.product_type_title = summaryProductVariantIndicator.product_type_title;
    purchaseItem.image_src = summaryProductVariantIndicator.image_src;
    purchaseItem.sku = summaryProductVariantIndicator.sku;
    purchaseItem.price = summaryProductVariantIndicator.price;
    purchaseItem.size = summaryProductVariantIndicator.size;
    purchaseItem.color = summaryProductVariantIndicator.color;
    purchaseItem.material = summaryProductVariantIndicator.material;
    purchaseItem.vendor = summaryProductVariantIndicator.vendor;
    purchaseItem.inventory_quantity = summaryProductVariantIndicator.inventory_quantity;
    purchaseItem.inventory_unit_cost = summaryProductVariantIndicator.inventory_unit_cost;
    purchaseItem.inventory_optimal = summaryProductVariantIndicator.inventory_optimal;

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
                                o.product_type_title === item.product_type_title &&
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
                                o.product_type_title === item.product_type_title &&
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
            if (!this[item.collection_title] && !this[item.product_type_title]) {
                this[item.collection_title] = {
                    header: i18n.__('purchase_header_by_collection_product_type'),
                    collection_title: item.collection_title,
                    product_type_title: item.product_type_title,
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
                                o.product_type_title === item.product_type_title &&
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
                                o.product_type_title === item.product_type_title &&
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
            if (!this[item.product_type_title] && !this[item.product_type_title]) {
                this[item.product_type_title] = {
                    header: i18n.__('purchase_header_by_product_type'),
                    product_type_title: item.product_type_title,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    purchase_planned_quantity_to_buy: 0,
                    purchase_executed_quantity_to_buy: 0
                };
                result.push(this[item.product_type_title]);
            }
            this[item.product_type_title].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.product_type_title].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.product_type_title].purchase_planned_quantity_to_buy += parseFloat(
                item.purchase_planned_quantity_to_buy
            );
            this[item.product_type_title].purchase_executed_quantity_to_buy += parseFloat(
                item.purchase_executed_quantity_to_buy
            );
        }, Object.create(null));
    }
    return result;
};

/**
 * Calculate and prototype new object result
 * @param params Parameters used to filter data for purchase
 * @param summaryProductVariantIndicators List of object as of search result
 * @returns {purchase} Purchase object model
 */
const computeRepurchase = (params, summaryProductVariantIndicators) => {
    if (!params || !summaryProductVariantIndicators) return;

    // Execute Planned Budget
    let planned_items = [];
    let budgetToExecute = 0;
    if (parseFloat(params.planned_budget) > 0) {
        budgetToExecute = parseFloat(params.planned_budget);
    }

    for (let i in summaryProductVariantIndicators) {
        let summaryProductVariantIndicator = summaryProductVariantIndicators[i];

        let itemUnitCost = 0.0;
        if (summaryProductVariantIndicator.inventory_unit_cost > 0) {
            itemUnitCost = parseFloat(summaryProductVariantIndicator.inventory_unit_cost);
        }

        let qtyBuyIn = 0;
        if (
            summaryProductVariantIndicator.inventory_optimal > 0 &&
            summaryProductVariantIndicator.inventory_optimal >
                summaryProductVariantIndicator.inventory_quantity
        ) {
            qtyBuyIn = parseInt(
                summaryProductVariantIndicator.inventory_optimal -
                    summaryProductVariantIndicator.inventory_quantity
            );
        }
        let valueBuyIn = parseFloat(itemUnitCost * qtyBuyIn);

        if (budgetToExecute >= 0 && budgetToExecute >= itemUnitCost) {
            if (budgetToExecute >= 0 && budgetToExecute >= valueBuyIn) {
                budgetToExecute = budgetToExecute - valueBuyIn;
            } else {
                while (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemUnitCost &&
                    budgetToExecute < valueBuyIn
                ) {
                    qtyBuyIn = qtyBuyIn - 1;
                    valueBuyIn = parseFloat(itemUnitCost * qtyBuyIn);
                }
                if (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemUnitCost &&
                    budgetToExecute >= valueBuyIn
                ) {
                    budgetToExecute = budgetToExecute - valueBuyIn;
                }
            }

            let planned_item = prototypePurchaseItem(
                summaryProductVariantIndicator,
                CONSTANT.BUDGET.TYPE.PLANNED,
                qtyBuyIn,
                valueBuyIn
            );
            if (planned_item) {
                planned_items.push(planned_item);
            }
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

    for (let i in summaryProductVariantIndicators) {
        let summaryProductVariantIndicator = summaryProductVariantIndicators[i];

        let itemUnitCost = 0.0;
        if (summaryProductVariantIndicator.inventory_unit_cost > 0) {
            itemUnitCost = parseFloat(summaryProductVariantIndicator.inventory_unit_cost);
        }

        let qtyBuyIn = 0;
        if (
            summaryProductVariantIndicator.inventory_optimal > 0 &&
            summaryProductVariantIndicator.inventory_optimal >
                summaryProductVariantIndicator.inventory_quantity
        ) {
            qtyBuyIn = parseInt(
                summaryProductVariantIndicator.inventory_optimal -
                    summaryProductVariantIndicator.inventory_quantity
            );
        }
        let valueBuyIn = parseFloat(itemUnitCost * qtyBuyIn);

        if (budgetToExecute >= 0 && budgetToExecute >= itemUnitCost) {
            if (budgetToExecute >= 0 && budgetToExecute >= valueBuyIn) {
                budgetToExecute = budgetToExecute - valueBuyIn;
            } else {
                while (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemUnitCost &&
                    budgetToExecute < valueBuyIn
                ) {
                    qtyBuyIn = qtyBuyIn - 1;
                    valueBuyIn = parseFloat(itemUnitCost * qtyBuyIn);
                }
                if (
                    budgetToExecute >= 0 &&
                    budgetToExecute >= itemUnitCost &&
                    budgetToExecute >= valueBuyIn
                ) {
                    budgetToExecute = budgetToExecute - valueBuyIn;
                }
            }
            let executed_item = prototypePurchaseItem(
                summaryProductVariantIndicator,
                CONSTANT.BUDGET.TYPE.EXECUTED,
                qtyBuyIn,
                valueBuyIn
            );
            if (executed_item) {
                executed_items.push(executed_item);
            }
        }
    }
    params.executed_budget_not_used = budgetToExecute;

    let purchase = prototypePurchase(params, planned_items, executed_items);

    return purchase;
};

module.exports = router;

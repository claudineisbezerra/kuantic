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
const { Repurchase } = require('../models/Repurchase');
const { RepurchasePlannedItem } = require('../models/RepurchasePlannedItem');
const { RepurchaseExecutedItem } = require('../models/RepurchaseExecutedItem');
const { SummaryProductVariantIndicator } = require('../models/SummaryProductVariantIndicator');

/**
 * @description GET /api/admin/purchase/repurchase
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
 * @description GET /api/admin/purchase/repurchase
 */
router.get('/repurchase', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let filterJsonStr = '{ ';
    let repurchaseID = req.query.repurchase_id ? req.query.repurchase_id : null;
    let repurchaseTitle = req.query.repurchase_title ? req.query.repurchase_title : null;

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
        repurchase_id: repurchaseID,
        repurchase_title: repurchaseTitle,
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
        if (params.repurchase_id) {
            filter = { 'params.repurchase_id': params.repurchase_id };
        }
        let update = computeRepurchase(params, summaryProductVariantIndicators);
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        let repurchase = await Repurchase.findOneAndUpdate(filter, update, options);

        let repurchasePlannedBudgetGroupedByCollectionProductType = [];
        if (plannedBudget && parseFloat(plannedBudget) > 0) {
            let groupByFields_plannedBudget = ['collection_title', 'product_type_title'];
            let sumByFields_plannedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'repurchase_planned_quantity_to_buy',
                'repurchase_executed_quantity_to_buy'
            ];

            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.PLANNED;
            objParam.groupByData = repurchase.repurchases;
            objParam.groupByFields = groupByFields_plannedBudget;
            objParam.sumByFields = sumByFields_plannedBudget;

            repurchasePlannedBudgetGroupedByCollectionProductType = groupBySumCollectionProductType(
                objParam
            );
        }

        let repurchasePlannedBudgetGroupedByProductType = [];
        if (plannedBudget && parseFloat(plannedBudget) > 0) {
            let groupByFields_plannedBudget = ['product_type_title'];
            let sumByFields_plannedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'repurchase_planned_quantity_to_buy',
                'repurchase_executed_quantity_to_buy'
            ];
            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.PLANNED;
            objParam.groupByData = repurchase.repurchases;
            objParam.groupByFields = groupByFields_plannedBudget;
            objParam.sumByFields = sumByFields_plannedBudget;
            repurchasePlannedBudgetGroupedByProductType = groupBySumProductType(objParam);
        }
        let repurchaseExecutedBudgetGroupedByCollectionProductType = [];
        if (executedBudget && parseFloat(executedBudget) > 0) {
            let groupByFields_executedBudget = ['collection_title', 'product_type_title'];
            let sumByFields_executedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'repurchase_planned_quantity_to_buy',
                'repurchase_executed_quantity_to_buy'
            ];

            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.EXECUTED;
            objParam.groupByData = repurchase.repurchases;
            objParam.groupByFields = groupByFields_executedBudget;
            objParam.sumByFields = sumByFields_executedBudget;
            repurchaseExecutedBudgetGroupedByCollectionProductType = groupBySumCollectionProductType(
                objParam
            );
        }

        let repurchaseExecutedBudgetGroupedByProductType = [];
        if (executedBudget && parseFloat(executedBudget) > 0) {
            let groupByFields_executedBudget = ['product_type_title'];
            let sumByFields_executedBudget = [
                'inventory_quantity',
                'inventory_optimal',
                'repurchase_planned_quantity_to_buy',
                'repurchase_executed_quantity_to_buy'
            ];
            let objParam = {};
            objParam.budgetType = CONSTANT.BUDGET.TYPE.EXECUTED;
            objParam.groupByData = repurchase.repurchases;
            objParam.groupByFields = groupByFields_executedBudget;
            objParam.sumByFields = sumByFields_executedBudget;
            repurchaseExecutedBudgetGroupedByProductType = groupBySumProductType(objParam);
        }

        let results = {};
        results.repurchase = repurchase;
        results.repurchasePlannedBudgetGroupedByCollectionProductType = repurchasePlannedBudgetGroupedByCollectionProductType;
        results.repurchasePlannedBudgetGroupedByProductType = repurchasePlannedBudgetGroupedByProductType;
        results.repurchaseExecutedBudgetGroupedByCollectionProductType = repurchaseExecutedBudgetGroupedByCollectionProductType;
        results.repurchaseExecutedBudgetGroupedByProductType = repurchaseExecutedBudgetGroupedByProductType;
        return res.status(200).json(results);
    } else {
        return res.status(404).json({ error: res.$t('summaryIndicator_error_NOTFOUND') });
    }
});

/**
 * Prototype new object with parameter properties
 * @param params Parameters used to filter data for repurchase
 * @param plannedItems List of object as result of Planned Budget
 * @param executedItems List of object as result of Compared Budget
 * @returns {Repurchase} Repurchase object model
 */
function prototypeRepurchase(params, plannedItems, executedItems) {
    if (!params && !plannedItems) return repurchase;
    let repurchases = {};
    repurchases.planned_items = [];
    repurchases.executed_items = [];
    if (plannedItems && plannedItems.length > 0) {
        repurchases.planned_items = plannedItems;
    }
    if (executedItems && executedItems.length > 0) {
        repurchases.executed_items = executedItems;
    }

    let repurchase = {
        params: {},
        repurchases: {
            planned_items: [],
            executed_items: []
        }
    };

    if (params.repurchase_id) {
        repurchase.params.repurchase_id = params.repurchase_id;
    } else {
        repurchase.params.repurchase_id = uidGenerator.generateUniqueId();
    }
    if (params.repurchase_title) {
        repurchase.params.repurchase_title = params.repurchase_title;
    } else {
        let defaultName = `${i18n.__('repurchase_default_name')} ${repurchase.params.repurchase_id}`;
        repurchase.params.repurchase_title = defaultName;
    }
    if (params.collection && params.collection.length > 0) {
        repurchase.params.collection = params.collection;
    }
    if (params.product_type && params.product_type.length > 0) {
        repurchase.params.product_type = params.product_type;
    }
    if (params.price_range && params.price_range.length > 0) {
        repurchase.params.price_range = params.price_range;
    }
    if (params.planned_budget && params.planned_budget > 0) {
        repurchase.params.planned_budget = params.planned_budget;
    }
    if (params.planned_budget_not_used && params.planned_budget_not_used >= 0) {
        repurchase.params.planned_budget_not_used = params.planned_budget_not_used;
    }
    if (params.executed_budget && params.executed_budget > 0) {
        repurchase.params.executed_budget = params.executed_budget;
    }
    if (params.executed_budget_not_used && params.executed_budget_not_used >= 0) {
        repurchase.params.executed_budget_not_used = params.executed_budget_not_used;
    }

    if (repurchases && Object.keys(repurchases).length > 0) {
        repurchase.repurchases = repurchases;
    }

    return repurchase;
}

/**
 * Prototype new object with parameter properties
 * @param summaryProductVariantIndicators List of object as of search result
 * @param budgetType Type of budget to be processed I.E.: 'planned' or 'executed'
 * @param qtyBuyIn Qty of products to buy
 * @param valueBuyIn Value of products to buy
 * @returns {Repurchase} Repurchase object model
 */
function prototypeRepurchaseItem(summaryProductVariantIndicator, budgetType, qtyBuyIn, valueBuyIn) {
    if (!summaryProductVariantIndicator || !budgetType) return;
    if (qtyBuyIn <= 0 || valueBuyIn <= 0) return;

    let repurchaseItem = null;
    if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
        repurchaseItem = new RepurchasePlannedItem();
    }
    if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
        repurchaseItem = new RepurchaseExecutedItem();
    }

    repurchaseItem.product_id = summaryProductVariantIndicator.product_id;
    repurchaseItem.product_title = summaryProductVariantIndicator.product_title;
    repurchaseItem.variant_id = summaryProductVariantIndicator.variant_id;
    repurchaseItem.variant_title = summaryProductVariantIndicator.variant_title;
    repurchaseItem.title = summaryProductVariantIndicator.title;
    repurchaseItem.handle = summaryProductVariantIndicator.handle;
    repurchaseItem.collection_id = summaryProductVariantIndicator.collection_id;
    repurchaseItem.collection_title = summaryProductVariantIndicator.collection_title;
    repurchaseItem.product_type_id = summaryProductVariantIndicator.product_type_id;
    repurchaseItem.product_type_title = summaryProductVariantIndicator.product_type_title;
    repurchaseItem.image_src = summaryProductVariantIndicator.image_src;
    repurchaseItem.sku = summaryProductVariantIndicator.sku;
    repurchaseItem.price = summaryProductVariantIndicator.price;
    repurchaseItem.size = summaryProductVariantIndicator.size;
    repurchaseItem.color = summaryProductVariantIndicator.color;
    repurchaseItem.material = summaryProductVariantIndicator.material;
    repurchaseItem.vendor = summaryProductVariantIndicator.vendor;
    repurchaseItem.inventory_quantity = summaryProductVariantIndicator.inventory_quantity;
    repurchaseItem.inventory_unit_cost = summaryProductVariantIndicator.inventory_unit_cost;
    repurchaseItem.inventory_optimal = summaryProductVariantIndicator.inventory_optimal;

    repurchaseItem.repurchase_planned_quantity_to_buy = 0;
    repurchaseItem.repurchase_planned_value_to_buy = 0.0;
    if (budgetType === CONSTANT.BUDGET.TYPE.PLANNED) {
        repurchaseItem.repurchase_planned_quantity_to_buy = qtyBuyIn ? qtyBuyIn : 0;
        repurchaseItem.repurchase_planned_value_to_buy = valueBuyIn ? valueBuyIn : 0.0;
    }

    repurchaseItem.repurchase_executed_quantity_to_buy = 0;
    repurchaseItem.repurchase_executed_value_to_buy = 0.0;
    if (budgetType === CONSTANT.BUDGET.TYPE.EXECUTED) {
        repurchaseItem.repurchase_executed_quantity_to_buy = qtyBuyIn ? qtyBuyIn : 0;
        repurchaseItem.repurchase_executed_value_to_buy = valueBuyIn ? valueBuyIn : 0.0;
    }

    return repurchaseItem;
}

/**
 * GroupBy and SumBy Collection and Category
 * @param objParam Object parameter
 * @returns [repurchaseGroupedByCollectionProductType] Array of objects grouped by and summed up
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
                        ['repurchase_executed_quantity_to_buy', 'repurchase_executed_value_to_buy']
                    )
                );
                _.defaults(item, {
                    repurchase_executed_quantity_to_buy: 0,
                    repurchase_executed_value_to_buy: 0.0
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
                        ['repurchase_planned_quantity_to_buy', 'repurchase_planned_value_to_buy']
                    )
                );
                _.defaults(item, {
                    repurchase_planned_quantity_to_buy: 0,
                    repurchase_planned_value_to_buy: 0.0
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
                    header: i18n.__('repurchase_header_by_collection_product_type'),
                    collection_title: item.collection_title,
                    product_type_title: item.product_type_title,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    repurchase_planned_quantity_to_buy: 0,
                    repurchase_executed_quantity_to_buy: 0
                };
                result.push(this[item.collection_title]);
            }
            this[item.collection_title].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.collection_title].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.collection_title].repurchase_planned_quantity_to_buy += parseFloat(
                item.repurchase_planned_quantity_to_buy
            );
            this[item.collection_title].repurchase_executed_quantity_to_buy += parseFloat(
                item.repurchase_executed_quantity_to_buy
            );
        }, Object.create(null));
    }
    return result;
};

/**
 * GroupBy and SumBy Category
 * @param objParam Object parameter
 * @returns [repurchaseGroupedByProductType] Array of objects grouped by and summed up
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
                        ['repurchase_executed_quantity_to_buy', 'repurchase_executed_value_to_buy']
                    )
                );
                _.defaults(item, {
                    repurchase_executed_quantity_to_buy: 0,
                    repurchase_executed_value_to_buy: 0.0
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
                        ['repurchase_planned_quantity_to_buy', 'repurchase_planned_value_to_buy']
                    )
                );
                _.defaults(item, {
                    repurchase_planned_quantity_to_buy: 0,
                    repurchase_planned_value_to_buy: 0.0
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
                    header: i18n.__('repurchase_header_by_product_type'),
                    product_type_title: item.product_type_title,
                    inventory_quantity: 0,
                    inventory_optimal: 0,
                    repurchase_planned_quantity_to_buy: 0,
                    repurchase_executed_quantity_to_buy: 0
                };
                result.push(this[item.product_type_title]);
            }
            this[item.product_type_title].inventory_quantity += parseFloat(item.inventory_quantity);
            this[item.product_type_title].inventory_optimal += parseFloat(item.inventory_optimal);
            this[item.product_type_title].repurchase_planned_quantity_to_buy += parseFloat(
                item.repurchase_planned_quantity_to_buy
            );
            this[item.product_type_title].repurchase_executed_quantity_to_buy += parseFloat(
                item.repurchase_executed_quantity_to_buy
            );
        }, Object.create(null));
    }
    return result;
};

/**
 * Calculate and prototype new object result
 * @param params Parameters used to filter data for repurchase
 * @param summaryProductVariantIndicators List of object as of search result
 * @returns {repurchase} Repurchase object model
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

            let planned_item = prototypeRepurchaseItem(
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
            let executed_item = prototypeRepurchaseItem(
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

    let repurchase = prototypeRepurchase(params, planned_items, executed_items);

    return repurchase;
};

module.exports = router;

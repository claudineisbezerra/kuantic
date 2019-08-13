const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SummaryProductVariantIndicatorSchema = new Schema(
    {
        product_id: {
            type: Number,
            required: true,
            trim: true
        },
        variant_id: {
            type: Number,
            required: true,
            trim: true
        },
        product_title: {
            type: String,
            trim: true,
            default: null
        },
        variant_title: {
            type: String,
            trim: true,
            default: null
        },
        handle: {
            type: String,
            trim: true,
            default: null
        },
        product_type_id: {
            type: Number,
            required: true,
            trim: true
        },
        product_type_title: {
            type: String,
            required: true,
            trim: true
        },
        collection_id: {
            type: Number,
            required: true,
            trim: true
        },
        collection_title: {
            type: String,
            trim: true,
            default: null
        },
        image_id: {
            type: Number,
            required: true,
            trim: true
        },
        image_src: {
            type: String,
            trim: true,
            default: null
        },
        sku: {
            type: String,
            trim: true,
            default: null
        },
        price: {
            type: Number,
            trim: true,
            default: null
        },
        size: {
            type: String,
            trim: true,
            default: null
        },
        color: {
            type: String,
            trim: true,
            default: null
        },
        material: {
            type: String,
            trim: true,
            default: null
        },
        vendor: {
            type: String,
            trim: true,
            default: null
        },
        inventory_available_days: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_item_id: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_quantity: {
            type: Number,
            trim: true,
            default: 0
        },
        inventory_unit_cost: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_optimal: {
            type: Number,
            trim: true,
            default: 0
        },
        coverage_min: {
            type: Number,
            trim: true,
            default: null
        },
        coverage_optimal: {
            type: Number,
            trim: true,
            default: null
        },
        sales_potential: {
            type: Number,
            trim: true,
            default: 0
        },
        sales_potential_avg: {
            type: Number,
            trim: true,
            default: 0
        },
        sales_volume: {
            type: Number,
            trim: true,
            default: 0.0
        },
        sales_volume_avg: {
            type: Number,
            trim: true,
            default: 0.0
        },
        sales_volume_optimal: {
            type: Number,
            trim: true,
            default: 0.0
        },
        sales_value: {
            type: Number,
            trim: true,
            default: 0.0
        },
        sales_value_avg: {
            type: Number,
            trim: true,
            default: 0.0
        },
        sales_value_optimal: {
            type: Number,
            trim: true,
            default: 0.0
        },
        pc1: {
            type: Number,
            trim: true,
            default: null
        },
        pc1_percentage: {
            type: Number,
            trim: true,
            default: null
        },
        pc1_potential: {
            type: Number,
            trim: true,
            default: null
        },
        pc1_potential_percentage: {
            type: Number,
            trim: true,
            default: null
        },
        pc1_optimal: {
            type: Number,
            trim: true,
            default: null
        },
        pc1_optimal_percentage: {
            type: Number,
            trim: true,
            default: null
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

SummaryProductVariantIndicatorSchema.set('collection', 'summaryProductVariantIndicators');
SummaryProductVariantIndicatorSchema.statics.findByFilter = function(filterObj) {
    return this.find(filterObj)
        .sort({ sales_volume: 'desc', sales_potencial: 'desc' })
        .exec();
};

const SummaryProductVariantIndicator = mongoose.model(
    'SummaryProductVariantIndicator',
    SummaryProductVariantIndicatorSchema
);
module.exports = { SummaryProductVariantIndicator };

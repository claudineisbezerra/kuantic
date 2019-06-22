const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantIndicatorSchema = new Schema(
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
        title: {
            type: String,
            trim: true,
            default: null
        },
        handle: {
            type: String,
            trim: true,
            default: null
        },
        product_type: {
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
        inventory_item_id: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_quantity: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_cost: {
            type: Number,
            trim: true,
            default: null
        },
        inventory_optimal: {
            type: Number,
            trim: true,
            default: null
        },
        sales_potential: {
            type: Number,
            trim: true,
            default: null
        },
        sales_potential_avg: {
            type: Number,
            trim: true,
            default: null
        },
        sales_volume: {
            type: Number,
            trim: true,
            default: null
        },
        sales_volume_avg: {
            type: Number,
            trim: true,
            default: null
        },
        sales_volume_optimal: {
            type: Number,
            trim: true,
            default: null
        },
        sales_value: {
            type: Number,
            trim: true,
            default: null
        },
        sales_value_avg: {
            type: Number,
            trim: true,
            default: null
        },
        sales_value_optimal: {
            type: Number,
            trim: true,
            default: null
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
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

VariantIndicatorSchema.set('collection', 'variantIndicators');

const VariantIndicator = mongoose.model('VariantIndicator', VariantIndicatorSchema);

module.exports = { VariantIndicator };

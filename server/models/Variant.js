const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        product_id: {
            type: Number,
            required: true,
            trim: true
        },
        inventory_item_id: {
            type: Number,
            required: true,
            trim: true
        },
        image_id: {
            type: Number,
            required: true,
            trim: true
        },
        image_id: {
            type: Number,
            required: true,
            trim: true
        },
        inventory_quantity: {
            type: Number,
            trim: true,
            default: null
        },
        sku: {
            type: String,
            trim: true,
            default: null
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        weight: {
            type: String,
            trim: true,
            default: null
        },
        weight_unit: {
            type: Number,
            required: true,
            trim: true
        },
        grams: {
            type: Number,
            trim: true,
            default: null
        },
        vendor: {
            type: String,
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

VariantSchema.set('collection', 'variants');

const Variant = mongoose.model('Variant', VariantSchema);

module.exports = { Variant };

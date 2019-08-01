const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema(
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
            type: Number,
            trim: true,
            default: null
        },
        weight_unit: {
            type: String,
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
        },
        inventory_quantity: {
            type: Number,
            trim: true,
            default: null
        },
        position: {
            type: Number,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true,
            trim: true
        },
        compare_at_price: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

ProductVariantSchema.set('collection', 'productVariants');

const ProductVariant = mongoose.model('ProductVariant', ProductVariantSchema);

module.exports = { ProductVariant };

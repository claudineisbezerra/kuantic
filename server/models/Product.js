const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        handle: {
            type: String,
            required: true,
            trim: true
        },
        product_type: {
            type: String,
            required: true,
            trim: true
        },
        variants: {
            type: Array,
            required: true,
            trim: true
        },
        images: {
            type: Array,
            trim: true,
            default: null
        },
        options: {
            type: Array,
            trim: true,
            default: null
        },
        vendor: {
            type: String,
            required: true,
            trim: true
        },
        published_at: {
            type: Date,
            required: true,
            trim: true
        },
        published_scope: {
            type: String,
            trim: true,
            default: null
        },
        published_at_min: {
            type: String,
            trim: true,
            default: null
        },
        published_at_max: {
            type: String,
            trim: true,
            default: null
        },
        published_status: {
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

ProductSchema.set('collection', 'products');

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };

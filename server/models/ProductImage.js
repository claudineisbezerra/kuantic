const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductImageSchema = new Schema(
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
        variant_ids: {
            type: Array,
            required: true,
            trim: true
        },
        src: {
            type: String,
            required: true,
            trim: true
        },
        width: {
            type: Number,
            required: true,
            trim: true
        },
        height: {
            type: Number,
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

ProductImageSchema.set('collection', 'productImages');

const ProductImage = mongoose.model('ProductImage', ProductImageSchema);

module.exports = { ProductImage };

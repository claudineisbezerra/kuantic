const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema(
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
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

ProductTypeSchema.set('collection', 'productTypes');

const ProductType = mongoose.model('ProductType', ProductTypeSchema);

module.exports = { ProductType };

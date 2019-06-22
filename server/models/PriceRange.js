const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceRangeSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        start_at: {
            type: Number,
            required: true,
            trim: true
        },
        end_at: {
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

PriceRangeSchema.set('collection', 'priceRanges');

const PriceRange = mongoose.model('PriceRange', PriceRangeSchema);

module.exports = { PriceRange };

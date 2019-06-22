const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LineItemSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        order_id: {
            type: Number,
            required: true,
            trim: true
        },
        variant_id: {
            type: Number,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        price_set: {
            type: Object,
            required: true,
            trim: true
        },
        properties: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        },
        sku: {
            type: String,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        variant_title: {
            type: String,
            required: true,
            trim: true
        },
        vendor: {
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

LineItemSchema.set('collection', 'lineItems');

const LineItem = mongoose.model('LineItem', LineItemSchema);

module.exports = { LineItem };

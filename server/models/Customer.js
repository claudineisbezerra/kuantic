const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        default_address: {
            type: Object,
            required: true,
            trim: true
        },
        addresses: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        last_order_id: {
            type: Number,
            required: true,
            trim: true
        },
        last_order_name: {
            type: String,
            required: true,
            trim: true
        },
        orders_count: {
            type: Number,
            required: true,
            trim: true
        },
        note: {
            type: String,
            required: true,
            trim: true
        },
        currency: {
            type: String,
            required: true,
            trim: true
        },
        total_spent: {
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

CustomerSchema.set('collection', 'customers');

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = { Customer };

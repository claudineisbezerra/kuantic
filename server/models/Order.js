const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        customer_id: {
            type: Number,
            required: true,
            trim: true
        },
        billing_address: {
            type: Object,
            required: true,
            trim: true
        },
        cancel_reason: {
            type: String,
            required: true,
            trim: true
        },
        cancelled_at: {
            type: Date,
            required: true,
            trim: true
        },
        closed_at: {
            type: Date,
            required: true,
            trim: true
        },
        created_at: {
            type: Date,
            required: true,
            trim: true
        },
        currency: {
            type: String,
            required: true,
            trim: true
        },
        customer: {
            type: Object,
            required: true,
            trim: true
        },
        customer_locale: {
            type: String,
            required: true,
            trim: true
        },
        discount_applications: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        discount_codes: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        financial_status: {
            type: String,
            required: true,
            trim: true
        },
        fulfillments: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        line_items: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        location_id: {
            type: Number,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        note: {
            type: String,
            required: true,
            trim: true
        },
        note_attributes: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        number: {
            type: Number,
            required: true,
            trim: true
        },
        order_number: {
            type: Number,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        presentment_currency: {
            type: String,
            required: true,
            trim: true
        },
        processed_at: {
            type: Date,
            required: true,
            trim: true
        },
        shipping_address: {
            type: Object,
            required: true,
            trim: true
        },
        shipping_lines: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        source_name: {
            type: String,
            required: true,
            trim: true
        },
        subtotal_price: {
            type: Number,
            required: true,
            trim: true
        },
        subtotal_price_set: {
            type: Object,
            required: true,
            trim: true
        },
        total_discounts: {
            type: Number,
            required: true,
            trim: true
        },
        total_discounts_set: {
            type: Object,
            required: true,
            trim: true
        },
        total_line_items_price: {
            type: Number,
            required: true,
            trim: true
        },
        total_line_items_price_set: {
            type: Object,
            required: true,
            trim: true
        },
        total_price: {
            type: Number,
            required: true,
            trim: true
        },
        total_price_set: {
            type: Object,
            required: true,
            trim: true
        },
        total_tax: {
            type: Number,
            required: true,
            trim: true
        },
        total_tax_set: {
            type: Object,
            required: true,
            trim: true
        },
        total_tip_received: {
            type: Number,
            required: true,
            trim: true
        },
        total_weight: {
            type: Number,
            required: true,
            trim: true
        },
        user_id: {
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

OrderSchema.set('collection', 'orders');

const Order = mongoose.model('Order', OrderSchema);

module.exports = { Order };

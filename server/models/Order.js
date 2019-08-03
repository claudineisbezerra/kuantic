const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        browser_ip: {
            type: String,
            trim: true
        },
        buyer_accepts_marketing: {
            type: Boolean,
            trim: true
        },
        billing_address: {
            type: Object,
            required: true,
            trim: true
        },
        cancel_reason: {
            type: String,
            trim: true
        },
        cancelled_at: {
            type: Date,
            trim: true
        },
        cart_token: {
            type: String,
            required: true,
            trim: true
        },
        client_details: {
            type: Object,
            trim: true
        },
        closed_at: {
            type: Date,
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
            trim: true
        },
        discount_applications: {
            type: Schema.Types.Mixed,
            trim: true
        },
        discount_codes: {
            type: Schema.Types.Mixed,
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
            trim: true
        },
        fulfillment_status: {
            type: String,
            trim: true
        },
        line_items: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
        location_id: {
            type: Number,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        note: {
            type: String,
            required: true,
            trim: true
        },
        note_attributes: {
            type: Schema.Types.Mixed,
            trim: true
        },
        number: {
            type: Number,
            trim: true
        },
        order_number: {
            type: Number,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        presentment_currency: {
            type: String,
            trim: true
        },
        processed_at: {
            type: Date,
            trim: true
        },
        shipping_address: {
            type: Object,
            trim: true
        },
        shipping_lines: {
            type: Schema.Types.Mixed,
            trim: true
        },
        source_name: {
            type: String,
            trim: true
        },
        subtotal_price: {
            type: Number,
            trim: true
        },
        subtotal_price_set: {
            type: Object,
            trim: true
        },
        total_discounts: {
            type: Number,
            trim: true
        },
        total_discounts_set: {
            type: Object,
            trim: true
        },
        total_line_items_price: {
            type: Number,
            trim: true
        },
        total_line_items_price_set: {
            type: Object,
            trim: true
        },
        total_price: {
            type: String,
            trim: true
        },
        total_price_set: {
            type: Object,
            trim: true
        },
        total_tax: {
            type: String,
            trim: true
        },
        total_tax_set: {
            type: Object,
            trim: true
        },
        total_tip_received: {
            type: String,
            trim: true
        },
        total_weight: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
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

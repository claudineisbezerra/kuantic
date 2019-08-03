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
            trim: true
        },
        default_address: {
            type: Object,
            required: true,
            trim: true
        },
        addresses: {
            type: Schema.Types.Mixed,
            trim: true
        },
        last_order_id: {
            type: Number,
            trim: true
        },
        last_order_name: {
            type: String,
            trim: true
        },
        orders_count: {
            type: Number,
            trim: true
        },
        total_spent: {
            type: String,
            trim: true
        },
        note: {
            type: String,
            trim: true
        },
        currency: {
            type: String,
            trim: true
        },
        marketing_opt_in_level: {
            type: String,
            trim: true
        },
        accepts_marketing: {
            type: Boolean,
            trim: true
        },
        accepts_marketing_updated_at: {
            type: Date,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        verified_email: {
            type: Boolean,
            trim: true
        },
        multipass_identifier: {
            type: String,
            trim: true
        },
        tax_exempt: {
            type: Boolean,
            trim: true
        },
        tax_exemptions: {
            type: Array,
            trim: true
        },
        tags: {
            type: String,
            trim: true
        },
        metafield: {
            type: Object,
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

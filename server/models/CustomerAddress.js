const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerAddressSchema = new Schema(
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
        address1: {
            type: String,
            required: true,
            trim: true
        },
        address2: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        country_code: {
            type: String,
            required: true,
            trim: true
        },
        country_name: {
            type: String,
            required: true,
            trim: true
        },
        company: {
            type: String,
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
        name: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        province: {
            type: String,
            required: true,
            trim: true
        },
        province_code: {
            type: String,
            required: true,
            trim: true
        },
        zip: {
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

CustomerAddressSchema.set('collection', 'customerAddresses');

const CustomerAddress = mongoose.model('CustomerAddress', CustomerAddressSchema);

module.exports = { CustomerAddress };

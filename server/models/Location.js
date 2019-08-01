const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        active: {
            type: Boolean,
            trim: true,
            default: true
        },
        name: {
            type: String,
            trim: true,
            default: null
        },
        address1: {
            type: String,
            trim: true,
            default: null
        },
        address2: {
            type: String,
            trim: true,
            default: null
        },
        city: {
            type: String,
            trim: true,
            default: null
        },
        province: {
            type: String,
            trim: true,
            default: null
        },
        province_code: {
            type: String,
            trim: true,
            default: null
        },
        country: {
            type: String,
            trim: true,
            default: null
        },
        country_code: {
            type: String,
            trim: true,
            default: null
        },
        zip: {
            type: String,
            trim: true,
            default: null
        },
        phone: {
            type: String,
            trim: true,
            default: null
        },
        legacy: {
            type: Boolean,
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

LocationSchema.set('collection', 'locations');

const Location = mongoose.model('Location', LocationSchema);

module.exports = { Location };

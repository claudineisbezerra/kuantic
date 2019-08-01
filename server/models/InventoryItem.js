const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        sku: {
            type: String,
            trim: true,
            default: null
        },
        cost: {
            type: Number,
            required: true,
            trim: true
        },
        tracked: {
            type: Boolean
        },
        requires_shipping : {
            type: Boolean
        },
        country_code_of_origin: {
            type: String,
            trim: true,
            default: null
        },
        province_code_of_origin: {
            type: String,
            trim: true,
            default: null
        },
        country_harmonized_system_codes: [
            {
                harmonized_system_code: {
                    type: String,
                    required: true,
                    trim: true
                },
                country_code: {
                    type: String,
                    required: true,
                    trim: true
                }
            }
        ]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

InventoryItemSchema.set('collection', 'inventoryItems');

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);

module.exports = { InventoryItem };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        cost: {
            type: Number,
            required: true,
            trim: true
        },
        sku: {
            type: String,
            trim: true,
            default: null
        },
        country_code_of_origin: {
            type: Number,
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

InventoryItemSchema.set('collection', 'inventoryItems');

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);

module.exports = { InventoryItem };

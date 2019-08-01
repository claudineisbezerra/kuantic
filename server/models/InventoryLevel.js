const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryLevelSchema = new Schema(
    {
        inventory_item_id: {
            type: Number,
            required: true,
            trim: true
        },
        location_id: {
            type: Number,
            required: true,
            trim: true
        },
        available: {
            type: Number,
            trim: true,
            default: null
        }
    },
    {
        timestamps: {
            updatedAt: 'updated_at'
        }
    }
);

InventoryLevelSchema.set('collection', 'inventoryLevels');

const InventoryLevel = mongoose.model('InventoryLevel', InventoryLevelSchema);

module.exports = { InventoryLevel };

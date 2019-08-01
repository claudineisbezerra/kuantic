const mongoose = require('mongoose');
const uidGenerator = require('node-unique-id-generator');
const Schema = mongoose.Schema;

const PurchaseExecutedItemSchema = new Schema(
    {
        product_id: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        variant_id: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        title: {
            type: String,
            trim: true,
            default: null
        },
        handle: {
            type: String,
            trim: true,
            default: null
        },
        collection_id: {
            type: Number,
            trim: true,
            default: null
        },
        collection_title: {
            type: String,
            trim: true,
            default: null
        },
        product_type_id: {
            type: Number,
            required: true,
            trim: true,
            unique: true
        },
        product_type_title: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        image_src: {
            type: String,
            trim: true,
            default: null
        },
        sku: {
            type: String,
            trim: true,
            default: null
        },
        price: {
            type: String,
            trim: true,
            default: null
        },
        size: {
            type: String,
            trim: true,
            default: null
        },
        color: {
            type: String,
            trim: true,
            default: null
        },
        material: {
            type: String,
            trim: true,
            default: null
        },
        vendor: {
            type: String,
            trim: true,
            default: null
        },
        inventory_quantity: {
            type: String,
            trim: true,
            default: null
        },
        inventory_cost: {
            type: String,
            trim: true,
            default: null
        },
        inventory_optimal: {
            type: String,
            trim: true,
            default: null
        },
        purchase_executed_quantity_to_buy: {
            type: String,
            trim: true,
            default: null
        },
        purchase_executed_value_to_buy: {
            type: String,
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

PurchaseExecutedItemSchema.set('collection', 'purchaseItems');
PurchaseExecutedItemSchema.methods.getPurchaseId = function() {
    return uidGenerator.generateUniqueId();
};

const PurchaseExecutedItem = mongoose.model('PurchaseExecutedItem', PurchaseExecutedItemSchema);
module.exports = { PurchaseExecutedItem };

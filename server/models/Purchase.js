const mongoose = require('mongoose');
const uidGenerator = require('node-unique-id-generator');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema(
    {
        params: {
            purchase_id: {
                type: String,
                required: true,
                trim: true,
                default: function() {
                    return uidGenerator.generateUniqueId();
                }
            },
            purchase_title: {
                type: String,
                trim: true,
                default: null
            },
            collection: [
                {
                    collection_id: {
                        type: String,
                        required: true,
                        trim: true,
                        unique: true
                    },
                    collection_title: {
                        type: String,
                        trim: true,
                        default: null
                    }
                }
            ],
            product_type: [],
            price_range: [
                {
                    from: {
                        type: String,
                        default: null
                    },
                    to: {
                        type: String,
                        default: null
                    }
                }
            ],
            planned_budget: {
                type: String,
                default: null
            },
            planned_budget_not_used: {
                type: String,
                default: null
            },
            executed_budget: {
                type: String,
                default: null
            },
            executed_budget_not_used: {
                type: String,
                default: null
            }
        },
        purchases: {
            planned_items: [
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
                    product_type: {
                        type: String,
                        required: true,
                        trim: true,
                        unique: true
                    },
                    collection_title: {
                        type: String,
                        trim: true,
                        default: null
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
                    purchase_planned_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    purchase_planned_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    },
                    purchase_executed_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    purchase_executed_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    }
                }
            ],
            executed_items: [
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
                    product_type: {
                        type: String,
                        required: true,
                        trim: true,
                        unique: true
                    },
                    collection_title: {
                        type: String,
                        trim: true,
                        default: null
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
                    purchase_planned_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    purchase_planned_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    },
                    purchase_executed_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    purchase_executed_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    }
                }
            ]
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

PurchaseSchema.set('collection', 'purchases');
PurchaseSchema.methods.getPurchaseId = function() {
    return uidGenerator.generateUniqueId();
};

const Purchase = mongoose.model('Purchase', PurchaseSchema);
module.exports = { Purchase };

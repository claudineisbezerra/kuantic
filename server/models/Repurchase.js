const mongoose = require('mongoose');
const uidGenerator = require('node-unique-id-generator');
const Schema = mongoose.Schema;

const RepurchaseSchema = new Schema(
    {
        params: {
            repurchase_id: {
                type: String,
                unique: true,
                required: true,
                trim: true,
                default: function() {
                    return uidGenerator.generateUniqueId();
                }
            },
            repurchase_title: {
                type: String,
                trim: true,
                default: null
            },
            collection: [],
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
        repurchases: {
            planned_items: [
                {
                    product_id: {
                        type: String,
                        required: true,
                        trim: true
                    },
                    product_title: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    variant_id: {
                        type: String,
                        required: true,
                        trim: true
                    },
                    variant_title: {
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
                        trim: true
                    },
                    product_type_title: {
                        type: String,
                        required: true,
                        trim: true
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
                    inventory_unit_cost: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    inventory_optimal: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    repurchase_planned_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    repurchase_planned_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    },
                    repurchase_executed_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    repurchase_executed_value_to_buy: {
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
                        trim: true
                    },
                    product_title: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    variant_id: {
                        type: String,
                        required: true,
                        trim: true
                    },
                    variant_title: {
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
                        trim: true
                    },
                    product_type_title: {
                        type: String,
                        required: true,
                        trim: true
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
                    inventory_unit_cost: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    inventory_optimal: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    repurchase_planned_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    repurchase_planned_value_to_buy: {
                        type: String,
                        trim: true,
                        default: 0.0
                    },
                    repurchase_executed_quantity_to_buy: {
                        type: String,
                        trim: true,
                        default: 0
                    },
                    repurchase_executed_value_to_buy: {
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

RepurchaseSchema.set('collection', 'repurchases');
RepurchaseSchema.methods.getRepurchaseId = function() {
    return uidGenerator.generateUniqueId();
};

const Repurchase = mongoose.model('Repurchase', RepurchaseSchema);
module.exports = { Repurchase };

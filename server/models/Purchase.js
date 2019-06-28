const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const i18n = require('../plugins/i18n.js');
const uidGenerator = require('node-unique-id-generator');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema(
    {
        param: {
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
            compared_budget: {
                type: String,
                default: null
            }
        },
        purchases: [
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
                purchase_quantity_to_buy: {
                    type: String,
                    trim: true,
                    default: null
                },
                purchase_quantity_to_buy_modified: {
                    type: String,
                    trim: true,
                    default: null
                },
                purchase_cost: {
                    type: String,
                    trim: true,
                    default: null
                },
                purchase_cost_modified: {
                    type: String,
                    trim: true,
                    default: null
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

PurchaseSchema.methods.getPurchaseId = function() {
    return uidGenerator.generateUniqueId();
};

// Before Saving hash the password with bcrypt, using the default 10 rounds for salt
// PurchaseSchema.pre('save', function(next) {
//     if (this.password !== '' && this.isModified('password')) {
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(this.password, salt, (err, res) => {
//                 this.password = res;
//                 next();
//             });
//         });
//     } else {
//         next();
//     }
// });

const Purchase = mongoose.model('Purchase', PurchaseSchema);
module.exports = { Purchase };

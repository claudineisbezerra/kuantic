const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const i18n = require('../plugins/i18n.js');
const Schema = mongoose.Schema;

const VariantIndicatorSchema = new Schema(
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
        },
        image_id: {
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
        inventory_item_id: {
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
        sales_potential: {
            type: String,
            trim: true,
            default: null
        },
        sales_potential_avg: {
            type: String,
            trim: true,
            default: null
        },
        sales_volume: {
            type: String,
            trim: true,
            default: null
        },
        sales_volume_avg: {
            type: String,
            trim: true,
            default: null
        },
        sales_volume_optimal: {
            type: String,
            trim: true,
            default: null
        },
        sales_value: {
            type: String,
            trim: true,
            default: null
        },
        sales_value_avg: {
            type: String,
            trim: true,
            default: null
        },
        sales_value_optimal: {
            type: String,
            trim: true,
            default: null
        },
        pc1: {
            type: String,
            trim: true,
            default: null
        },
        pc1_percentage: {
            type: String,
            trim: true,
            default: null
        },
        pc1_potential: {
            type: String,
            trim: true,
            default: null
        },
        pc1_potential_percentage: {
            type: String,
            trim: true,
            default: null
        },
        pc1_optimal: {
            type: String,
            trim: true,
            default: null
        },
        pc1_optimal_percentage: {
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

// VariantIndicatorSchema.methods.isValidPassword = function(password) {
//     return bcrypt.compare(password, this.password);
// };

// Before Saving hash the password with bcrypt, using the default 10 rounds for salt
// VariantIndicatorSchema.pre('save', function(next) {
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

const VariantIndicator = mongoose.model('VariantIndicator', VariantIndicatorSchema);

module.exports = { VariantIndicator };

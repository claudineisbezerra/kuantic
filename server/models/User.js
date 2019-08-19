const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const i18n = require('../plugins/i18n.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
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
        handle: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            default: null
        },
        phone: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        location: {
            type: String,
            default: null
        },
        social: {
            id: {
                type: String,
                default: null
            },
            image: {
                type: String,
                default: null
            },
            email: {
                type: String,
                default: null
            }
        },
        default_address: {
            address1: {
                type: String,
                trim: true
            },
            address2: {
                type: String,
                trim: true
            },
            city: {
                type: String,
                trim: true
            },
            province: {
                type: String,
                trim: true
            },
            province_code: {
                type: String,
                trim: true
            },
            country: {
                type: String,
                trim: true
            },
            country_code: {
                type: String,
                trim: true
            },
            zip: {
                type: String,
                trim: true
            },
            latitude: {
                type: String,
                trim: true
            },
            longitude: {
                type: String,
                trim: true
            }
        },
        addresses: {
            type: Schema.Types.Mixed,
            trim: true
        },
        company: {
            type: Object,
            trim: true
        },
        about: {
            type: String,
            trim: true
        },
        has_agreed_to_terms: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Before Saving hash the password with bcrypt, using the default 10 rounds for salt
UserSchema.pre('save', function(next) {
    if (this.password !== '' && this.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, res) => {
                this.password = res;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };

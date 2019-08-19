const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const i18n = require('../plugins/i18n.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            default: null
        },
        first_name: {
            type: String,
            required: true,
            trim: true,
            default: null
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
            default: null
        },
        handle: {
            type: String,
            required: true,
            trim: true,
            default: null
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            default: null
        },
        phone: {
            type: String,
            trim: true,
            default: null
        },
        password: {
            type: String,
            default: null
        },
        image: {
            type: String,
            trim: true,
            default: null
        },
        location: {
            type: String,
            trim: true,
            default: null
        },
        social: {
            facebook: {
                id: {
                    type: String,
                    default: null
                },
                url: {
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
            instagram: {
                id: {
                    type: String,
                    default: null
                },
                url: {
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
            twitter: {
                id: {
                    type: String,
                    default: null
                },
                url: {
                    type: String,
                    default: null
                },
                image: {
                    type: String,
                    default: null
                },
                email: {
                    type: String,
                    trim: true,
                    default: null
                }
            }
        },
        default_address: {
            address: {
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
            zipCode: {
                type: String,
                trim: true,
                default: null
            },
            latitude: {
                type: String,
                trim: true,
                default: null
            },
            longitude: {
                type: String,
                trim: true,
                default: null
            }
        },
        addresses: {
            type: Schema.Types.Mixed,
            trim: true,
            default: null
        },
        company: {
            type: Object,
            trim: true,
            default: null
        },
        about_me: {
            type: String,
            trim: true,
            default: null
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

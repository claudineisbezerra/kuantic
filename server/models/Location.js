const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        active: {
            type: Boolean,
            trim: true,
            default: true
        },
        name: {
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

LocationSchema.set('collection', 'locations');

const Location = mongoose.model('Location', LocationSchema);

module.exports = { Location };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmartCollectionSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
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
        template_suffix: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

SmartCollectionSchema.set('collection', 'smartCollections');

const SmartCollection = mongoose.model('SmartCollection', SmartCollectionSchema);

module.exports = { SmartCollection };

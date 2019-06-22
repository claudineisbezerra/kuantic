const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomCollectionSchema = new Schema(
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

CustomCollectionSchema.set('collection', 'customCollections');

const CustomCollection = mongoose.model('CustomCollection', CustomCollectionSchema);

module.exports = { CustomCollection };

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
        image: {
            type: Object,
            required: true,
            trim: true
        },
        template_suffix: {
            type: String,
            required: true,
            trim: true
        },
        body_html: {
            type: String,
            required: true,
            trim: true
        },
        sort_order: {
            type: String,
            required: true,
            trim: true
        },
        published: {
            type: Boolean,
            required: true,
            trim: true
        },
        published_at: {
            type: Date,
            required: true,
            trim: true
        },
        published_scope: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: {
            updatedAt: 'updated_at'
        }
    }
);

CustomCollectionSchema.set('collection', 'customCollections');

const CustomCollection = mongoose.model('CustomCollection', CustomCollectionSchema);

module.exports = { CustomCollection };

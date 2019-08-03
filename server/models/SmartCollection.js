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
        rules: {
            type: Object,
            required: true,
            trim: true
        },
        disjunctive: {
            type: Boolean,
            required: true,
            trim: true
        },
        sort_order: {
            type: String,
            required: true,
            trim: true
        },
        products_manually_sorted_count: {
            type: Number,
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
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

SmartCollectionSchema.set('collection', 'smartCollections');

const SmartCollection = mongoose.model('SmartCollection', SmartCollectionSchema);

module.exports = { SmartCollection };

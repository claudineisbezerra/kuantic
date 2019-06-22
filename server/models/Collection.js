const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        title: {
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

CollectionSchema.set('collection', 'collections');

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = { Collection };

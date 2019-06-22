const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },
        product_id: {
            type: Number,
            required: true,
            trim: true
        },
        collection_id: {
            type: Number,
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

CollectSchema.set('collection', 'collects');

const Collect = mongoose.model('Collect', CollectSchema);

module.exports = { Collect };

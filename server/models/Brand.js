const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema(
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

BrandSchema.set('collection', 'brands');
const Brand = mongoose.model('Brand', BrandSchema);
module.exports = { Brand };

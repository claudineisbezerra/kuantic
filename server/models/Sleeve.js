const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SleeveSchema = new Schema(
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

SleeveSchema.set('collection', 'sleeves');
const Sleeve = mongoose.model('Sleeve', SleeveSchema);
module.exports = { Sleeve };

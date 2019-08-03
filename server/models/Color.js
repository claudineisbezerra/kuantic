const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
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

ColorSchema.set('collection', 'colors');
const Color = mongoose.model('Color', ColorSchema);
module.exports = { Color };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeSchema = new Schema(
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

SizeSchema.set('collection', 'sizes');
const Size = mongoose.model('Size', SizeSchema);
module.exports = { Size };

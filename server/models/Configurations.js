const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigurationsSchema = new Schema(
    {
        coverages: [
            {
                collection_id: {
                    type: Number,
                    trim: true,
                    default: null
                },
                collection_title: {
                    type: String,
                    trim: true,
                    default: null
                },
                product_type_id: {
                    type: Number,
                    required: true,
                    trim: true
                },
                product_type_title: {
                    type: String,
                    required: true,
                    trim: true
                },
                coverage_min: {
                    type: Number,
                    trim: true,
                    default: null
                },
                coverage_optimal: {
                    type: Number,
                    trim: true,
                    default: null
                }
            }
        ]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

ConfigurationsSchema.set('collection', 'configurations');

const Configurations = mongoose.model('Configurations', ConfigurationsSchema);
module.exports = { Configurations };

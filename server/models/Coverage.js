const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoverageSchema = new Schema(
    {
        product_types: [
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

CoverageSchema.set('collection', 'coverages');

const Coverage = mongoose.model('Coverage', CoverageSchema);
module.exports = { Coverage };

require('dotenv').config();
const { mongoose, connect } = require('../../db/mongoose');
const { User } = require('../../models/User');
const { Room } = require('../../models/Room');
const { Message } = require('../../models/Message');
const { ProductVariantIndicator } = require('../../models/ProductVariantIndicator');
const { Collection } = require('../../models/Collection');
const { ProductType } = require('../../models/ProductType');
const { PriceRange } = require('../../models/PriceRange');
const { Coverage } = require('../../models/Coverage');
const gravatar = require('gravatar');
const {
    userSeedData,
    roomSeedData,
    messageSeedData,
    variantIndicatorSeedData,
    collectionSeedData,
    productTypeSeedData,
    priceRangeSeedData,
    coverageSeedData
} = require('./seedData');

const slugify = require('slugify');

const populateData = async () => {
    if (mongoose.connection.readyState === 0) {
        connect();
    }

    let userId;
    let roomId;

    console.log('\n[PROCESS:SEED] Seeding User Data');
    await User.deleteMany({}).exec();
    for (let user of userSeedData) {
        const userData = await new User({
            handle: slugify(user.username),
            username: user.username,
            email: user.email,
            password: user.password,
            image: gravatar.url(user.email, { s: '220', r: 'pg', d: 'identicon' })
        }).save();
        userId = userData._id;
    }
    console.log('[PROCESS:FIN] Completed Seeding User Data');

    console.log('[PROCESS:SEED] Seeding Room Data');
    await Room.deleteMany({}).exec();
    for (let room of roomSeedData) {
        const roomData = await new Room({
            name: room.name,
            user: userId,
            access: room.password ? false : true,
            password: room.password
        }).save();
        roomId = roomData._id;
    }
    console.log('[PROCESS:FIN] Completed Seeding Room Data');

    console.log('[PROCESS:SEED] Seeding Message Data');
    await Message.deleteMany({}).exec();
    for (let message of messageSeedData) {
        await new Message({
            content: message.content,
            user: userId,
            room: roomId
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Message Data');

    console.log('[PROCESS:SEED] Seeding ProductVariantIndicator Data');
    await ProductVariantIndicator.deleteMany({}).exec();
    for (let variantIndicator of variantIndicatorSeedData) {
        await new ProductVariantIndicator({
            product_id: variantIndicator.product_id,
            variant_id: variantIndicator.variant_id,
            title: variantIndicator.title,
            handle: variantIndicator.handle,
            collection_id: variantIndicator.collection_id,
            collection_title: variantIndicator.collection_title,
            product_type_id: variantIndicator.product_type_id,
            product_type_title: variantIndicator.product_type_title,
            image_id: variantIndicator.image_id,
            image_src: variantIndicator.image_src,
            sku: variantIndicator.sku,
            price: variantIndicator.price,
            size: variantIndicator.size,
            color: variantIndicator.color,
            material: variantIndicator.material,
            vendor: variantIndicator.vendor,
            inventory_item_id: variantIndicator.inventory_item_id,
            inventory_quantity: variantIndicator.inventory_quantity,
            inventory_cost: variantIndicator.inventory_cost,
            inventory_optimal: variantIndicator.inventory_optimal,
            sales_potential: variantIndicator.sales_potential,
            sales_potential_avg: variantIndicator.sales_potential_avg,
            sales_volume: variantIndicator.sales_volume,
            sales_volume_avg: variantIndicator.sales_volume_avg,
            sales_volume_optimal: variantIndicator.sales_volume_optimal,
            sales_value: variantIndicator.sales_value,
            sales_value_avg: variantIndicator.sales_value_avg,
            sales_value_optimal: variantIndicator.sales_value_optimal,
            pc1: variantIndicator.pc1,
            pc1_percentage: variantIndicator.pc1_percentage,
            pc1_potential: variantIndicator.pc1_potential,
            pc1_potential_percentage: variantIndicator.pc1_potential_percentage,
            pc1_optimal: variantIndicator.pc1_optimal,
            pc1_optimal_percentage: variantIndicator.pc1_optimal_percentage,
            created_at: variantIndicator.created_at,
            updated_at: variantIndicator.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding ProductVariantIndicator Data');

    console.log('[PROCESS:SEED] Seeding Collection Data');
    await Collection.deleteMany({}).exec();
    for (let collection of collectionSeedData) {
        await new Collection({
            id: collection.id,
            title: collection.title,
            created_at: collection.created_at,
            updated_at: collection.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Collection Data');

    console.log('[PROCESS:SEED] Seeding ProductType Data');
    await ProductType.deleteMany({}).exec();
    for (let productType of productTypeSeedData) {
        await new ProductType({
            id: productType.id,
            title: productType.title,
            created_at: productType.created_at,
            updated_at: productType.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding ProductType Data');

    console.log('[PROCESS:SEED] Seeding PriceRange Data');
    await PriceRange.deleteMany({}).exec();
    for (let priceRange of priceRangeSeedData) {
        await new PriceRange({
            id: priceRange.id,
            start_at: priceRange.start_at,
            end_at: priceRange.end_at,
            created_at: priceRange.created_at,
            updated_at: priceRange.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding PriceRange Data');

    console.log('[PROCESS:SEED] Seeding Coverage Data');
    await Coverage.deleteMany({}).exec();
    await new Coverage({ product_types: coverageSeedData }).save();
    console.log('[PROCESS:FIN] Completed Seeding Coverage Data');

    await mongoose.connection.close();
};

module.exports = { populateData };

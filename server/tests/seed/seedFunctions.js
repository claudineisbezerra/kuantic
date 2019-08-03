require('dotenv').config();
const { mongoose, connect } = require('../../db/mongoose');
const { User } = require('../../models/User');
const { Room } = require('../../models/Room');
const { Message } = require('../../models/Message');
const { ProductImage } = require('../../models/ProductImage');
const { Product } = require('../../models/Product');
const { ProductVariant } = require('../../models/ProductVariant');
const { ProductVariantIndicator } = require('../../models/ProductVariantIndicator');
const { InventoryItem } = require('../../models/InventoryItem');
const { InventoryLevel } = require('../../models/InventoryLevel');
const { Location } = require('../../models/Location');
const { Brand } = require('../../models/Brand');
const { Color } = require('../../models/Color');
const { Genre } = require('../../models/Genre');
const { Material } = require('../../models/Material');
const { Size } = require('../../models/Size');
const { Sleeve } = require('../../models/Sleeve');
const { ProductType } = require('../../models/ProductType');
const { CustomCollection } = require('../../models/CustomCollection');
const { SmartCollection } = require('../../models/SmartCollection');
const { Collect } = require('../../models/Collect');
const { Collection } = require('../../models/Collection');
const { PriceRange } = require('../../models/PriceRange');
const { Configurations } = require('../../models/Configurations');
const { Customer } = require('../../models/Customer');
const { CustomerAddress } = require('../../models/CustomerAddress');
const { Order } = require('../../models/Order');
const gravatar = require('gravatar');
const {
    userSeedData,
    roomSeedData,
    messageSeedData,
    productImageSeedData,
    productSeedData,
    productVariantSeedData,
    productVariantIndicatorSeedData,
    inventoryItemSeedData,
    inventoryLevelSeedData,
    locationSeedData,
    brandSeedData,
    colorSeedData,
    genreSeedData,
    materialSeedData,
    sizeSeedData,
    sleeveSeedData,
    productTypeSeedData,
    customCollectionSeedData,
    smartCollectionSeedData,
    collectSeedData,
    collectionSeedData,
    priceRangeSeedData,
    coverageSeedData,
    customerSeedData,
    customerAddressSeedData,
    orderSeedData
} = require('./seedData');

const slugify = require('slugify');

const populateData = async () => {
    if (mongoose.connection.readyState === 0) {
        connect();
    }

    let userId;
    let roomId;

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

    await Message.deleteMany({}).exec();
    for (let message of messageSeedData) {
        await new Message({
            content: message.content,
            user: userId,
            room: roomId
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Message Data');

    await ProductImage.deleteMany({}).exec();
    for (let productImage of productImageSeedData) {
        await new ProductImage({
            id: productImage.id,
            position: productImage.position,
            product_id: productImage.product_id,
            variant_ids: productImage.variant_ids,
            src: productImage.src,
            width: productImage.width,
            height: productImage.height,
            created_at: productImage.created_at,
            updated_at: productImage.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding ProductImage Data');

    await Product.deleteMany({}).exec();
    for (let product of productSeedData) {
        await new Product({
            id: product.id,
            title: product.title,
            handle: product.handle,
            product_type: product.product_type,
            variants: product.variants,
            images: product.images,
            options: product.options,
            vendor: product.vendor,
            body_html: product.body_html,
            tags: product.tags,
            template_suffix: product.template_suffix,
            metafields_global_title_tag: product.metafields_global_title_tag,
            metafields_global_description_tag: product.metafields_global_description_tag,
            published_at: product.published_at,
            published_scope: product.published_scope
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Product Data');

    await ProductVariant.deleteMany({}).exec();
    for (let productVariant of productVariantSeedData) {
        await new ProductVariant({
            id: productVariant.id,
            product_id: productVariant.product_id,
            inventory_item_id: productVariant.inventory_item_id,
            image_id: productVariant.image_id,
            sku: productVariant.sku,
            title: productVariant.title,
            name: productVariant.name,
            weight: productVariant.weight,
            weight_unit: productVariant.weight_unit,
            grams: productVariant.grams,
            vendor: productVariant.vendor,
            inventory_quantity: productVariant.inventory_quantity,
            position: productVariant.position,
            price: productVariant.price,
            compare_at_price: productVariant.compare_at_price,
            created_at: productVariant.created_at,
            updated_at: productVariant.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding ProductVariant Data');

    await ProductVariantIndicator.deleteMany({}).exec();
    for (let variantIndicator of productVariantIndicatorSeedData) {
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

    await InventoryItem.deleteMany({}).exec();
    for (let inventoryItem of inventoryItemSeedData) {
        await new InventoryItem({
            id: inventoryItem.id,
            sku: inventoryItem.sku,
            cost: inventoryItem.cost,
            tracked: inventoryItem.tracked,
            requires_shipping: inventoryItem.requires_shipping,
            country_code_of_origin: inventoryItem.country_code_of_origin,
            province_code_of_origin: inventoryItem.province_code_of_origin,
            country_harmonized_system_codes: inventoryItem.country_harmonized_system_codes,
            created_at: inventoryItem.created_at,
            updated_at: inventoryItem.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding InventoryItem Data');

    await InventoryLevel.deleteMany({}).exec();
    for (let inventoryLevel of inventoryLevelSeedData) {
        await new InventoryLevel({
            inventory_item_id: inventoryLevel.inventory_item_id,
            location_id: inventoryLevel.location_id,
            available: inventoryLevel.available,
            updated_at: inventoryLevel.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding InventoryLevel Data');

    await Location.deleteMany({}).exec();
    for (let location of locationSeedData) {
        await new Location({
            id: location.id,
            name: location.name,
            address1: location.address1,
            address2: location.address2,
            city: location.city,
            province: location.province,
            province_code: location.province_code,
            country: location.country,
            country_code: location.country_code,
            zip: location.zip,
            phone: location.phone,
            active: location.active,
            legacy: location.legacy,
            created_at: location.created_at,
            updated_at: location.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Location Data');

    await Brand.deleteMany({}).exec();
    for (let brand of brandSeedData) {
        await new Brand({
            id: brand.id,
            title: brand.title,
            created_at: brand.created_at,
            updated_at: brand.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Brand Data');

    await Color.deleteMany({}).exec();
    for (let color of colorSeedData) {
        await new Color({
            id: color.id,
            title: color.title,
            created_at: color.created_at,
            updated_at: color.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Color Data');

    await Genre.deleteMany({}).exec();
    for (let genre of genreSeedData) {
        await new Genre({
            id: genre.id,
            title: genre.title,
            created_at: genre.created_at,
            updated_at: genre.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Genre Data');

    await Material.deleteMany({}).exec();
    for (let material of materialSeedData) {
        await new Material({
            id: material.id,
            title: material.title,
            created_at: material.created_at,
            updated_at: material.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Material Data');

    await Size.deleteMany({}).exec();
    for (let size of sizeSeedData) {
        await new Size({
            id: size.id,
            title: size.title,
            created_at: size.created_at,
            updated_at: size.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Size Data');

    await Sleeve.deleteMany({}).exec();
    for (let sleeve of sleeveSeedData) {
        await new Sleeve({
            id: sleeve.id,
            title: sleeve.title,
            created_at: sleeve.created_at,
            updated_at: sleeve.updated_at
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Sleeve Data');

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

    await CustomCollection.deleteMany({}).exec();
    for (let customCollection of customCollectionSeedData) {
        await new CustomCollection({
            id: customCollection.id,
            title: customCollection.title,
            handle: customCollection.handle,
            image: customCollection.image,
            template_suffix: customCollection.template_suffix,
            body_html: customCollection.body_html,
            sort_order: customCollection.sort_order,
            published: customCollection.published,
            published_at: customCollection.published_at,
            published_scope: customCollection.published_scope
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding CustomCollection Data');

    await SmartCollection.deleteMany({}).exec();
    for (let smartCollection of smartCollectionSeedData) {
        await new SmartCollection({
            id: smartCollection.id,
            title: smartCollection.title,
            handle: smartCollection.handle,
            image: smartCollection.image,
            template_suffix: smartCollection.template_suffix,
            body_html: smartCollection.body_html,
            rules: smartCollection.rules,
            disjunctive: smartCollection.disjunctive,
            sort_order: smartCollection.sort_order,
            products_manually_sorted_count: smartCollection.products_manually_sorted_count,
            published: smartCollection.published,
            published_at: smartCollection.published_at,
            published_scope: smartCollection.published_scope
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding SmartCollection Data');

    await Collect.deleteMany({}).exec();
    for (let collect of collectSeedData) {
        await new Collect({
            id: collect.id,
            product_id: collect.product_id,
            collection_id: collect.collection_id,
            featured: collect.featured,
            position: collect.position,
            sort_value: collect.sort_value
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Collect Data');

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

    await Configurations.deleteMany({}).exec();
    await new Configurations({ coverages: coverageSeedData }).save();
    console.log('[PROCESS:FIN] Completed Seeding Configurations Data');

    await Customer.deleteMany({}).exec();
    for (let customer of customerSeedData) {
        await new Customer({
            id: customer.id,
            first_name: customer.first_name,
            last_name: customer.last_name,
            email: customer.email,
            phone: customer.phone,
            default_address: customer.default_address,
            addresses: customer.addresses,
            last_order_id: customer.last_order_id,
            last_order_name: customer.last_order_name,
            orders_count: customer.orders_count,
            total_spent: customer.total_spent,
            note: customer.note,
            currency: customer.currency,
            marketing_opt_in_level: customer.marketing_opt_in_level,
            accepts_marketing: customer.accepts_marketing,
            accepts_marketing_updated_at: customer.accepts_marketing_updated_at,
            state: customer.state,
            verified_email: customer.verified_email,
            multipass_identifier: customer.multipass_identifier,
            tax_exempt: customer.tax_exempt,
            tax_exemptions: customer.tax_exemptions,
            tags: customer.tags
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Customer Data');

    await CustomerAddress.deleteMany({}).exec();
    for (let customerAddress of customerAddressSeedData) {
        await new CustomerAddress({
            id: customerAddress.id,
            customer_id: customerAddress.customer_id,
            address1: customerAddress.address1,
            address2: customerAddress.address2,
            city: customerAddress.city,
            province: customerAddress.province,
            province_code: customerAddress.province_code,
            country: customerAddress.country,
            country_code: customerAddress.country_code,
            zip: customerAddress.zip,
            latitude: customerAddress.latitude,
            longitude: customerAddress.longitude,
            company: customerAddress.company,
            name: customerAddress.name,
            first_name: customerAddress.first_name,
            last_name: customerAddress.last_name,
            phone: customerAddress.phone,
            default: customerAddress.default
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding CustomerAddress Data');

    await Order.deleteMany({}).exec();
    for (let order of orderSeedData) {
        await new Order({
            id: order.id,
            browser_ip: order.browser_ip,
            buyer_accepts_marketing: order.buyer_accepts_marketing,
            billing_address: order.billing_address,
            cancel_reason: order.cancel_reason,
            cancelled_at: order.cancelled_at,
            cart_token: order.cart_token,
            client_details: order.client_details,
            closed_at: order.closed_at,
            currency: order.currency,
            customer: order.customer,
            customer_locale: order.customer_locale,
            discount_applications: order.discount_applications,
            discount_codes: order.discount_codes,
            email: order.email,
            financial_status: order.financial_status,
            fulfillments: order.fulfillments,
            fulfillment_status: order.fulfillment_status,
            line_items: order.line_items,
            location_id: order.location_id,
            name: order.name,
            note: order.note,
            note_attributes: order.note_attributes,
            number: order.number,
            order_number: order.order_number,
            phone: order.phone,
            presentment_currency: order.presentment_currency,
            processed_at: order.processed_at,
            shipping_address: order.shipping_address,
            shipping_lines: order.shipping_lines,
            source_name: order.source_name,
            subtotal_price: order.subtotal_price,
            subtotal_price_set: order.subtotal_price_set,
            total_discounts: order.total_discounts,
            total_discounts_set: order.total_discounts_set,
            total_line_items_price: order.total_line_items_price,
            total_line_items_price_set: order.total_line_items_price_set,
            total_price: order.total_price,
            total_price_set: order.total_price_set,
            total_tax: order.total_tax,
            total_tax_set: order.total_tax_set,
            total_tip_received: order.total_tip_received,
            total_weight: order.total_weight,
            user_id: order.user_id
        }).save();
    }
    console.log('[PROCESS:FIN] Completed Seeding Order Data');

    await mongoose.connection.close();
};

module.exports = { populateData };

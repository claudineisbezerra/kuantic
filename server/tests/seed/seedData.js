const CONSTANT = require('../../utils/serverConstants');

module.exports = {
    userSeedData: [
        {
            email: 'teste1@email.com.br',
            username: 'teste1',
            password: 'just4now'
        },
        {
            email: 'teste2@email.com.br',
            username: 'teste2',
            password: 'just4now'
        },
        {
            email: 'teste3@email.com.br',
            username: 'teste3',
            password: 'just4now'
        },
        {
            email: 'teste4@email.com.br',
            username: 'teste4',
            password: 'just4now'
        },
        {
            email: 'teste5@email.com.br',
            username: 'teste5',
            password: 'just4now'
        }
    ],
    roomSeedData: [
        {
            name: 'Private Room #1',
            password: 'just4now'
        },
        {
            name: 'Private Room #2',
            password: 'just4now'
        },
        {
            name: 'Public Room #1',
            password: ''
        },
        {
            name: 'Public Room #2',
            password: ''
        }
    ],
    messageSeedData: [
        {
            content: 'Test Message 1'
        },
        {
            content: 'Test Message 2'
        },
        {
            content: 'Test Message 3'
        }
    ],
    variantIndicatorSeedData: [
        {
            product_id: 1,
            variant_id: 11,
            title: 'Tênis Nike Air Max 97 Throwback Future',
            handle: 'Air Max 97 Throwback Future',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'THROWBACK2019BLACK',
            price: 230.0,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 11,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 2,
            variant_id: 21,
            title: 'Tênis Nike Lebron 16',
            handle: 'Lebron 16',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'LEBRON162019WHITE',
            price: 230.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 21,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 3,
            variant_id: 31,
            title: 'Tênis Nike Air Jordan Proto React',
            handle: 'Air Jordan Proto React',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'AIRJORDAN2019BLACK',
            price: 230.0,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 31,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 2,
            variant_id: 22,
            title: 'Tênis Nike Lebron 16 Low',
            handle: 'Lebron 16 Low',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'LEBRON16LOW2019BLACK',
            price: 230.0,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 41,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 5,
            variant_id: 51,
            title: 'Tênis Nike Kyrie 5',
            handle: 'Kyrie 5',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'LEBRON16LOW2019BLACK',
            price: 230.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 51,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 6,
            variant_id: 61,
            title: 'Tênis Adidas Stan Smith',
            handle: 'Stan Smith',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'STANSMITH2019WHITE',
            price: 200.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 61,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 7,
            variant_id: 71,
            title: 'Tênis Adidas Seeley',
            handle: 'Seeley',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'SEELEY2019WHITE',
            price: 200.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            inventory_item_id: 71,
            vendor: 'Adidas',
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 8,
            variant_id: 81,
            title: 'Tênis Adidas X_Plr',
            handle: 'X_Plr',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'X_PLR2019BLUE',
            price: 200.0,
            size: '40',
            color: 'Azul',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 81,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 9,
            variant_id: 91,
            title: 'Tênis Adidas Prophere',
            handle: 'Prophere',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'PROPHERE2019WHITE',
            price: 200.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 91,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        },
        {
            product_id: 10,
            variant_id: 101,
            title: 'Tênis Adidas Deerupt Runner',
            handle: 'Deerupt Runner',
            product_type: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 1,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_100x100@2x.jpg?v=1558342663',
            sku: 'DEERUPTRUNNER2019BLACK',
            price: 200.0,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 101,
            inventory_quantity: '5',
            inventory_cost: '80.00',
            inventory_optimal: '10',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 1000,
            sales_value_avg: 900,
            sales_value_optimal: 900,
            pc1: 1,
            pc1_percentage: 1,
            pc1_potential: 1,
            pc1_potential_percentage: 1,
            pc1_optimal: 1,
            pc1_optimal_percentage: 1
        }
    ],
    productTypeSeedData: [
        {
            id: 1,
            title: 'Boné'
        },
        {
            id: 2,
            title: 'Tênis'
        },
        {
            id: 4,
            title: 'Camiseta'
        },
        {
            id: 5,
            title: 'Regata'
        },
        {
            id: 6,
            title: 'Moletom'
        },
        {
            id: 7,
            title: 'Bermuda'
        },
        {
            id: 8,
            title: 'Shorts'
        },
        {
            id: 9,
            title: 'Chinelo'
        },
        {
            id: 10,
            title: 'Meia'
        },
        {
            id: 11,
            title: 'Calça'
        },
        {
            id: 12,
            title: 'Bolsa'
        },
        {
            id: 13,
            title: 'Jaqueta e Casaco'
        },
        {
            id: 14,
            title: 'Pochete'
        },
        {
            id: 15,
            title: 'Mochila'
        }
    ],
    collectionSeedData: [
        {
            id: 434521,
            title: 'Masculino'
        },
        {
            id: 434522,
            title: 'Feminino'
        },
        {
            id: 434523,
            title: 'Juvenil'
        }
    ],
    priceRangeSeedData: [
        {
            id: 2,
            start_at: 0,
            end_at: 50
        },
        {
            id: 3,
            start_at: 51,
            end_at: 100
        },
        {
            id: 4,
            start_at: 101,
            end_at: 150
        },
        {
            id: 5,
            start_at: 150,
            end_at: parseInt(CONSTANT.PRICE.MAX_RANGE.VALUE)
        }
    ]
};

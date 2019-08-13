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
    productImageSeedData: [
        {
            id: 101,
            position: '1',
            product_id: 101,
            variant_ids: [1011],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 102,
            position: '1',
            product_id: 102,
            variant_ids: [1021, 1022],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 103,
            position: '1',
            product_id: 103,
            variant_ids: [1031],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 105,
            position: '1',
            product_id: 105,
            variant_ids: [1051],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 106,
            position: '1',
            product_id: 106,
            variant_ids: [1061],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 107,
            position: '1',
            product_id: 107,
            variant_ids: [1071],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 108,
            position: '1',
            product_id: 108,
            variant_ids: [1081],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 109,
            position: '1',
            product_id: 109,
            variant_ids: [1091],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 110,
            position: '1',
            product_id: 110,
            variant_ids: [1101],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            width: '640',
            height: '480'
        },
        {
            id: 201,
            position: '1',
            product_id: 201,
            variant_ids: [2011],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            width: '640',
            height: '480'
        },
        {
            id: 202,
            position: '1',
            product_id: 202,
            variant_ids: [2021],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            width: '640',
            height: '480'
        },
        {
            id: 203,
            position: '1',
            product_id: 203,
            variant_ids: [2031],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            width: '640',
            height: '480'
        },
        {
            id: 204,
            position: '1',
            product_id: 204,
            variant_ids: [2041],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            width: '640',
            height: '480'
        },
        {
            id: 301,
            position: '1',
            product_id: 301,
            variant_ids: [3011],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            width: '640',
            height: '480'
        },
        {
            id: 302,
            position: '1',
            product_id: 302,
            variant_ids: [3021],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            width: '640',
            height: '480'
        },
        {
            id: 303,
            position: '1',
            product_id: 303,
            variant_ids: [3031],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            width: '640',
            height: '480'
        },
        {
            id: 304,
            position: '1',
            product_id: 304,
            variant_ids: [3041],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            width: '640',
            height: '480'
        },
        {
            id: 401,
            position: '1',
            product_id: 401,
            variant_ids: [4011],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        },
        {
            id: 402,
            position: '1',
            product_id: 402,
            variant_ids: [4021],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        },
        {
            id: 403,
            position: '1',
            product_id: 403,
            variant_ids: [4031],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        },
        {
            id: 404,
            position: '1',
            product_id: 404,
            variant_ids: [4041],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        },
        {
            id: 850703190,
            position: '1',
            product_id: 1971323306081,
            variant_ids: [18561869643873],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        },
        {
            id: 850703200,
            position: '1',
            product_id: 1971323502689,
            variant_ids: [18561871609953],
            src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            width: '640',
            height: '480'
        }
    ],
    productSeedData: [
        {
            id: 101,
            title: 'Tênis Nike Air Max 97 Throwback Future',
            handle: 'Air Max 97 Throwback Future',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1011,
                    product_id: 101,
                    inventory_item_id: 1011,
                    image_id: 101,
                    sku: 'THROWBACK3019BLACK',
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Air Max 97 Throwback Future',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 49.99,
                    compare_at_price: '49.99',
                    color: 'Preto',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 101,
                    position: '1',
                    product_id: 101,
                    variant_ids: [1011],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 101,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 101,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 101,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 102,
            title: 'Tênis Nike Lebron 16',
            handle: 'Lebron 16',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1021,
                    product_id: 102,
                    inventory_item_id: 1021,
                    image_id: 102,
                    sku: 'LEBRON163019WHITE',
                    title: 'Tênis Nike Lebron 16',
                    name: 'Lebron 16',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 99.99,
                    compare_at_price: '99.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                },
                {
                    id: 1022,
                    product_id: 102,
                    inventory_item_id: 1022,
                    image_id: 102,
                    sku: 'LEBRON163019WHITE',
                    title: 'Tênis Nike Lebron 16 Low',
                    name: 'Lebron 16 Low',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 149.99,
                    compare_at_price: '149.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 102,
                    position: '1',
                    product_id: 102,
                    variant_ids: [1021, 1022],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 102,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 102,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 102,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 103,
            title: 'Tênis Nike Air Jordan Proto React',
            handle: 'Air Jordan Proto React',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1031,
                    product_id: 103,
                    inventory_item_id: 1031,
                    image_id: 103,
                    sku: 'AIRJORDAN3019BLACK',
                    title: 'Tênis Nike Air Jordan Proto React',
                    name: 'Air Jordan Proto React',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 99.99,
                    compare_at_price: '99.99',
                    color: 'Preto',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 103,
                    position: '1',
                    product_id: 103,
                    variant_ids: [1031],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 103,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 103,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 103,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 105,
            title: 'Tênis Nike Kyrie 5',
            handle: 'Kyrie 5',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1051,
                    product_id: 105,
                    inventory_item_id: 1051,
                    image_id: 105,
                    sku: 'LEBRON16LOW3019BLACK',
                    title: 'Tênis Nike Kyrie 5',
                    name: 'Kyrie 5',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 240.0,
                    compare_at_price: '240.0',
                    color: 'Preto',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 105,
                    position: '1',
                    product_id: 105,
                    variant_ids: [1051],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 105,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 105,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 105,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 106,
            title: 'Tênis Adidas Stan Smith',
            handle: 'Stan Smith',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1061,
                    product_id: 106,
                    inventory_item_id: 1061,
                    image_id: 106,
                    sku: 'STANSMITH3019WHITE',
                    title: 'Tênis Adidas Stan Smith',
                    name: 'Stan Smit',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Adidas',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 106,
                    position: '1',
                    product_id: 106,
                    variant_ids: [1061],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 106,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 106,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 106,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Adidas',
            body_html: 'Be a sport magician: Video.',
            tags: 'Adidas, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Adidas',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 107,
            title: 'Tênis Adidas Seeley',
            handle: 'Seeley',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1071,
                    product_id: 107,
                    inventory_item_id: 1071,
                    image_id: 107,
                    sku: 'SEELEY3019WHITE',
                    title: 'Tênis Adidas Seeley',
                    name: 'Seeley',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Adidas',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 107,
                    position: '1',
                    product_id: 107,
                    variant_ids: [1071],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 107,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 107,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 107,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Adidas',
            body_html: 'Be a sport magician: Video.',
            tags: 'Adidas, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Adidas',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 108,
            title: 'Tênis Adidas X_Plr',
            handle: 'X_Plr',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1081,
                    product_id: 108,
                    inventory_item_id: 1081,
                    image_id: 108,
                    sku: 'SEELEY3019WHITE',
                    title: 'Tênis Adidas X_Plr',
                    name: 'X_Plr',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Adidas',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 108,
                    position: '1',
                    product_id: 108,
                    variant_ids: [1081],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 108,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 108,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 108,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Adidas',
            body_html: 'Be a sport magician: Video.',
            tags: 'Adidas, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Adidas',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 109,
            title: 'Tênis Adidas Prophere',
            handle: 'Prophere',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1091,
                    product_id: 109,
                    inventory_item_id: 1091,
                    image_id: 109,
                    sku: 'PROPHERE3019WHITE',
                    title: 'Tênis Adidas Prophere',
                    name: 'Prophere',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Adidas',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 109,
                    position: '1',
                    product_id: 109,
                    variant_ids: [1091],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 109,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 109,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 109,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Adidas',
            body_html: 'Be a sport magician: Video.',
            tags: 'Adidas, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Adidas',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 110,
            title: 'Tênis Adidas Deerupt Runner',
            handle: 'Deerupt Runner',
            product_type: 'Tênis',
            variants: [
                {
                    id: 1101,
                    product_id: 110,
                    inventory_item_id: 1101,
                    image_id: 110,
                    sku: 'DEERUPTRUNNER3019BLACK',
                    title: 'Tênis Adidas Deerupt Runner',
                    name: 'Deerupt Runner',
                    weight: 0.567,
                    weight_unit: 'kg',
                    grams: 567,
                    vendor: 'Adidas',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Preto',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 110,
                    variant_ids: [1101],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 110,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 110,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 110,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Adidas',
            body_html: 'Be a sport magician: Video.',
            tags: 'Adidas, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Adidas',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 201,
            title: 'Chinelo Vans Slide-on Checkboard 1',
            handle: 'Chinelo Slideon 1',
            product_type: 'Chinelo',
            variants: [
                {
                    id: 2011,
                    product_id: 201,
                    inventory_item_id: 2011,
                    image_id: 201,
                    sku: 'SLIDEON2019BLACK',
                    title: 'Chinelo Vans Slide-on Checkboard 1',
                    name: 'Chinelo Slideon 1',
                    weight: 0.28,
                    weight_unit: 'kg',
                    grams: 280,
                    vendor: 'Vans',
                    inventory_quantity: 0,
                    position: 1,
                    price: 49.99,
                    compare_at_price: '49.99',
                    color: 'Preto',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 201,
                    variant_ids: [2011],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 201,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 201,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 201,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Vans',
            body_html: 'Be a sport magician: Video.',
            tags: 'Vans, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Vans',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 202,
            title: 'Chinelo Vans Slide-on Checkboard 2',
            handle: 'Chinelo Slideon 2',
            product_type: 'Chinelo',
            variants: [
                {
                    id: 2021,
                    product_id: 202,
                    inventory_item_id: 2021,
                    image_id: 202,
                    sku: 'SLIDEON2019WHITE',
                    title: 'Chinelo Vans Slide-on Checkboard 2',
                    name: 'Chinelo Slideon 2',
                    weight: 0.28,
                    weight_unit: 'kg',
                    grams: 280,
                    vendor: 'Vans',
                    inventory_quantity: 0,
                    position: 1,
                    price: 99.99,
                    compare_at_price: '99.99',
                    color: 'Branco',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 202,
                    variant_ids: [2021],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 202,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 202,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 202,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Vans',
            body_html: 'Be a sport magician: Video.',
            tags: 'Vans, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Vans',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 203,
            title: 'Chinelo Vans Slide-on Checkboard 3',
            handle: 'Chinelo Slideon 3',
            product_type: 'Chinelo',
            variants: [
                {
                    id: 2031,
                    product_id: 203,
                    inventory_item_id: 2031,
                    image_id: 203,
                    sku: 'SLIDEON2019GREEN',
                    title: 'Chinelo Vans Slide-on Checkboard 3',
                    name: 'Chinelo Slideon 3',
                    weight: 0.28,
                    weight_unit: 'kg',
                    grams: 280,
                    vendor: 'Vans',
                    inventory_quantity: 0,
                    position: 1,
                    price: 149.99,
                    compare_at_price: '149.99',
                    color: 'Verde',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 203,
                    variant_ids: [2031],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 20,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 203,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 203,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Vans',
            body_html: 'Be a sport magician: Video.',
            tags: 'Vans, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Vans',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 204,
            title: 'Chinelo Vans Slide-on Checkboard 4',
            handle: 'Chinelo Slideon 4',
            product_type: 'Chinelo',
            variants: [
                {
                    id: 2041,
                    product_id: 204,
                    inventory_item_id: 2041,
                    image_id: 204,
                    sku: 'SLIDEON2019RED',
                    title: 'Chinelo Vans Slide-on Checkboard 4',
                    name: 'Chinelo Slideon 4',
                    weight: 0.28,
                    weight_unit: 'kg',
                    grams: 280,
                    vendor: 'Vans',
                    inventory_quantity: 0,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Vermelho',
                    material: 'Couro',
                    size: '42'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 204,
                    variant_ids: [2041],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 204,
                    name: 'color',
                    position: 1,
                    values: ['Preto', 'Branco', 'Azul']
                },
                {
                    product_id: 204,
                    name: 'material',
                    position: 2,
                    values: ['Couro', 'Nylon']
                },
                {
                    product_id: 204,
                    name: 'size',
                    position: 3,
                    values: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
                }
            ],
            vendor: 'Vans',
            body_html: 'Be a sport magician: Video.',
            tags: 'Vans, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Vans',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 301,
            title: 'Camiseta Kings Bronx 1',
            handle: 'Camiseta Kings Bronx 1',
            product_type: 'Camiseta',
            variants: [
                {
                    id: 3011,
                    product_id: 301,
                    inventory_item_id: 3011,
                    image_id: 301,
                    sku: 'KINGSBRONX3019BLACK',
                    title: 'Camiseta Kings Bronx 1',
                    name: 'Camiseta Kings Bronx 1',
                    weight: 0.22,
                    weight_unit: 'kg',
                    grams: 220,
                    vendor: 'Kings',
                    inventory_quantity: 10,
                    position: 1,
                    price: 49.99,
                    compare_at_price: '49.99',
                    color: 'Preto',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 301,
                    variant_ids: [3011],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 301,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 301,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 301,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Kings',
            body_html: 'Be a sport magician: Video.',
            tags: 'Kings, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Kings',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 302,
            title: 'Camiseta Kings Bronx 2',
            handle: 'Camiseta Kings Bronx 2',
            product_type: 'Camiseta',
            variants: [
                {
                    id: 3021,
                    product_id: 302,
                    inventory_item_id: 3021,
                    image_id: 302,
                    sku: 'KINGSBRONX3019WHITE',
                    title: 'Camiseta Kings Bronx 2',
                    name: 'Camiseta Kings Bronx 2',
                    weight: 0.22,
                    weight_unit: 'kg',
                    grams: 220,
                    vendor: 'Kings',
                    inventory_quantity: 10,
                    position: 1,
                    price: 99.99,
                    compare_at_price: '99.99',
                    color: 'Branco',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 302,
                    variant_ids: [3021],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 302,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 302,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 302,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Kings',
            body_html: 'Be a sport magician: Video.',
            tags: 'Kings, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Kings',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 303,
            title: 'Camiseta Kings Bronx 3',
            handle: 'Camiseta Kings Bronx 3',
            product_type: 'Camiseta',
            variants: [
                {
                    id: 3031,
                    product_id: 303,
                    inventory_item_id: 3031,
                    image_id: 303,
                    sku: 'KINGSBRONX3019GREEN',
                    title: 'Camiseta Kings Bronx 3',
                    name: 'Camiseta Kings Bronx 3',
                    weight: 0.22,
                    weight_unit: 'kg',
                    grams: 220,
                    vendor: 'Kings',
                    inventory_quantity: 10,
                    position: 1,
                    price: 149.99,
                    compare_at_price: '149.99',
                    color: 'Verde',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 303,
                    variant_ids: [3031],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 303,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 303,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 303,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Kings',
            body_html: 'Be a sport magician: Video.',
            tags: 'Kings, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Kings',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 304,
            title: 'Camiseta Kings Bronx 4',
            handle: 'Camiseta Kings Bronx 4',
            product_type: 'Camiseta',
            variants: [
                {
                    id: 3041,
                    product_id: 304,
                    inventory_item_id: 3041,
                    image_id: 304,
                    sku: 'KINGSBRONX3019RED',
                    title: 'Camiseta Kings Bronx 4',
                    name: 'Camiseta Kings Bronx 4',
                    weight: 0.22,
                    weight_unit: 'kg',
                    grams: 220,
                    vendor: 'Kings',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Vermelho',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 304,
                    variant_ids: [3041],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 304,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 304,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 304,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Kings',
            body_html: 'Be a sport magician: Video.',
            tags: 'Kings, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Kings',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 401,
            title: 'Moletom Nike Jordan Camuflado 1',
            handle: 'Moletom Nike Jordan Camuflado 1',
            product_type: 'Moletom',
            variants: [
                {
                    id: 4011,
                    product_id: 401,
                    inventory_item_id: 4011,
                    image_id: 401,
                    sku: 'MOLETONJORDAN3019BLACK',
                    title: 'Moletom Nike Jordan Camuflado 1',
                    name: 'Moletom Nike Jordan Camuflado 1',
                    weight: 0.3,
                    weight_unit: 'kg',
                    grams: 300,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 49.99,
                    compare_at_price: '49.99',
                    color: 'Preto',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 401,
                    variant_ids: [4011],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 401,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 401,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 401,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 402,
            title: 'Moletom Nike Jordan Camuflado 2',
            handle: 'Moletom Nike Jordan Camuflado 2',
            product_type: 'Moletom',
            variants: [
                {
                    id: 4021,
                    product_id: 402,
                    inventory_item_id: 4021,
                    image_id: 402,
                    sku: 'MOLETONJORDAN3019WHITE',
                    title: 'Moletom Nike Jordan Camuflado 2',
                    name: 'Moletom Nike Jordan Camuflado 2',
                    weight: 0.3,
                    weight_unit: 'kg',
                    grams: 300,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 99.99,
                    compare_at_price: '99.99',
                    color: 'Branco',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 402,
                    variant_ids: [4021],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 402,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 402,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 402,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 403,
            title: 'Moletom Nike Jordan Camuflado 3',
            handle: 'Moletom Nike Jordan Camuflado 3',
            product_type: 'Moletom',
            variants: [
                {
                    id: 4031,
                    product_id: 403,
                    inventory_item_id: 4031,
                    image_id: 403,
                    sku: 'MOLETONJORDAN3019GREEN',
                    title: 'Moletom Nike Jordan Camuflado 3',
                    name: 'Moletom Nike Jordan Camuflado 3',
                    weight: 0.3,
                    weight_unit: 'kg',
                    grams: 300,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 149.99,
                    compare_at_price: '149.99',
                    color: 'Verde',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 403,
                    variant_ids: [4031],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 403,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 403,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 403,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 404,
            title: 'Moletom Nike Jordan Camuflado 4',
            handle: 'Moletom Nike Jordan Camuflado 4',
            product_type: 'Moletom',
            variants: [
                {
                    id: 4041,
                    product_id: 404,
                    inventory_item_id: 4041,
                    image_id: 404,
                    sku: 'MOLETONJORDAN3019RED',
                    title: 'Moletom Nike Jordan Camuflado 4',
                    name: 'Moletom Nike Jordan Camuflado 4',
                    weight: 0.3,
                    weight_unit: 'kg',
                    grams: 300,
                    vendor: 'Nike',
                    inventory_quantity: 10,
                    position: 1,
                    price: 300.99,
                    compare_at_price: '300.99',
                    color: 'Vermelho',
                    material: 'Algodão',
                    size: 'M'
                }
            ],
            images: [
                {
                    id: 110,
                    position: '1',
                    product_id: 404,
                    variant_ids: [4041],
                    src:
                        'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                    width: '640',
                    height: '480'
                }
            ],
            options: [
                {
                    product_id: 404,
                    name: 'color',
                    position: 1,
                    values: ['Cinza', 'Preto', 'Verde', 'Vermelho', 'Azul', 'Branco']
                },
                {
                    product_id: 404,
                    name: 'material',
                    position: 2,
                    values: ['Algodão', 'Poliéster', 'Sintético']
                },
                {
                    product_id: 404,
                    name: 'size',
                    position: 3,
                    values: ['Único', 'P', 'M', 'G', 'GG', 'L', 'XL', 'XXL']
                }
            ],
            vendor: 'Nike',
            body_html: 'Be a sport magician: Video.',
            tags: 'Nike, Sport',
            template_suffix: 'special',
            metafields_global_title_tag: 'Nike',
            metafields_global_description_tag: 'Be a sport magician: Video.',
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        }
    ],
    productVariantSeedData: [
        {
            id: 1011,
            product_id: 101,
            inventory_item_id: 1011,
            image_id: 101,
            sku: 'THROWBACK3019BLACK',
            title: 'Tênis Nike Air Max 97 Throwback Future',
            name: 'Air Max 97 Throwback Future',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 49.99,
            compare_at_price: '49.99',
            color: 'Preto',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1021,
            product_id: 102,
            inventory_item_id: 1021,
            image_id: 102,
            sku: 'LEBRON163019WHITE',
            title: 'Tênis Nike Lebron 16',
            name: 'Lebron 16',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 99.99,
            compare_at_price: '99.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1022,
            product_id: 102,
            inventory_item_id: 1022,
            image_id: 102,
            sku: 'LEBRON163019WHITE',
            title: 'Tênis Nike Lebron 16 Low',
            name: 'Lebron 16 Low',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 149.99,
            compare_at_price: '149.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1031,
            product_id: 103,
            inventory_item_id: 1031,
            image_id: 103,
            sku: 'AIRJORDAN3019BLACK',
            title: 'Tênis Nike Air Jordan Proto React',
            name: 'Air Jordan Proto React',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 99.99,
            compare_at_price: '99.99',
            color: 'Preto',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1051,
            product_id: 105,
            inventory_item_id: 1051,
            image_id: 105,
            sku: 'LEBRON16LOW3019BLACK',
            title: 'Tênis Nike Kyrie 5',
            name: 'Kyrie 5',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 240.0,
            compare_at_price: '240.0',
            color: 'Preto',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1061,
            product_id: 106,
            inventory_item_id: 1061,
            image_id: 106,
            sku: 'STANSMITH3019WHITE',
            title: 'Tênis Adidas Stan Smith',
            name: 'Stan Smit',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Adidas',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1071,
            product_id: 107,
            inventory_item_id: 1071,
            image_id: 107,
            sku: 'SEELEY3019WHITE',
            title: 'Tênis Adidas Seeley',
            name: 'Seeley',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Adidas',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1081,
            product_id: 108,
            inventory_item_id: 1081,
            image_id: 108,
            sku: 'SEELEY3019WHITE',
            title: 'Tênis Adidas X_Plr',
            name: 'X_Plr',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Adidas',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1091,
            product_id: 109,
            inventory_item_id: 1091,
            image_id: 109,
            sku: 'PROPHERE3019WHITE',
            title: 'Tênis Adidas Prophere',
            name: 'Prophere',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Adidas',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 1101,
            product_id: 110,
            inventory_item_id: 1101,
            image_id: 110,
            sku: 'DEERUPTRUNNER3019BLACK',
            title: 'Tênis Adidas Deerupt Runner',
            name: 'Deerupt Runner',
            weight: 0.567,
            weight_unit: 'kg',
            grams: 567,
            vendor: 'Adidas',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Preto',
            material: 'Couro',
            size: '42'
        },
        {
            id: 2011,
            product_id: 201,
            inventory_item_id: 2011,
            image_id: 201,
            sku: 'SLIDEON2019BLACK',
            title: 'Chinelo Vans Slide-on Checkboard 1',
            name: 'Chinelo Slideon 1',
            weight: 0.28,
            weight_unit: 'kg',
            grams: 280,
            vendor: 'Vans',
            inventory_quantity: 10,
            position: 1,
            price: 49.99,
            compare_at_price: '49.99',
            color: 'Preto',
            material: 'Couro',
            size: '42'
        },
        {
            id: 2021,
            product_id: 202,
            inventory_item_id: 2021,
            image_id: 202,
            sku: 'SLIDEON2019WHITE',
            title: 'Chinelo Vans Slide-on Checkboard 2',
            name: 'Chinelo Slideon 2',
            weight: 0.28,
            weight_unit: 'kg',
            grams: 280,
            vendor: 'Vans',
            inventory_quantity: 10,
            position: 1,
            price: 99.99,
            compare_at_price: '99.99',
            color: 'Branco',
            material: 'Couro',
            size: '42'
        },
        {
            id: 2031,
            product_id: 203,
            inventory_item_id: 2031,
            image_id: 203,
            sku: 'SLIDEON2019GREEN',
            title: 'Chinelo Vans Slide-on Checkboard 3',
            name: 'Chinelo Slideon 3',
            weight: 0.28,
            weight_unit: 'kg',
            grams: 280,
            vendor: 'Vans',
            inventory_quantity: 10,
            position: 1,
            price: 149.99,
            compare_at_price: '149.99',
            color: 'Verde',
            material: 'Couro',
            size: '42'
        },
        {
            id: 2041,
            product_id: 204,
            inventory_item_id: 2041,
            image_id: 204,
            sku: 'SLIDEON2019RED',
            title: 'Chinelo Vans Slide-on Checkboard 4',
            name: 'Chinelo Slideon 4',
            weight: 0.28,
            weight_unit: 'kg',
            grams: 280,
            vendor: 'Vans',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Vermelho',
            material: 'Couro',
            size: '42'
        },
        {
            id: 3011,
            product_id: 301,
            inventory_item_id: 3011,
            image_id: 301,
            sku: 'KINGSBRONX3019BLACK',
            title: 'Camiseta Kings Bronx 1',
            name: 'Camiseta Kings Bronx 1',
            weight: 0.22,
            weight_unit: 'kg',
            grams: 220,
            vendor: 'Kings',
            inventory_quantity: 10,
            position: 1,
            price: 49.99,
            compare_at_price: '49.99',
            color: 'Preto',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 3021,
            product_id: 302,
            inventory_item_id: 3021,
            image_id: 302,
            sku: 'KINGSBRONX3019WHITE',
            title: 'Camiseta Kings Bronx 2',
            name: 'Camiseta Kings Bronx 2',
            weight: 0.22,
            weight_unit: 'kg',
            grams: 220,
            vendor: 'Kings',
            inventory_quantity: 10,
            position: 1,
            price: 99.99,
            compare_at_price: '99.99',
            color: 'Branco',
            material: 'Algodao',
            size: 'M'
        },
        {
            id: 3031,
            product_id: 303,
            inventory_item_id: 3031,
            image_id: 303,
            sku: 'KINGSBRONX3019GREEN',
            title: 'Camiseta Kings Bronx 3',
            name: 'Camiseta Kings Bronx 3',
            weight: 0.22,
            weight_unit: 'kg',
            grams: 220,
            vendor: 'Kings',
            inventory_quantity: 10,
            position: 1,
            price: 149.99,
            compare_at_price: '149.99',
            color: 'Verde',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 3041,
            product_id: 304,
            inventory_item_id: 3041,
            image_id: 304,
            sku: 'KINGSBRONX3019RED',
            title: 'Camiseta Kings Bronx 4',
            name: 'Camiseta Kings Bronx 4',
            weight: 0.22,
            weight_unit: 'kg',
            grams: 220,
            vendor: 'Kings',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Vermelho',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 4011,
            product_id: 401,
            inventory_item_id: 4011,
            image_id: 401,
            sku: 'MOLETONJORDAN3019BLACK',
            title: 'Moletom Nike Jordan Camuflado 1',
            name: 'Moletom Nike Jordan Camuflado 1',
            weight: 0.3,
            weight_unit: 'kg',
            grams: 300,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 49.99,
            compare_at_price: '49.99',
            color: 'Preto',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 4021,
            product_id: 402,
            inventory_item_id: 4021,
            image_id: 402,
            sku: 'MOLETONJORDAN3019WHITE',
            title: 'Moletom Nike Jordan Camuflado 2',
            name: 'Moletom Nike Jordan Camuflado 2',
            weight: 0.3,
            weight_unit: 'kg',
            grams: 300,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 99.99,
            compare_at_price: '99.99',
            color: 'Branco',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 4031,
            product_id: 403,
            inventory_item_id: 4031,
            image_id: 403,
            sku: 'MOLETONJORDAN3019GREEN',
            title: 'Moletom Nike Jordan Camuflado 3',
            name: 'Moletom Nike Jordan Camuflado 3',
            weight: 0.3,
            weight_unit: 'kg',
            grams: 300,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 149.99,
            compare_at_price: '149.99',
            color: 'Verde',
            material: 'Algodão',
            size: 'M'
        },
        {
            id: 4041,
            product_id: 404,
            inventory_item_id: 4041,
            image_id: 404,
            sku: 'MOLETONJORDAN3019RED',
            title: 'Moletom Nike Jordan Camuflado 4',
            name: 'Moletom Nike Jordan Camuflado 4',
            weight: 0.3,
            weight_unit: 'kg',
            grams: 300,
            vendor: 'Nike',
            inventory_quantity: 10,
            position: 1,
            price: 300.99,
            compare_at_price: '300.99',
            color: 'Vermelho',
            material: 'Algodão',
            size: 'M'
        }
    ],
    productVariantIndicatorSeedData: [
        {
            product_id: 101,
            variant_id: 1011,
            title: 'Tênis Nike Air Max 97 Throwback Future',
            handle: 'Air Max 97 Throwback Future',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 101,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'THROWBACK3019BLACK',
            price: 49.99,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 1011,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 10,
            sales_potential_avg: 5,
            sales_volume: 20,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 102,
            variant_id: 1021,
            title: 'Tênis Nike Lebron 16',
            handle: 'Lebron 16',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 102,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'LEBRON163019WHITE',
            price: 99.99,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 1021,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 10,
            sales_potential_avg: 5,
            sales_volume: 21,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 102,
            variant_id: 1022,
            title: 'Tênis Nike Lebron 16 Low',
            handle: 'Lebron 16 Low',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 102,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'LEBRON16LOW3019BLACK',
            price: 149.99,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 1022,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 9,
            sales_potential_avg: 5,
            sales_volume: 20,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 103,
            variant_id: 1031,
            title: 'Tênis Nike Air Jordan Proto React',
            handle: 'Air Jordan Proto React',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 103,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'AIRJORDAN3019BLACK',
            price: 99.99,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 1031,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 9,
            sales_potential_avg: 5,
            sales_volume: 21,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 105,
            variant_id: 1051,
            title: 'Tênis Nike Kyrie 5',
            handle: 'Kyrie 5',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 105,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'LEBRON16LOW3019BLACK',
            price: 240.0,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Nike',
            inventory_item_id: 1051,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 8,
            sales_potential_avg: 5,
            sales_volume: 30,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 106,
            variant_id: 1061,
            title: 'Tênis Adidas Stan Smith',
            handle: 'Stan Smith',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 106,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'STANSMITH3019WHITE',
            price: 300.99,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 61,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 8,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 107,
            variant_id: 1071,
            title: 'Tênis Adidas Seeley',
            handle: 'Seeley',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 107,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'SEELEY3019WHITE',
            price: 300.99,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            inventory_item_id: 71,
            vendor: 'Adidas',
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 7,
            sales_potential_avg: 5,
            sales_volume: 50,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 108,
            variant_id: 1081,
            title: 'Tênis Adidas X_Plr',
            handle: 'X_Plr',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 108,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'X_PLR3019BLUE',
            price: 300.99,
            size: '40',
            color: 'Azul',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 1081,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 7,
            sales_potential_avg: 5,
            sales_volume: 20,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 109,
            variant_id: 1091,
            title: 'Tênis Adidas Prophere',
            handle: 'Prophere',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 109,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'PROPHERE3019WHITE',
            price: 300.99,
            size: '40',
            color: 'Branco',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 1091,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 18,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 110,
            variant_id: 1101,
            title: 'Tênis Adidas Deerupt Runner',
            handle: 'Deerupt Runner',
            product_type_id: 2,
            product_type_title: 'Tênis',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 110,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
            sku: 'DEERUPTRUNNER3019BLACK',
            price: 300.99,
            size: '40',
            color: 'Preto',
            material: 'Couro',
            vendor: 'Adidas',
            inventory_item_id: 1101,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 120,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 201,
            variant_id: 2011,
            title: 'Chinelo Vans Slide-on Checkboard 1',
            handle: 'Chinelo Slideon 1',
            product_type_id: 9,
            product_type_title: 'Chinelo',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 201,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            sku: 'SLIDEON2019BLACK',
            price: 49.99,
            size: '40',
            color: 'Preto',
            material: 'Têxtil',
            vendor: 'Vans',
            inventory_item_id: 2011,
            inventory_quantity: 0,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 10,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 202,
            variant_id: 2021,
            title: 'Chinelo Vans Slide-on Checkboard 2',
            handle: 'Chinelo Slideon 2',
            product_type_id: 9,
            product_type_title: 'Chinelo',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 202,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            sku: 'SLIDEON2019WHITE',
            price: 99.99,
            size: '40',
            color: 'Branco',
            material: 'Têxtil',
            vendor: 'Vans',
            inventory_item_id: 2021,
            inventory_quantity: 0,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 9,
            sales_potential_avg: 5,
            sales_volume: 20,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 203,
            variant_id: 2031,
            title: 'Chinelo Vans Slide-on Checkboard 3',
            handle: 'Chinelo Slideon 3',
            product_type_id: 9,
            product_type_title: 'Chinelo',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 203,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            sku: 'SLIDEON2019GREEN',
            price: 149.99,
            size: '40',
            color: 'Verde',
            material: 'Têxtil',
            vendor: 'Vans',
            inventory_item_id: 2031,
            inventory_quantity: 0,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 5,
            sales_potential_avg: 5,
            sales_volume: 15,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 204,
            variant_id: 2041,
            title: 'Chinelo Vans Slide-on Checkboard 4',
            handle: 'Chinelo Slideon 4',
            product_type_id: 9,
            product_type_title: 'Chinelo',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 204,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/chinelo_vans_slide-on_checkerboard_preto_250x_crop_center.jpg?v=1560455189',
            sku: 'SLIDEON2019RED',
            price: 300.99,
            size: '40',
            color: 'Vermelho',
            material: 'Têxtil',
            vendor: 'Vans',
            inventory_item_id: 2041,
            inventory_quantity: 0,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 5,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 2000,
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
            product_id: 301,
            variant_id: 3011,
            title: 'Camiseta Kings Bronx 1',
            handle: 'Camiseta Kings Bronx 1',
            product_type_id: 4,
            product_type_title: 'Camiseta',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 301,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            sku: 'KINGSBRONX3019BLACK',
            price: 49.99,
            size: 'M',
            color: 'Preto',
            material: 'Malha',
            vendor: 'Kings',
            inventory_item_id: 3011,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 10,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 302,
            variant_id: 3021,
            title: 'Camiseta Kings Bronx 2',
            handle: 'Camiseta Kings Bronx 2',
            product_type_id: 4,
            product_type_title: 'Camiseta',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 302,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            sku: 'KINGSBRONX3019WHITE',
            price: 99.99,
            size: 'M',
            color: 'Branco',
            material: 'Malha',
            vendor: 'Kings',
            inventory_item_id: 3021,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 9,
            sales_potential_avg: 5,
            sales_volume: 30,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 303,
            variant_id: 3031,
            title: 'Camiseta Kings Bronx 3',
            handle: 'Camiseta Kings Bronx 3',
            product_type_id: 4,
            product_type_title: 'Camiseta',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 303,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            sku: 'KINGSBRONX3019GREEN',
            price: 149.99,
            size: 'M',
            color: 'Verde',
            material: 'Malha',
            vendor: 'Kings',
            inventory_item_id: 3031,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 20,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 304,
            variant_id: 3041,
            title: 'Camiseta Kings Bronx 4',
            handle: 'Camiseta Kings Bronx 4',
            product_type_id: 4,
            product_type_title: 'Camiseta',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 304,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/camseta_kings_bronx_cinza_masculina_3_150x150.jpg?v=1560454833',
            sku: 'KINGSBRONX3019RED',
            price: 300.99,
            size: 'M',
            color: 'Vermelho',
            material: 'Malha',
            vendor: 'Kings',
            inventory_item_id: 3041,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 8,
            sales_potential_avg: 5,
            sales_volume: 7,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 401,
            variant_id: 4011,
            title: 'Moletom Nike Jordan Camuflado 1',
            handle: 'Moletom Nike Jordan Camuflado 1',
            product_type_id: 6,
            product_type_title: 'Moletom',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 401,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            sku: 'MOLETONJORDAN3019BLACK',
            price: 49.99,
            size: 'M',
            color: 'Preto',
            material: '100% Algodão',
            vendor: 'Nike',
            inventory_item_id: 4011,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 7,
            sales_potential_avg: 5,
            sales_volume: 30,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 402,
            variant_id: 4021,
            title: 'Moletom Nike Jordan Camuflado 2',
            handle: 'Moletom Nike Jordan Camuflado 2',
            product_type_id: 6,
            product_type_title: 'Moletom',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 402,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            sku: 'MOLETONJORDAN3019WHITE',
            price: 99.99,
            size: 'M',
            color: 'Branco',
            material: '100% Algodão',
            vendor: 'Nike',
            inventory_item_id: 4021,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 10,
            sales_potential_avg: 5,
            sales_volume: 10,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 403,
            variant_id: 4031,
            title: 'Moletom Nike Jordan Camuflado 3',
            handle: 'Moletom Nike Jordan Camuflado 3',
            product_type_id: 6,
            product_type_title: 'Moletom',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 403,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            sku: 'MOLETONJORDAN3019GREEN',
            price: 149.99,
            size: 'M',
            color: 'Verde',
            material: '100% Algodão',
            vendor: 'Nike',
            inventory_item_id: 4031,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 6,
            sales_potential_avg: 5,
            sales_volume: 50,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
            product_id: 404,
            variant_id: 4041,
            title: 'Moletom Nike Jordan Camuflado 4',
            handle: 'Moletom Nike Jordan Camuflado 4',
            product_type_id: 6,
            product_type_title: 'Moletom',
            collection_id: 434521,
            collection_title: 'Masculino',
            image_id: 404,
            image_src:
                'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/moletom_nike_jordan_camuflado_verde_masculino_1_600x_crop_center.jpg?v=1560457697',
            sku: 'MOLETONJORDAN3019RED',
            price: 300.99,
            size: 'M',
            color: 'Vermelho',
            material: '100% Algodão',
            vendor: 'Nike',
            inventory_item_id: 4041,
            inventory_quantity: 10,
            inventory_cost: '10.00',
            inventory_optimal: '100',
            sales_potential: 9,
            sales_potential_avg: 5,
            sales_volume: 80,
            sales_volume_avg: 9,
            sales_volume_optimal: 9,
            sales_value: 3000,
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
    inventoryItemSeedData: [
        {
            id: 1011,
            sku: 'THROWBACK3019BLACK',
            cost: 49.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1021,
            sku: 'LEBRON163019WHITE',
            cost: 99.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1022,
            sku: 'LEBRON163019WHITE',
            cost: 149.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1031,
            sku: 'AIRJORDAN3019BLACK',
            cost: 99.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1051,
            sku: 'LEBRON16LOW3019BLACK',
            cost: 240.0,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1061,
            sku: 'STANSMITH3019WHITE',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1071,
            sku: 'SEELEY3019WHITE',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1081,
            sku: 'SEELEY3019WHITE',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1091,
            sku: 'PROPHERE3019WHITE',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 1101,
            sku: 'DEERUPTRUNNER3019BLACK',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 2011,
            sku: 'SLIDEON2019BLACK',
            cost: 49.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 2021,
            sku: 'SLIDEON2019WHITE',
            cost: 99.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 2031,
            sku: 'SLIDEON2019GREEN',
            cost: 149.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 2041,
            sku: 'SLIDEON2019RED',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 3011,
            sku: 'KINGSBRONX3019BLACK',
            cost: 49.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 3021,
            sku: 'KINGSBRONX3019WHITE',
            cost: 99.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 3031,
            sku: 'KINGSBRONX3019GREEN',
            cost: 149.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 3041,
            sku: 'KINGSBRONX3019RED',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 4021,
            sku: 'MOLETONJORDAN3019WHITE',
            cost: 99.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 4031,
            sku: 'MOLETONJORDAN3019GREEN',
            cost: 149.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        },
        {
            id: 4041,
            sku: 'MOLETONJORDAN3019RED',
            cost: 300.99,
            tracked: true,
            requires_shipping: true,
            country_code_of_origin: 'BR',
            province_code_of_origin: 'SP',
            country_harmonized_system_codes: []
        }
    ],
    inventoryLevelSeedData: [
        {
            inventory_item_id: 1011,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1021,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1022,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1031,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1051,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1061,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1071,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1081,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1091,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 1101,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 2011,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 2021,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 2031,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 2041,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 3011,
            location_id: 1,
            available: 20
        },
        {
            inventory_item_id: 3011,
            location_id: 2,
            available: 30
        },
        {
            inventory_item_id: 3021,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 3031,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 3041,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 4021,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 4031,
            location_id: 1,
            available: 5
        },
        {
            inventory_item_id: 4041,
            location_id: 1,
            available: 5
        }
    ],
    locationSeedData: [
        {
            id: 1,
            name: 'Depósito Mooca',
            address1: 'Rua dos Trilhos, 23',
            address2: 'Casa 2',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'BR',
            country_code: 'BR',
            zip: '12345-000',
            phone: '91234-1234',
            active: true,
            legacy: false
        },
        {
            id: 2,
            name: 'Depósito Butantã',
            address1: 'Rodovia Raposo Tavres, 6356',
            address2: 'Unidade III',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'BR',
            country_code: 'BR',
            zip: '12345-000',
            phone: '91234-1234',
            active: true,
            legacy: false
        }
    ],
    brandSeedData: [
        {
            id: 1,
            title: 'Adidas'
        },
        {
            id: 2,
            title: 'Alife'
        },
        {
            id: 3,
            title: 'Asics'
        },
        {
            id: 4,
            title: 'Champion'
        },
        {
            id: 5,
            title: 'DGK'
        },
        {
            id: 6,
            title: 'Diamond Supply Co.'
        },
        {
            id: 7,
            title: 'Ecko'
        },
        {
            id: 8,
            title: 'Fila'
        },
        {
            id: 9,
            title: 'Grizzly'
        },
        {
            id: 10,
            title: 'Kings Sneakers'
        },
        {
            id: 11,
            title: 'Mitchell & Ness'
        },
        {
            id: 12,
            title: 'NBA'
        },
        {
            id: 13,
            title: 'New Era'
        },
        {
            id: 14,
            title: 'Nike'
        },
        {
            id: 15,
            title: 'Other Culture'
        },
        {
            id: 16,
            title: 'Red Bull'
        },
        {
            id: 17,
            title: 'Rook'
        },
        {
            id: 18,
            title: 'Seven'
        },
        {
            id: 19,
            title: 'Starter'
        },
        {
            id: 20,
            title: 'Vans'
        },
        {
            id: 21,
            title: 'Vextor'
        },
        {
            id: 22,
            title: 'Blck'
        },
        {
            id: 23,
            title: 'Gold'
        }
    ],
    colorSeedData: [
        {
            id: 1,
            title: 'Vermelho'
        },
        {
            id: 2,
            title: 'Cinza'
        },
        {
            id: 3,
            title: 'Preto'
        },
        {
            id: 4,
            title: 'Onça'
        },
        {
            id: 5,
            title: 'Verde'
        },
        {
            id: 6,
            title: 'Azul'
        },
        {
            id: 7,
            title: 'Marrom'
        },
        {
            id: 8,
            title: 'Branco'
        },
        {
            id: 9,
            title: 'Bordô'
        },
        {
            id: 10,
            title: 'Bege'
        },
        {
            id: 11,
            title: 'Amarelo'
        },
        {
            id: 12,
            title: 'Rosa'
        },
        {
            id: 13,
            title: 'Multicolorido'
        },
        {
            id: 14,
            title: 'Roxo'
        }
    ],
    genreSeedData: [
        {
            id: 1,
            title: 'Masculino'
        },
        {
            id: 2,
            title: 'Feminino'
        },
        {
            id: 3,
            title: 'Unissex'
        }
    ],
    materialSeedData: [
        {
            id: 1,
            title: 'Algodão'
        },
        {
            id: 2,
            title: 'Couro'
        },
        {
            id: 3,
            title: 'Nylon'
        },
        {
            id: 4,
            title: 'Poliéster'
        },
        {
            id: 5,
            title: 'Sintético'
        }
    ],
    sizeSeedData: [
        {
            id: 1,
            title: 'Único'
        },
        {
            id: 2,
            title: 'P'
        },
        {
            id: 3,
            title: 'M'
        },
        {
            id: 4,
            title: 'G'
        },
        {
            id: 5,
            title: 'GG'
        },
        {
            id: 6,
            title: 'L'
        },
        {
            id: 7,
            title: 'XL'
        },
        {
            id: 8,
            title: 'XXL'
        },
        {
            id: 9,
            title: '33'
        },
        {
            id: 10,
            title: '34'
        },
        {
            id: 11,
            title: '35'
        },
        {
            id: 12,
            title: '36'
        },
        {
            id: 13,
            title: '37'
        },
        {
            id: 14,
            title: '38'
        },
        {
            id: 15,
            title: '39'
        },
        {
            id: 16,
            title: '40'
        },
        {
            id: 17,
            title: '41'
        },
        {
            id: 18,
            title: '42'
        },
        {
            id: 19,
            title: '43'
        },
        {
            id: 20,
            title: '44'
        }
    ],
    sleeveSeedData: [
        {
            id: 1,
            title: 'Curta'
        },
        {
            id: 2,
            title: 'Longa'
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
            id: 20,
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
    customCollectionSeedData: [
        {
            id: 434521,
            title: 'Masculino',
            handle: 'masculino',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Masculino',
                width: '640',
                height: '480',
                created_at: new Date('2019-06-01 00:00:00.000').toISOString()
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Masculino</p>',
            sort_order: 'manual',
            published: true,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 434522,
            title: 'Feminino',
            handle: 'feminino',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Feminino',
                width: '640',
                height: '480',
                created_at: new Date('2019-06-01 00:00:00.000').toISOString()
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Feminino</p>',
            sort_order: 'manual',
            published: true,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 434523,
            title: 'Juvenil',
            handle: 'juvenil',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Juvenil',
                width: '640',
                height: '480',
                created_at: new Date('2019-06-01 00:00:00.000').toISOString()
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Juvenil</p>',
            sort_order: 'manual',
            published: true,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        }
    ],
    smartCollectionSeedData: [
        {
            id: 434524,
            title: 'Smart-Masculino',
            handle: 'smart-masculino',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Smart-Masculino'
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Smart-Masculino</p>',
            rules: {
                column: 'variant_price',
                relation: 'less_than',
                condition: '20'
            },
            disjunctive: false,
            sort_order: 'manual',
            products_manually_sorted_count: 5,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 434525,
            title: 'Smart-Feminino',
            handle: 'smart-feminino',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Smart-Feminino'
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Smart-Feminino</p>',
            rules: {
                column: 'variant_price',
                relation: 'less_than',
                condition: '20'
            },
            disjunctive: false,
            sort_order: 'manual',
            products_manually_sorted_count: 5,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        },
        {
            id: 434526,
            title: 'Smart-Juvenil',
            handle: 'smart-juvenil',
            image: {
                src:
                    'https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_adidas_n-5923_p_reto_masculino_3__1_3e1dd2e7-37cb-4737-b0f9-e2dd4c482e40_200x200@2x.jpg?v=1558342663',
                alt: 'Smart-Juvenil'
            },
            template_suffix: 'custom',
            body_html: '<p>Dividão Smart-Juvenil</p>',
            rules: {
                column: 'variant_price',
                relation: 'less_than',
                condition: '20'
            },
            disjunctive: false,
            sort_order: 'manual',
            products_manually_sorted_count: 5,
            published_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            published_scope: 'global'
        }
    ],
    collectSeedData: [
        {
            id: 1,
            product_id: 101,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 2,
            product_id: 102,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 3,
            product_id: 103,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 5,
            product_id: 105,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 6,
            product_id: 106,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 7,
            product_id: 107,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 8,
            product_id: 108,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 9,
            product_id: 109,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 10,
            product_id: 110,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 11,
            product_id: 201,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 12,
            product_id: 202,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 13,
            product_id: 203,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 14,
            product_id: 204,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 15,
            product_id: 301,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 16,
            product_id: 302,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 17,
            product_id: 303,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 18,
            product_id: 304,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 19,
            product_id: 401,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 20,
            product_id: 402,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 21,
            product_id: 403,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
        },
        {
            id: 22,
            product_id: 404,
            collection_id: 434521,
            featured: false,
            position: 1,
            sort_value: '0000000001'
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
            id: 1,
            start_at: 0,
            end_at: 50
        },
        {
            id: 2,
            start_at: 51,
            end_at: 200
        },
        {
            id: 3,
            start_at: 201,
            end_at: 150
        },
        {
            id: 4,
            start_at: 150,
            end_at: parseInt(CONSTANT.PRICE.MAX_RANGE.VALUE)
        }
    ],
    coverageSeedData: [
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 1,
            product_type_title: 'Boné',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 2,
            product_type_title: 'Tênis',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 4,
            product_type_title: 'Camiseta',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 5,
            product_type_title: 'Regata',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 6,
            product_type_title: 'Moletom',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 7,
            product_type_title: 'Bermuda',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 8,
            product_type_title: 'Shorts',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 9,
            product_type_title: 'Chinelo',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 20,
            product_type_title: 'Meia',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 11,
            product_type_title: 'Calça',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 12,
            product_type_title: 'Bolsa',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 13,
            product_type_title: 'Jaqueta e Casaco',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 14,
            product_type_title: 'Pochete',
            coverage_min: 0,
            coverage_optimal: 0
        },
        {
            collection_id: 434521,
            collection_title: 'Masculino',
            product_type_id: 15,
            product_type_title: 'Mochila',
            coverage_min: 0,
            coverage_optimal: 0
        }
    ],
    calculationSeedData: {
        days_of_calculation: {
            title: 'Intervalo de cálculo',
            start_date: new Date('2019-07-01 00:00:00.000').toISOString(),
            end_date: new Date('2019-07-30 00:00:00.000').toISOString(),
            number_of_days: 30
        },
        date_of_calculation: {
            title: 'Data do cálculo',
            at_date: new Date('2019-07-01 00:00:00.000').toISOString()
        }
    },
    customerSeedData: [
        {
            id: 1,
            first_name: 'Armando',
            last_name: 'Volta Júnior',
            email: 'armando@hostmail.com',
            phone: '+551195555-5555',
            default_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            addresses: {},
            last_order_id: 1000,
            last_order_name: '#1000',
            orders_count: '2',
            total_spent: '0.00',
            note: 'Fez um pedido que disparou aviso de fraude',
            currency: 'BRL',
            marketing_opt_in_level: 'single_opt_in',
            accepts_marketing: false,
            accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            state: 'enabled',
            verified_email: true,
            multipass_identifier: null,
            tax_exempt: false,
            tax_exemptions: {},
            tags: 'fiel'
        },
        {
            id: 2,
            first_name: 'Pedro',
            last_name: 'Mar Motta',
            email: 'pedro@hostmail.com',
            phone: '+551195555-5555',
            default_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            addresses: {},
            last_order_id: 2000,
            last_order_name: '#2000',
            orders_count: '3',
            total_spent: '0.00',
            note: 'Fez um pedido que disparou aviso de fraude',
            currency: 'BRL',
            marketing_opt_in_level: 'single_opt_in',
            accepts_marketing: false,
            accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
            state: 'enabled',
            verified_email: true,
            multipass_identifier: null,
            tax_exempt: false,
            tax_exemptions: {},
            tags: 'fiel'
        }
    ],
    customerAddressSeedData: [
        {
            id: 1,
            customer_id: 1,
            address1: 'Rua do centro, 23',
            address2: 'Casa 01',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'Brasil',
            country_code: 'BR',
            zip: '12345-000',
            latitude: '45.41634',
            longitude: '-75.6868',
            company: 'Kuantic',
            name: 'Armando Volta Júnior',
            first_name: 'Armando',
            last_name: 'Volta Júnior',
            phone: '+551195555-5555',
            default: true
        },
        {
            id: 2,
            customer_id: 1,
            address1: 'Rua do centro alternativo, 23',
            address2: 'Casa A01',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'Brasil',
            country_code: 'BR',
            zip: '12345-000',
            latitude: '45.41634',
            longitude: '-75.6868',
            company: 'Kuantic',
            name: 'Armando Volta Júnior',
            first_name: 'Armando',
            last_name: 'Volta Júnior',
            phone: '+551195555-5555',
            default: false
        },
        {
            id: 3,
            customer_id: 2,
            address1: 'Rua da periferia, 1000',
            address2: 'Casa Fundos',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'Brasil',
            country_code: 'BR',
            zip: '12345-000',
            latitude: '45.41634',
            longitude: '-75.6868',
            company: 'Kuantic',
            name: 'Pedro Mar Motta',
            first_name: 'Pedro',
            last_name: 'Mar Motta',
            phone: '+551195555-5555',
            default: true
        },
        {
            id: 4,
            customer_id: 2,
            address1: 'Rua da periferia alternativa, 1000',
            address2: 'Casa Fundos A',
            city: 'São Paulo',
            province: 'São Paulo',
            province_code: 'SP',
            country: 'Brasil',
            country_code: 'BR',
            zip: '12345-000',
            latitude: '45.41634',
            longitude: '-75.6868',
            company: 'Kuantic',
            name: 'Pedro Mar Motta',
            first_name: 'Pedro',
            last_name: 'Mar Motta',
            phone: '+551195555-5555',
            default: false
        }
    ],
    orderSeedData: [
        {
            id: 1001,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-15 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 1,
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                email: 'armando@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua do centro, 23',
                    address2: 'Casa 01',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Armando Volta Júnior',
                    first_name: 'Armando',
                    last_name: 'Volta Júnior',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 1000,
                last_order_name: '#1000',
                orders_count: '2',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#1001',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 1001,
            order_number: 1001,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-15 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 49.99,
            subtotal_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '49.99',
            total_line_items_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_price: '54.98',
            total_price_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tax: '4.99',
            total_tax_set: {
                shop_money: {
                    amount: '4.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '4.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 567,
            user_id: 1
        },
        {
            id: 1002,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-15 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 1,
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                email: 'armando@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua do centro, 23',
                    address2: 'Casa 01',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Armando Volta Júnior',
                    first_name: 'Armando',
                    last_name: 'Volta Júnior',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 1001,
                last_order_name: '#1001',
                orders_count: '2',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 201,
                    title: 'Chinelo Vans Slide-on Checkboard 1',
                    variant_id: 2011,
                    variant_title: 'Chinelo Vans Slide-on Checkboard 1',
                    name: 'Chinelo Vans Slide-on Checkboard 1',
                    sku: 'SLIDEON2019BLACK',
                    vendor: 'Vans',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 280,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#1002',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 1002,
            order_number: 1002,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-15 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 3368,
            user_id: 1
        },
        {
            id: 2001,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-20 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 2000,
                last_order_name: '#2000',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#2001',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 2001,
            order_number: 2001,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-20 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 49.99,
            subtotal_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '49.99',
            total_line_items_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_price: '54.98',
            total_price_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tax: '4.99',
            total_tax_set: {
                shop_money: {
                    amount: '4.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '4.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 567,
            user_id: 1
        },
        {
            id: 2002,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-20 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 2001,
                last_order_name: '#2001',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 201,
                    title: 'Chinelo Vans Slide-on Checkboard 1',
                    variant_id: 2011,
                    variant_title: 'Chinelo Vans Slide-on Checkboard 1',
                    name: 'Chinelo Vans Slide-on Checkboard 1',
                    sku: 'SLIDEON2019BLACK',
                    vendor: 'Vans',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 280,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#2002',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 2002,
            order_number: 2002,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-20 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 3368,
            user_id: 1
        },
        {
            id: 2003,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-23 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 2002,
                last_order_name: '#2002',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 301,
                    title: 'Camiseta Kings Bronx 1',
                    variant_id: 3011,
                    variant_title: 'Camiseta Kings Bronx 1',
                    name: 'Camiseta Kings Bronx 1',
                    sku: 'KINGSBRONX3019BLACK',
                    vendor: 'Kings',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 220,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#2003',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 2003,
            order_number: 2003,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-23 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 2767,
            user_id: 1
        },
        {
            id: 2004,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-07-23 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 2003,
                last_order_name: '#2003',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 301,
                    title: 'Camiseta Kings Bronx 1',
                    variant_id: 3011,
                    variant_title: 'Camiseta Kings Bronx 1',
                    name: 'Camiseta Kings Bronx 1',
                    sku: 'KINGSBRONX3019BLACK',
                    vendor: 'Kings',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 220,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    product_id: 401,
                    title: 'Moletom Nike Jordan Camuflado 1',
                    variant_id: 4011,
                    variant_title: 'Moletom Nike Jordan Camuflado 1',
                    name: 'Moletom Nike Jordan Camuflado 1',
                    sku: 'MOLETONJORDAN3019BLACK',
                    vendor: 'Nike',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 300,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#2004',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 2004,
            order_number: 2004,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-07-23 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 1049.97,
            subtotal_price_set: {
                shop_money: {
                    amount: '1049.97',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1049.97',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '1049.97',
            total_line_items_price_set: {
                shop_money: {
                    amount: '1049.97',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1049.97',
                    currency_code: 'USD'
                }
            },
            total_price: '1154.96',
            total_price_set: {
                shop_money: {
                    amount: '1154.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1154.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '104.99',
            total_tax_set: {
                shop_money: {
                    amount: '104.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '104.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 2767,
            user_id: 1
        },

        {
            id: 10011,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-01 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 1,
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                email: 'armando@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua do centro, 23',
                    address2: 'Casa 01',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Armando Volta Júnior',
                    first_name: 'Armando',
                    last_name: 'Volta Júnior',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 10000,
                last_order_name: '#10000',
                orders_count: '2',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#10011',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 10011,
            order_number: 10011,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-01 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 49.99,
            subtotal_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '49.99',
            total_line_items_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_price: '54.98',
            total_price_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tax: '4.99',
            total_tax_set: {
                shop_money: {
                    amount: '4.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '4.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 567,
            user_id: 1
        },
        {
            id: 10021,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-01 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 1,
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                email: 'armando@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua do centro, 23',
                    address2: 'Casa 01',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Armando Volta Júnior',
                    first_name: 'Armando',
                    last_name: 'Volta Júnior',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 10011,
                last_order_name: '#10011',
                orders_count: '2',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 201,
                    title: 'Chinelo Vans Slide-on Checkboard 1',
                    variant_id: 2011,
                    variant_title: 'Chinelo Vans Slide-on Checkboard 1',
                    name: 'Chinelo Vans Slide-on Checkboard 1',
                    sku: 'SLIDEON2019BLACK',
                    vendor: 'Vans',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 280,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#10021',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 10021,
            order_number: 10021,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-01 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 3368,
            user_id: 1
        },
        {
            id: 20011,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-02 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 20000,
                last_order_name: '#20000',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#20011',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 20011,
            order_number: 20011,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-02 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 49.99,
            subtotal_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '49.99',
            total_line_items_price_set: {
                shop_money: {
                    amount: '49.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '49.99',
                    currency_code: 'USD'
                }
            },
            total_price: '54.98',
            total_price_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tax: '4.99',
            total_tax_set: {
                shop_money: {
                    amount: '4.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '4.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 567,
            user_id: 1
        },
        {
            id: 20021,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 20011,
                last_order_name: '#20011',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 201,
                    title: 'Chinelo Vans Slide-on Checkboard 1',
                    variant_id: 2011,
                    variant_title: 'Chinelo Vans Slide-on Checkboard 1',
                    name: 'Chinelo Vans Slide-on Checkboard 1',
                    sku: 'SLIDEON2019BLACK',
                    vendor: 'Vans',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 280,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#20021',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 20021,
            order_number: 20021,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 3368,
            user_id: 1
        },
        {
            id: 20031,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 20021,
                last_order_name: '#20021',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 301,
                    title: 'Camiseta Kings Bronx 1',
                    variant_id: 3011,
                    variant_title: 'Camiseta Kings Bronx 1',
                    name: 'Camiseta Kings Bronx 1',
                    sku: 'KINGSBRONX3019BLACK',
                    vendor: 'Kings',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 220,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#20031',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 20031,
            order_number: 20031,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 549.98,
            subtotal_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '549.98',
            total_line_items_price_set: {
                shop_money: {
                    amount: '549.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '549.98',
                    currency_code: 'USD'
                }
            },
            total_price: '604.96',
            total_price_set: {
                shop_money: {
                    amount: '604.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '604.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '54.98',
            total_tax_set: {
                shop_money: {
                    amount: '54.98',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '54.98',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 2767,
            user_id: 1
        },
        {
            id: 20041,
            browser_ip: '216.191.105.146',
            buyer_accepts_marketing: false,
            billing_address: {
                address1: 'Rua do centro, 23',
                address2: 'Casa 01',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Armando Volta Júnior',
                first_name: 'Armando',
                last_name: 'Volta Júnior',
                phone: '+551195555-5555'
            },
            cancel_reason: null,
            cancelled_at: null,
            cart_token: '68778783ad298f1c80c3bafcddeea',
            client_details: {
                accept_language: 'pt-BR-US,pt;q=0.9',
                browser_height: 1320,
                browser_ip: '216.191.105.146',
                browser_width: 1280,
                session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643',
                user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
            },
            closed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            currency: 'BRL',
            customer: {
                id: 2,
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                email: 'pedro@hostmail.com',
                phone: '+551195555-5555',
                default_address: {
                    address1: 'Rua da periferia, 1000',
                    address2: 'Casa Fundos',
                    city: 'São Paulo',
                    province: 'São Paulo',
                    province_code: 'SP',
                    country: 'Brasil',
                    country_code: 'BR',
                    zip: '12345-000',
                    latitude: '45.41634',
                    longitude: '-75.6868',
                    company: 'Kuantic',
                    name: 'Pedro Mar Motta',
                    first_name: 'Pedro',
                    last_name: 'Mar Motta',
                    phone: '+551195555-5555'
                },
                addresses: {},
                last_order_id: 20031,
                last_order_name: '#20031',
                orders_count: '3',
                total_spent: '0.00',
                note: 'Fez um pedido que disparou aviso de fraude',
                currency: 'BRL',
                marketing_opt_in_level: 'single_opt_in',
                accepts_marketing: false,
                accepts_marketing_updated_at: new Date('2019-06-01 00:00:00.000').toISOString(),
                state: 'enabled',
                verified_email: true,
                multipass_identifier: null,
                tax_exempt: false,
                tax_exemptions: {},
                tags: 'fiel'
            },
            customer_locale: 'pt-BR',
            discount_applications: [],
            discount_codes: [],
            email: 'armando@hostmail.com',
            financial_status: 'authorized',
            fulfillments: [],
            fulfillment_status: 'fulfilled',
            line_items: [
                {
                    id: 1,
                    product_id: 101,
                    title: 'Tênis Nike Air Max 97 Throwback Future',
                    variant_id: 1011,
                    variant_title: 'Tênis Nike Air Max 97 Throwback Future',
                    name: 'Tênis Nike Air Max 97 Throwback Future',
                    sku: 'THROWBACK3019BLACK',
                    vendor: 'Nike',
                    quantity: 1,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '49.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '49.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Tênis esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 567,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '4.99',
                            price_set: {
                                shop_money: {
                                    amount: '4.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '4.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    product_id: 301,
                    title: 'Camiseta Kings Bronx 1',
                    variant_id: 3011,
                    variant_title: 'Camiseta Kings Bronx 1',
                    name: 'Camiseta Kings Bronx 1',
                    sku: 'KINGSBRONX3019BLACK',
                    vendor: 'Kings',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 220,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    product_id: 401,
                    title: 'Moletom Nike Jordan Camuflado 1',
                    variant_id: 4011,
                    variant_title: 'Moletom Nike Jordan Camuflado 1',
                    name: 'Moletom Nike Jordan Camuflado 1',
                    sku: 'MOLETONJORDAN3019BLACK',
                    vendor: 'Nike',
                    quantity: 10,
                    price: '49.99',
                    price_set: {
                        shop_money: {
                            amount: '499.99',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '499.99',
                            currency_code: 'USD'
                        }
                    },
                    properties: [
                        {
                            name: 'Chinelo esportivo',
                            value: 'Feliz aniversário!'
                        }
                    ],
                    fulfillable_quantity: 1,
                    fulfillment_service: 'deposito-mooca',
                    fulfillment_status: 'fulfilled',
                    grams: 300,
                    requires_shipping: true,
                    gift_card: false,
                    taxable: true,
                    tax_lines: [
                        {
                            title: 'ICMS',
                            price: '49.99',
                            price_set: {
                                shop_money: {
                                    amount: '49.99',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '49.99',
                                    currency_code: 'USD'
                                }
                            },
                            rate: 0.1
                        }
                    ],
                    total_discount: '0.00',
                    total_discount_set: {
                        shop_money: {
                            amount: '0.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '0.00',
                            currency_code: 'USD'
                        }
                    },
                    discount_allocations: [
                        {
                            amount: '0.00',
                            discount_application_index: 2,
                            amount_set: {
                                shop_money: {
                                    amount: '0.00',
                                    currency_code: 'BRL'
                                },
                                presentment_money: {
                                    amount: '0.00',
                                    currency_code: 'USD'
                                }
                            }
                        }
                    ]
                }
            ],
            location_id: 1,
            name: '#20041',
            note: 'Consumidor pensou muito antes de fechar o pedido.',
            note_attributes: [
                {
                    name: 'cliente',
                    value: 'Nota sobre esse cliente'
                }
            ],
            number: 20041,
            order_number: 20041,
            phone: '+551195555-5555',
            presentment_currency: 'USD',
            processed_at: new Date('2019-08-05 00:00:00.000').toISOString(),
            shipping_address: {
                address1: 'Rua da periferia, 1000',
                address2: 'Casa Fundos',
                city: 'São Paulo',
                province: 'São Paulo',
                province_code: 'SP',
                country: 'Brasil',
                country_code: 'BR',
                zip: '12345-000',
                latitude: '45.41634',
                longitude: '-75.6868',
                company: 'Kuantic',
                name: 'Pedro Mar Motta',
                first_name: 'Pedro',
                last_name: 'Mar Motta',
                phone: '+551195555-5555'
            },
            shipping_lines: [
                {
                    code: 'INT.TP',
                    price: '4.00',
                    price_set: {
                        shop_money: {
                            amount: '4.00',
                            currency_code: 'BRL'
                        },
                        presentment_money: {
                            amount: '4.00',
                            currency_code: 'USD'
                        }
                    },
                    discounted_price: '4.00',
                    discounted_price_set: '4.00',
                    source: 'correios',
                    title: 'Pacote nacional terrestre',
                    tax_lines: [],
                    carrier_identifier: 'correios',
                    requested_fulfillment_service_id: '1'
                }
            ],
            source_name: 'web',
            subtotal_price: 1049.97,
            subtotal_price_set: {
                shop_money: {
                    amount: '1049.97',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1049.97',
                    currency_code: 'USD'
                }
            },
            total_discounts: '0.00',
            total_discounts_set: {
                shop_money: {
                    amount: '0.00',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '0.00',
                    currency_code: 'USD'
                }
            },
            total_line_items_price: '1049.97',
            total_line_items_price_set: {
                shop_money: {
                    amount: '1049.97',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1049.97',
                    currency_code: 'USD'
                }
            },
            total_price: '1154.96',
            total_price_set: {
                shop_money: {
                    amount: '1154.96',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '1154.96',
                    currency_code: 'USD'
                }
            },
            total_tax: '104.99',
            total_tax_set: {
                shop_money: {
                    amount: '104.99',
                    currency_code: 'BRL'
                },
                presentment_money: {
                    amount: '104.99',
                    currency_code: 'USD'
                }
            },
            total_tip_received: '0.00',
            total_weight: 2767,
            user_id: 1
        }
    ]
};

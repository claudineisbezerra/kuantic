export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: 'Foto',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'variant_title',
      title: 'Produto',
      sortField: 'variant_title',
      width: '25%',
    },
    {
      name: 'sku',
      title: 'sku',
      sortField: 'sku',
      width: '15%',
    },
    {
      name: 'vendor',
      title: 'Marca',
      sortField: 'vendor',
      width: '10%',
    },
    {
      name: 'color',
      title: 'Cor',
      sortField: 'color',
      width: '10%',
    },
    {
      name: 'inventory_quantity',
      title: 'Quantidade em estoque',
      sortField: 'inventory_quantity',
      width: '10%',
    },
    {
      name: 'inventory_optimal',
      title: 'Estoque ideal',
      sortField: 'inventory_optimal',
      width: '10%',
    },
    {
      name: 'inventory_unit_cost',
      title: 'Custo unitário',
      sortField: 'inventory_unit_cost',
      width: '10%',
    },
    {
      name: 'purchase_executed_quantity_to_buy',
      title: 'Quantidade da compra',
      sortField: 'purchase_executed_quantity_to_buy',
      width: '10%',
    },
    {
      name: 'purchase_executed_value_to_buy',
      title: 'Valor da compra',
      sortField: 'purchase_executed_value_to_buy',
      width: '10%',
    }
  ],
  sortFunctions: {
    'title': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'sku': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}

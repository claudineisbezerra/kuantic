export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: 'Foto',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'title',
      title: 'Produto',
      sortField: 'title',
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
      title: 'Quantidade estoque',
      sortField: 'inventory_quantity',
      width: '10%',
    },
    {
      name: 'inventory_cost',
      title: 'Custo unitário',
      sortField: 'inventory_cost',
      width: '10%',
    },
    {
      name: 'purchase_executed_quantity_to_buy',
      title: 'Quantidade total',
      sortField: 'purchase_executed_quantity_to_buy',
      width: '10%',
    },
    {
      name: 'purchase_executed_value_to_buy',
      title: 'Custo total',
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

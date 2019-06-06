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
      width: '20%',
    },
    {
      name: 'sku',
      title: 'sku',
      sortField: 'sku',
      width: '20%',
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
      title: 'QTD em estoque',
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
      name: 'purchase_quantity_to_buy',
      title: 'QTD a comprar',
      sortField: 'purchase_quantity_to_buy',
      width: '10%',
    },
    {
      name: 'purchase_cost',
      title: 'Custo total',
      sortField: 'purchase_cost',
      width: '10%',
    },
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'email': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}

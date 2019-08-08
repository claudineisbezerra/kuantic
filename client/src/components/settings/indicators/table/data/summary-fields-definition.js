export default {
  tableFields: [
    {
      name: '__component:badge-column',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'indicator_at',
      title: 'Data',
      sortField: 'indicator_at'
    },
    {
      name: 'collection_title',
      title: 'Divisão',
      sortField: 'collection_title'
    },
    {
      name: 'product_type_title',
      title: 'Categoria',
      sortField: 'product_type_title'
    },
    {
      name: 'title',
      title: 'Produto',
      sortField: 'title'
    },
    {
      name: 'inventory_quantity',
      title: 'Estoque',
      sortField: 'inventory_quantity'
    },
    {
      name: 'coverage_optimal',
      title: 'Cobertura',
      sortField: 'coverage_optimal'
    },
    {
      name: 'sales_volume',
      title: 'Quantidade vendida',
      sortField: 'sales_volume'
    },
    {
      name: 'sales_value',
      title: 'Valor vendido',
      sortField: 'sales_value'
    }
  ],
  sortFunctions: {
    'collection_title': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'product_type_title': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}

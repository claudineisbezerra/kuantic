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
      name: 'product_type_title',
      title: 'Categoria',
      sortField: 'product_type_title'
    },
    {
      name: 'variant_title',
      title: 'Produto',
      sortField: 'variant_title'
    },
    {
      name: 'inventory_quantity',
      title: 'Estoque atual',
      sortField: 'inventory_quantity'
    },
    {
      name: 'coverage_optimal',
      title: 'Cobertura ideal (Dias)',
      sortField: 'coverage_optimal'
    },
    {
      name: 'sales_volume',
      title: 'Volume de vendas',
      sortField: 'sales_volume'
    },
    {
      name: 'sales_value',
      title: 'Valor de vendas',
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

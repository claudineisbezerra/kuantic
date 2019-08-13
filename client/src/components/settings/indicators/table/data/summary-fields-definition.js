export default {
  tableFields: [
    {
      name: '__component:badge-column',
      dataClass: 'text-center',
      width: '4%',
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
      name: 'inventory_available_days',
      title: 'Período com estoque (Dias)',
      sortField: 'inventory_available_days'
    },
    {
      name: 'inventory_quantity',
      title: 'Estoque atual',
      sortField: 'inventory_quantity'
    },
    {
      name: 'inventory_optimal',
      title: 'Estoque ideal',
      sortField: 'inventory_optimal'
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
    },
    {
      name: 'sales_potential',
      title: 'Potencial de venda (Unidade / Dia)',
      sortField: 'sales_potential'
    },
    {
      name: 'coverage_optimal',
      title: 'Cobertura ideal (Dias)',
      sortField: 'coverage_optimal'
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

export default {
  tableFields: [
    {
      name: '__component:badge-column',
      dataClass: 'text-center',
      width: '4%',
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
      name: '__slot:coverage_min',
      title: 'Cobertura mínima (dias)',
      sortField: 'coverage_min',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    },
    {
      name: '__slot:coverage_optimal',
      title: 'Cobertura ideal  (dias)',
      sortField: 'coverage_optimal'
    },
    {
      name: '__slot:actions',
      sortField: 'actions',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
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

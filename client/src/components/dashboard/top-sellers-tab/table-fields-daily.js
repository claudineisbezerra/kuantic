export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: 'Foto',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'name',
      title: 'Produto',
      sortField: 'name',
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
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'sku': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}

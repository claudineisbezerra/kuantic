export default {
  tableFields: [
    {
      name: '__component:badge-column',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'title',
      title: 'Título',
      sortField: 'title'
    },
    {
      name: '__slot:start_date',
      title: 'Data inicial',
      sortField: 'start_date',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    },
    {
      name: '__slot:end_date',
      title: 'Data final',
      sortField: 'end_date'
    },
    {
      name: '__slot:days_of_calculation',
      title: 'Quantidade de dias',
      sortField: 'days_of_calculation',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    }
  ],
  sortFunctions: {
    'title': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  },
}

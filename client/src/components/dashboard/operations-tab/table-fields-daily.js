export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: 'Foto',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'date',
      title: 'Data',
      sortField: 'date',
      width: '10%',
    },
    {
      name: 'orders_volume',
      title: 'Total geral de pedidos',
      sortField: 'orders_volume',
      width: '10%',
    },
    {
      name: 'orders_volume_delivered',
      title: 'Pedidos enviados',
      sortField: 'orders_volume_delivered',
      width: '10%',
    },
    {
      name: 'orders_percentage_delay',
      title: '% Pedidos enviados fora do prazo',
      sortField: 'orders_percentage_delay',
      width: '10%',
    },
    {
      name: 'orders_avg_shipping_time',
      title: 'Prazo médio de envio',
      sortField: 'orders_avg_shipping_time',
      width: '10%',
    },
    {
      name: 'orders_avg_shipping_time_delay',
      title: 'Prazo médio de envio em atraso',
      sortField: 'orders_avg_shipping_time_delay',
      width: '10%',
    },
    {
      name: 'orders_volume_returned',
      title: 'Pedidos retornados',
      sortField: 'orders_volume_returned',
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

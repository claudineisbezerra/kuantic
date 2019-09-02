export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: 'Foto',
      dataClass: 'text-center',
      width: '4%',
    },
    {
      name: 'salesChannel',
      title: 'Canal de venda',
      sortField: 'salesChannel',
      width: '10%',
    },
    {
      name: 'gvt_acbr_total',
      title: 'GVT aCbR Total',
      sortField: 'gvt_acbr_total',
      width: '10%',
    },
    {
      name: 'avg_ticket_value',
      title: 'Valor do ticket médio',
      sortField: 'avg_ticket_value',
      width: '10%',
    },
    {
      name: 'orders_volume',
      title: 'Quantidade de pedidos',
      sortField: 'orders_volume',
      width: '10%',
    },
    {
      name: 'mkt_cost',
      title: 'Custo de marketing',
      sortField: 'mkt_cost',
      width: '10%',
    },
    {
      name: 'gvt_mkt_cost',
      title: 'GVT / Custo de marketing',
      sortField: 'gvt_mkt_cost',
      width: '10%',
    },
    {
      name: 'orders_avg_cost',
      title: 'Custo médio do pedido',
      sortField: 'orders_avg_cost',
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

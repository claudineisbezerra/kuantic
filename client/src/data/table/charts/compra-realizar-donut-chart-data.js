import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Tênis', 'Chinelos', 'Camisetas', 'Moletoms'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.success, palette.primary, palette.warning],
    data: [95, 15, 50, 50],
  }],
}

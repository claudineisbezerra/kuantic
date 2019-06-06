import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Tênis', 'Botas', 'Camisetas', 'Moletons'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.success, palette.primary, palette.warning],
    data: [80, 15, 15, 200],
  }],
}

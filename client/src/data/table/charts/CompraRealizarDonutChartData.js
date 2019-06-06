import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Tênis', 'Botas', 'Camisetas', 'Moletons'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.success, palette.primary, palette.warning],
    data: [30, 15, 50, 50],
  }],
}

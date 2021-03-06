import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Estoque inicial', 'Estoque ideal', 'Compra sugerida', 'Compra a realizar'],
  datasets: [
    {
      label: 'Chinelo',
      backgroundColor: palette.success,
      borderColor: palette.transparent,
      data: [5, 100, 95, 80],
    },
  ],
}

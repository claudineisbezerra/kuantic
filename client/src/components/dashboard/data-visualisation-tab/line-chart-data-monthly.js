import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

const generateValue = () => {
  return Math.floor(Math.random() * 100)
}

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['GTV', 'Objetivo'] : ['Objetivo', 'GTV']
}

const generateArray = (length) => {
  return Array.from(Array(length), generateValue)
}

const getSize = () => {
  const minSize = 12
  return minSize + Math.floor(Math.random() * 1)
}

export const getLineChartDataMonthly = () => {
  const size = getSize()
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro']
  const yLabels = generateYLabels()

  return {
    labels: months.splice(0, size),
    datasets: [
      {
        label: yLabels[0],
        backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
      {
        label: yLabels[1],
        backgroundColor: utils.hex2rgb(palette.warning, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
    ],
  }
}

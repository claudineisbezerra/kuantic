import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

const generateValue = () => {
  return Math.floor(Math.random() * 100)
}

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 1)
  return flip ? ['GTV', 'Objetivo'] : ['Objetivo', 'GTV']
}

const generateArray = (length) => {
  return Array.from(Array(length), generateValue)
}

const getSize = () => {
  const minSize = 31
  return minSize + Math.floor(Math.random() * 1)
}

export const getLineChartDataDaily = () => {
  const size = getSize()
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
  const yLabels = generateYLabels()

  return {
    labels: months.splice(0, size),
    datasets: [
      {
        label: yLabels[0],
        backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
      {
        label: yLabels[1],
        backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
    ],
  }
}

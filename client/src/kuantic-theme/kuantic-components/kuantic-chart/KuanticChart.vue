<template>
  <component
    ref="chart"
    class='kuantic-chart'
    :is="chartComponent"
    :options="options"
    :chart-data="data"
  />
</template>

<script>
import PieChart from './chart-types/PieChart'
import BubbleChart from './chart-types/BubbleChart'
import DonutChart from './chart-types/DonutChart'
import HorizontalBarChart from './chart-types/HorizontalBarChart'
import VerticalBarChart from './chart-types/VerticalBarChart'
import LineChart from './chart-types/LineChart'
import { chartTypesMap } from './KuanticChartConfigs'

export default {
  name: 'kuantic-chart',
  props: {
    data: {},
    options: {},
    type: {
      validator (type) {
        const valid = type in chartTypesMap

        if (!valid) {
          // eslint-disable-next-line no-console
          console.warn(`There is no chart of ${type} type`)
        }

        return valid
      },
    },
  },
  components: {
    PieChart,
    LineChart,
    VerticalBarChart,
    HorizontalBarChart,
    DonutChart,
    BubbleChart,
  },
  computed: {
    chartComponent () {
      return chartTypesMap[this.type]
    },
  },
}
</script>

<style lang='scss'>
.kuantic-chart {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    height: 100%;
    width: 100%;
  }

  canvas {
    width: 100%;
    height: auto;
  }
}
</style>

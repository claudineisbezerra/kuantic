<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-simple-select
        :options="chartTypes"
        v-model="chartType"
      />
      <button @click="refreshData()">Refresh data</button>

      <kuantic-chart :data="chartData" :type="chartType"/>
    </div>
  </div>
</template>

<script>
import KuanticChart from './KuanticChart.vue'
import KuanticSimpleSelect from '../kuantic-simple-select/KuanticSimpleSelect'
import { chartTypes } from './KuanticChartConfigs'
import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  data () {
    return {
      chartData: getLineChartData(),
      chartType: 'pie',
    }
  },
  components: {
    KuanticSimpleSelect,
    KuanticChart,
  },
  computed: {
    chartTypes: () => chartTypes,
  },
  methods: {
    refreshData () {
      this.chartData = getLineChartData()
    },
  },
}
</script>

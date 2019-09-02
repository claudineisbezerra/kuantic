<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="va-row">
      <div class="flex md12 xs12">
        <div class="chart-container">
          <kuantic-chart :data="lineChartDataDaily" type="line"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getLineChartDataDaily } from './line-chart-data-daily'

export default {
  name: 'data-visualisation-tab-daily',

  data () {
    return {
      lineChartDataDaily: getLineChartDataDaily()
    }
  },
  methods: {
    refreshData () {
      this.lineChartDataDaily = getLineChartDataDaily()
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-container {
  padding: 0 2rem;
  height: 24rem;
}
</style>

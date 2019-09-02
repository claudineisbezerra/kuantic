<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="va-row">
      <div class="flex md12 xs12">
        <div class="chart-container">
          <kuantic-chart :data="lineChartDataMonthly" type="line"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getLineChartDataMonthly } from './line-chart-data-monthly'

export default {
  name: 'data-visualisation-tab-monthly',

  data () {
    return {
      lineChartDataMonthly: getLineChartDataMonthly()
    }
  },
  methods: {
    refreshData () {
      this.lineChartDataMonthly = getLineChartDataMonthly()
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

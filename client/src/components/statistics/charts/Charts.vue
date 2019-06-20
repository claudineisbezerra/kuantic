<template>
  <div class="charts-page">
    <div class="va-row">
      <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" :headerText="$t('charts.verticalBarChart')">
          <kuantic-chart :data="verticalBarChartData" type="vertical-bar"/>
        </kuantic-widget>
      </div>
      <div class="flex md6 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.horizontalBarChart')"
        >
          <kuantic-chart :data="horizontalBarChartData" type="horizontal-bar"/>
        </kuantic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.lineChart')"
        >
          <kuantic-chart :data="lineChartData" type="line"/>
        </kuantic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.pieChart')"
        >
          <kuantic-chart :data="pieChartData" type="pie"/>
        </kuantic-widget>
      </div>
      <div class="flex md6 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.donutChart')"
        >
          <kuantic-chart :data="donutChartData" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.bubbleChart')"
        >
          <kuantic-chart :data="bubbleChartData" type="bubble"/>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import { getLineChartData } from '../../../data/charts/line-chart-data'
import BubbleChartData from '../../../data/charts/bubble-chart-data'
import PieChartData from '../../../data/charts/pie-chart-data'
import DonutChartData from '../../../data/charts/donut-chart-data'
import VerticalBarChartData from '../../../data/charts/vertical-bar-chart-data'
import HorizontalBarChartData from '../../../data/charts/horizontal-bar-chart-data'
import SidebarLink from '../../admin/app-sidebar/components/SidebarLink'

export default {
  name: 'charts',
  components: {
    SidebarLink,
  },
  data: () => ({
    bubbleChartData: BubbleChartData,
    lineChartData: getLineChartData(),
    pieChartData: PieChartData,
    donutChartData: DonutChartData,
    verticalBarChartData: VerticalBarChartData,
    horizontalBarChartData: HorizontalBarChartData,
  }),
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData()
    },
  },
}
</script>

<style lang="scss">
.widget.chart-widget {
  .widget-body {
    height: 550px;
  }
}
</style>

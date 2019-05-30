<template>
  <div class="charts-page">
    <div class="va-row">
      <div class="flex md6 xs12">
        <kuantic-widget
          class="chart-widget"
          :headerText="$t('charts.verticalBarChart')"
        >
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
import { getLineChartData } from '../../../data/charts/LineChartData'
import BubbleChartData from '../../../data/charts/BubbleChartData'
import PieChartData from '../../../data/charts/PieChartData'
import DonutChartData from '../../../data/charts/DonutChartData'
import VerticalBarChartData from '../../../data/charts/VerticalBarChartData'
import HorizontalBarChartData from '../../../data/charts/HorizontalBarChartData'
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

<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>

    <kuantic-widget class="no-padding no-v-padding">
      <kuantic-tabs
        :names="[$t('dashboard.dailySales'), $t('dashboard.topSellers'), $t('dashboard.operations'), $t('dashboard.marketing')]"
        ref="tabs">
        <div :slot="$t('dashboard.dailySales')">
          <data-visualisation-daily-tab></data-visualisation-daily-tab>
        </div>
        <div :slot="$t('dashboard.topSellers')">
          <top-sellers-daily-tab></top-sellers-daily-tab>
        </div>
        <div :slot="$t('dashboard.operations')">
          <operations-daily-tab></operations-daily-tab>
        </div>
        <div :slot="$t('dashboard.marketing')">
          <marketing-daily-tab></marketing-daily-tab>
        </div>
      </kuantic-tabs>
    </kuantic-widget>

    <kuantic-widget class="no-padding no-v-padding">
      <kuantic-tabs
        :names="[$t('dashboard.monthlySales'), $t('dashboard.topSellers'), $t('dashboard.operations'), $t('dashboard.marketing')]"
        ref="tabs">
        <div :slot="$t('dashboard.monthlySales')">
          <data-visualisation-monthly-tab></data-visualisation-monthly-tab>
        </div>
        <div :slot="$t('dashboard.topSellers')">
          <top-sellers-monthly-tab></top-sellers-monthly-tab>
        </div>
        <div :slot="$t('dashboard.operations')">
          <operations-monthly-tab></operations-monthly-tab>
        </div>
        <div :slot="$t('dashboard.marketing')">
          <marketing-monthly-tab></marketing-monthly-tab>
        </div>
      </kuantic-tabs>
    </kuantic-widget>


    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

import DataVisualisationDailyTab from './data-visualisation-tab/DataVisualisationDailyTab.vue'
import TopSellersDailyTab from './top-sellers-tab/TopSellersDailyTab.vue'
import OperationsDailyTab from './operations-tab/OperationsDailyTab.vue'
import MarketingDailyTab from './marketing-tab/MarketingDailyTab.vue'

import DataVisualisationMonthlyTab from './data-visualisation-tab/DataVisualisationMonthlyTab.vue'
import TopSellersMonthlyTab from './top-sellers-tab/TopSellersMonthlyTab.vue'
import OperationsMonthlyTab from './operations-tab/OperationsMonthlyTab.vue'
import MarketingMonthlyTab from './marketing-tab/MarketingMonthlyTab.vue'


export default {
  name: 'dashboard',
  components: {
    DashboardInfoWidgets,
    DashboardBottomWidgets,

    DataVisualisationDailyTab,
    TopSellersDailyTab,
    OperationsDailyTab,
    MarketingDailyTab,

    DataVisualisationMonthlyTab,
    TopSellersMonthlyTab,
    OperationsMonthlyTab,
    MarketingMonthlyTab,

  },

  methods: {
    launchKuanticToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'kuantic-toasted-link',
        },
      })
    },
  },
}

</script>
<style lang="scss" scoped>
</style>

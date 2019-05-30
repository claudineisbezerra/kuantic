<template>
  <div class="overview-tab dashboard-tab">
    <div
      class="d-flex overview-row justify--space-around justify--start">

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-vue/>
          </div>
          Built with Vue.js framework
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-free/>
          </div>
          Absolutely free for everyone
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-fresh/>
          </div>
          Fresh and crisp design
        </div>
      </div>

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-responsive/>
          </div>
          Responsive and optimized for mobile
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-rich/>
          </div>
          Tons of useful components
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
            <kuantic-icon-clean-code/>
          </div>
          Completely jQuery free
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KuanticIconVue
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconVue'
import KuanticIconFree
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconFree'
import KuanticIconFresh
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconFresh'
import KuanticIconResponsive
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconResponsive'
import KuanticIconRich
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconRich'
import KuanticIconCleanCode
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconCleanCode'

export default {
  name: 'features-tab',
  components: {
    KuanticIconVue,
    KuanticIconFree,
    KuanticIconFresh,
    KuanticIconResponsive,
    KuanticIconRich,
    KuanticIconCleanCode,
  },
}
</script>

<style lang="scss" scoped>
.overview-item {
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 3rem;
  padding-right: 1rem;
  font-size: 1.25rem;
  font-weight: bold;

  .overview-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-width: 85px;
    max-width: 85px;
    height: 100%;
  }
}

.overview-row {
  @include media-breakpoint-down(xs) {
    flex-wrap: wrap;
  }
}

.overview-col:first-child {
  margin-left: 2rem;
  @include media-breakpoint-down(md) {
    margin-left: 0;
  }
}

.explore-btn {
  margin-top: 6rem;
  margin-bottom: 1rem;
}
</style>

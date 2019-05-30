<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <kuantic-timeline-separator/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <kuantic-timeline-separator vertical/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <kuantic-timeline-separator active/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <kuantic-timeline-separator activePrevious/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <kuantic-timeline-separator activeNext/>
    </div>
  </div>
</template>

<script>
import KuanticTimelineSeparator from './KuanticTimelineSeparator.vue'

export default {
  components: {
    KuanticTimelineSeparator,
  },
}
</script>

<template>
  <div class="bubble-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget
          class="bubble-maps-page__widget"
          headerText="Bubble Maps"
        >
          <bubble-map v-bind:map-data="bubbleMapData"/>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import BubbleMap from './BubbleMap'
import BubbleMapData from 'data/maps/bubble-map-data'

export default {
  name: 'bubble-maps-page',
  components: {
    BubbleMap,
  },
  data: function () {
    return {
      bubbleMapData: BubbleMapData,
    }
  },
}
</script>

<style lang="scss">
.bubble-maps-page {
  &__widget {
    height: 70vh;
    .kuantic-widget-body {
      height: 65vh;
    }
  }
}
</style>

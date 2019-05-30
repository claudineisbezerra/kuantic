<template>
  <div class="leaflet-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget
          class="leaflet-maps-page__widget"
          headerText="Leaflet Maps"
        >
          <leaflet-map/>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import LeafletMap from './LeafletMap'

export default {
  name: 'leaflet-maps-page',
  components: {
    LeafletMap,
  },
}
</script>

<style lang="scss">
.leaflet-maps-page {
  &__widget {
    height: 70vh;
    .kuantic-widget-body {
      height: 65vh;
    }
  }
}
</style>

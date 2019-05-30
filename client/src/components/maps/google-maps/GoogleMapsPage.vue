<template>
  <div class="google-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget
          class="google-maps-page__widget"
          headerText="Google Maps"
        >
          <google-map/>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from './GoogleMap'

export default {
  name: 'google-maps-page',
  components: {
    GoogleMap,
  },
}
</script>

<style lang="scss">
 .google-maps-page{
   &__widget {
     height: 70vh;
     .kuantic-widget-body {
       height: 65vh;
     }
   }
 }
</style>

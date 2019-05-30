<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-slider-color-picker v-model="value"/>
      <kuantic-slider-color-picker v-model="value" style="padding-top: 20px"/>
      {{value}}
    </div>
  </div>
</template>

<script>

import KuanticSliderColorPicker from './KuanticSliderColorPicker'

export default {
  components: {
    KuanticSliderColorPicker,
  },
  data () {
    return {
      value: '#34495e',
    }
  },
}
</script>

<template>
  <SliderPicker v-model="valueProxy" class="kuantic-slider-picker"/>
</template>

<script>
import { Slider } from 'vue-color'

export default {
  name: 'kuantic-slider-color-picker',
  components: {
    'SliderPicker': Slider,
  },
  props: {
    value: {
      default: '',
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value.hex)
      },
    },
  },
}
</script>

<style>
.kuantic-slider-picker {
  padding: 8px;
}
</style>

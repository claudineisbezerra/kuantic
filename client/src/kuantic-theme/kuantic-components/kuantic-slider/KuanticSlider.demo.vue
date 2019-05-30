<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 200px">
      <kuantic-slider
        :options="options"
        v-model="iconSize"
      />
      {{ value }}
    </div>
  </div>
</template>

<script>
import KuanticSlider from './KuanticSlider.vue'

export default {
  components: {
    KuanticSlider,
  },
  data () {
    return {
      options: {
        formatter: v => `${v}px`,
        min: 20,
        max: 40,
      },
      value: 30,
    }
  },
}
</script>

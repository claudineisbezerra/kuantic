<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-advanced-color-picker v-model="value"/>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <kuantic-advanced-color-picker v-model="value"/>
    </div>
  </div>
</template>

<script>
import KuanticAdvancedColorPicker from './KuanticAdvancedColorPicker'

export default {
  components: {
    KuanticAdvancedColorPicker,
  },
  data () {
    return {
      value: '#AAA',
    }
  },
}
</script>

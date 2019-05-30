<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      <kuantic-simple-palette-picker
        v-model="value"
        :palette="palette"
      />
      {{ value }}
    </div>
  </div>
</template>

<script>
import KuanticSimplePalettePicker from './KuanticSimplePalettePicker'
import { colorArray } from './KuanticTheme'
import KuanticPalletCustom from './KuanticPalletCustom'

export default {
  components: {
    KuanticSimplePalettePicker,
    KuanticPalletCustom,
  },
  data () {
    return {
      value: '#AAA',
      palette: colorArray,
    }
  },
}
</script>

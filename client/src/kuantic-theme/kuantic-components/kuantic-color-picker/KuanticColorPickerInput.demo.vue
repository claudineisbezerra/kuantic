<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-color-picker-input v-model="value" mode="palette"
                                  :palette="palette">
        <color-dot :color="value"/>
      </kuantic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <kuantic-color-picker-input v-model="value" mode="slider">
        <kuantic-color-square :value="value"/>
      </kuantic-color-picker-input>
      {{ value }}
    </div>
    <div class="demo-container__item">
      <kuantic-color-picker-input v-model="value" mode="advanced">
        <kuantic-color-input v-model="value"/>
      </kuantic-color-picker-input>
    </div>
    <div class="demo-container__item">
      <kuantic-color-picker-input v-model="value" mode="palette"
                                  :palette="palette"/>
    </div>
  </div>
</template>

<script>
import KuanticColorPickerInput from './KuanticColorPickerInput'
import ColorDot from './ColorDot'
import KuanticColorSquare from './KuanticColorSquare'
import KuanticColorInput from './KuanticColorInput'
import { colorArray } from './KuanticTheme'

export default {
  components: {
    KuanticColorPickerInput,
    ColorDot,
    KuanticColorSquare,
    KuanticColorInput,
  },
  data () {
    return {
      value: '#9b6caa',
      palette: colorArray,
    }
  },
}
</script>

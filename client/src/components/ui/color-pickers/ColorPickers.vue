<template>
  <div class="kuantic-color-picker-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('menu.colorPickers')">
          <div class="va-row">
            <div class="flex md2">
              <span class="text-uppercase kuantic-color-picker-page__text">simple</span>
            </div>
            <div class="flex md2">
              <span class="text-uppercase kuantic-color-picker-page__text">slider</span>
            </div>
            <div class="flex md2 kuantic-color-picker-page__text-advanced">
              <span class="text-uppercase kuantic-color-picker-page__text">advanced</span>
            </div>
          </div>
          <div class="va-row">
            <div class="flex md2">
              <div class="kuantic-color-picker-page__top-square">
                <kuantic-color-picker-input mode="palette"
                                            v-model="topSimpleSquareColor"
                                            :palette="palette">
                  <kuantic-color-square :value="topSimpleSquareColor"/>
                </kuantic-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="kuantic-color-picker-page__top-square">
                <kuantic-color-picker-input mode="slider"
                                            v-model="topSliderSquareColor">
                  <kuantic-color-square :value="topSliderSquareColor"/>
                </kuantic-color-picker-input>
              </div>
            </div>
            <div class="flex md2">
              <div class="kuantic-color-picker-page__top-square">
                <kuantic-color-picker-input mode="advanced"
                                            v-model="topAdvancedSquareColor">
                  <kuantic-color-square :value="topAdvancedSquareColor"/>
                </kuantic-color-picker-input>
              </div>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget headerText="Simple Inline">
          <div class="va-row">
            <div class="flex md1">
              <kuantic-color-square :value="simpleColor"/>
            </div>
            <div class="flex md2">
              <kuantic-pallet-custom :palette="palette" v-model="simpleColor"/>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget headerText="Slider">
          <div class="va-row">
            <div class="flex md1">
              <kuantic-color-square :value="sliderColor"/>
            </div>
            <div class="flex md6 xs12">
              <kuantic-slider-color-picker v-model="sliderColor"/>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget headerText="Advanced">
          <div class="va-row">
            <div class="flex md1">
              <kuantic-color-square :value="advancedColor"/>
            </div>
            <div class="flex md7">
              <kuantic-advanced-color-picker v-model="advancedColor"/>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>
  </div>

</template>

<script>

import KuanticSimplePalettePicker
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticSimplePalettePicker'
import KuanticColorSquare
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticColorSquare'
import KuanticSliderColorPicker
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticSliderColorPicker'
import KuanticAdvancedColorPicker
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticAdvancedColorPicker'
import KuanticColorInput
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticColorInput'
import KuanticColorPickerInput
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticColorPickerInput'
import { colorArray } from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticTheme'
import KuanticPalletCustom
  from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticPalletCustom'

export default {
  name: 'color-pickers',
  components: {
    KuanticColorInput,
    KuanticAdvancedColorPicker,
    KuanticSliderColorPicker,
    KuanticColorSquare,
    KuanticSimplePalettePicker,
    KuanticColorPickerInput,
    KuanticPalletCustom,
  },
  data () {
    return {
      topSimpleSquareColor: '#f81953',
      topSliderSquareColor: '#34495e',
      topAdvancedSquareColor: '#ffd50a',
      sliderColor: '#2e5e2a',
      advancedColor: '#ffd50a',
      simpleColor: '#f81953',
      palette: colorArray,
    }
  },
}
</script>

<style lang="scss">
.kuantic-color-picker-page {
  &__top-square {
    max-width: 48px;
  }

  &__text {
    color: $vue-green;
  }

  &__text-advanced {
    padding-left: 5px;
  }
}
</style>

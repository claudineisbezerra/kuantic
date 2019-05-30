<template>
  <div class="kuantic-pallet-custom">
    <kuantic-simple-palette-picker :palette="palette" v-model="valueProxy"
                                   class="kuantic-pallet-custom__palette"/>
    <kuantic-color-picker-input mode="advanced" v-model="valueProxy"
                                class="kuantic-pallet-custom__input">
      <kuantic-color-input :selected="dotisSelected" v-model="valueProxy"/>
    </kuantic-color-picker-input>
  </div>
</template>

<script>

import KuanticColorPickerInput from './KuanticColorPickerInput'
import KuanticSimplePalettePicker from './KuanticSimplePalettePicker'
import KuanticColorInput from './KuanticColorInput'

export default {
  name: 'kuantic-pallet-custom',
  components: {
    KuanticColorInput,
    KuanticColorPickerInput,
    KuanticSimplePalettePicker,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    palette: {
      type: Array,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
    dotisSelected () {
      if (this.value !== '') {
        if (this.palette.includes(this.value)) {
          return false
        } else {
          return true
        }
      }
    },
  },
}
</script>

<style lang="scss">
.kuantic-pallet-custom {
  display: flex;

  &__palette {
    margin-right: 20px;
  }

  &__input {
    float: right;
  }
}
</style>

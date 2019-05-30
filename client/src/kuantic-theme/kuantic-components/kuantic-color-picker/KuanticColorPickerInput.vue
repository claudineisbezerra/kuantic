<template>
  <div class="kuantic-color-picker-input">
    <div v-if="validator(this.mode)">
      <kuantic-color-dropdown>
        <div slot="toggle" class="kuantic-color-picker-input__slot">
          <slot>
            <kuantic-color-input v-model="valueProxy" mode="palette"
                                 :disabled="disableInput" :selected="selected"/>
          </slot>
        </div>
        <div class="kuantic-color-picker-input__dropdown">
          <div v-if="this.mode==='advanced'">
            <kuantic-advanced-color-picker v-model="valueProxy"/>
          </div>
          <div v-if="this.mode==='palette'">
            <kuantic-simple-palette-picker v-model="valueProxy"
                                           :palette="palette"/>
          </div>
          <div v-if="this.mode==='slider'">
            <kuantic-slider-color-picker v-model="valueProxy"/>
          </div>
        </div>
      </kuantic-color-dropdown>
    </div>
    <div v-else>
      <slot>
        <kuantic-color-input v-model="valueProxy" mode="palette"
                             :disabled="disableInput"/>
      </slot>
    </div>
  </div>

</template>

<script>
import KuanticAdvancedColorPicker from './KuanticAdvancedColorPicker'
import KuanticSimplePalettePicker from './KuanticSimplePalettePicker'
import KuanticSliderColorPicker from './KuanticSliderColorPicker'
import KuanticColorSquare from './KuanticColorSquare'
import KuanticColorInput from './KuanticColorInput'
import KuanticColorDropdown from './KuanticColorDropdown'

export default {
  name: 'kuantic-color-picker-input',
  components: {
    KuanticColorDropdown,
    KuanticColorSquare,
    KuanticSimplePalettePicker,
    KuanticAdvancedColorPicker,
    KuanticSliderColorPicker,
    KuanticColorInput,
  },
  props: {
    mode: {
      type: String,
    },
    palette: {
      type: Array,
    },
    value: {
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
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
    disableInput () {
      if (this.mode === 'palette') {
        if (this.palette) {
          return true
        }
      }
      return false
    },
  },
  methods: {
    validator (value) {
      if (typeof (value) !== 'undefined') {
        return ['palette', 'slider', 'advanced'].includes(value)
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss">
.kuantic-color-picker-input {
  &__dropdown {
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__slot {
    cursor: pointer
  }
}
</style>

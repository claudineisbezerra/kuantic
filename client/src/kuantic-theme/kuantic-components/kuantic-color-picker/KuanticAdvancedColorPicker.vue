<template>
  <ChromePicker v-model="valueProxy" class="kuantic-advanced-picker"/>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'kuantic-advanced-color-picker',
  components: {
    ChromePicker: Chrome,
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

<style lang="scss">
.kuantic-advanced-picker {
  .vc-chrome-alpha-wrap {
    display: none;
  }
  .vc-chrome-hue-wrap {
    margin-top: 10px;
  }
  .vc-chrome-toggle-btn {
    display: none;
  }
}
</style>

<template>
  <span class="kuantic-tooltip-target" v-tooltip="tooltipOptions">
      <slot></slot>
  </span>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  name: 'kuantic-tooltip',

  directives: { tooltip: VTooltip },

  computed: {
    tooltipOptions () {
      return Object.assign({}, this.defaultOptions, this.options)
    },
  },

  props: {
    options: {
      type: Object,
      default: () => [],
    },
  },

  data () {
    return {
      defaultOptions: {
        classes: 'kuantic-tooltip',
      },
    }
  },
}
</script>

<style lang='scss' scoped>

</style>

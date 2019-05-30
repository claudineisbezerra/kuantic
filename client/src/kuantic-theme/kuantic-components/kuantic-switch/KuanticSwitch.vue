<template>
  <div class="kuantic-switch">
    <div class="kuantic-switch-option true-option" :class="{'active': value}"
         @click.prevent="setValue(true)">
      <slot name="trueTitle"></slot>
    </div>
    <div class="kuantic-switch-option false-option" :class="{'active': !value}"
         @click.prevent="setValue(false)">
      <slot name="falseTitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kuantic-switch',
  props: {
    value: Boolean,
  },
  mounted () {
    this.$emit('input', this.value)
  },
  methods: {
    setValue (newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>

<style lang="scss">
.kuantic-switch {
  cursor: pointer;
  display: flex;
  flex-direction: row;

  .kuantic-switch-option {
    padding: $kuantic-switch-padding;
    border-top: $kuantic-switch-border-size solid transparent;
    border-bottom: $kuantic-switch-border-size solid $kuantic-switch-bg;
    background-color: transparent;
    transition: all 0.15s ease;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      color: $white;
      background-color: $kuantic-switch-bg;
    }

    &:not(.active):hover {
      color: $brand-primary;
    }
  }
}
</style>

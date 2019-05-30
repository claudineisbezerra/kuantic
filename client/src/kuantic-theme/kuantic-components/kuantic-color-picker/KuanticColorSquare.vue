<template>
  <div class="kuantic-color-square" :style="{'background-color': value}"></div>
</template>

<script>
export default {
  name: 'kuantic-color-square',
  props: {
    value: {
      required: true,
    },
  },
}
</script>

<style lang='scss'>
.kuantic-color-square {
  height: 48px;
  width: 48px;
}
</style>

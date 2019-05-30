<template>
  <component :is="iconComponent"/>
</template>

<script>
import { kuanticIcons } from './kuantic-icons'

export default {
  name: 'kuantic-icon',
  props: {
    icon: {
      validator: (icon) => {
        return icon in kuanticIcons
      },
    },
  },
  computed: {
    iconComponent () {
      return kuanticIcons[this.icon]
    },
  },
}
</script>

<style lang="scss">
.kuantic-icon {

}
</style>

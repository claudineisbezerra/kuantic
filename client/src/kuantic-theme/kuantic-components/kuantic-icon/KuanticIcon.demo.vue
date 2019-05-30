<template>
  <div class="demo-container">
    <div class="demo-container__item"
         v-for="icon in icons"
         :key="icon"
    >
      <kuantic-icon :icon="icon"/>
    </div>
  </div>
</template>

<script>
import KuanticIcon from './KuanticIcon.vue'
import { kuanticIcons } from './kuantic-icons'

export default {
  components: {
    KuanticIcon,
  },
  computed: {
    icons: () => {
      return Object.keys(kuanticIcons)
    },
  },
}
</script>

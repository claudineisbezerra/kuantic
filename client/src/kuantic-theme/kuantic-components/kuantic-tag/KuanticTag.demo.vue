<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-tag name="Company" removable />
    </div>
  </div>
</template>

<script>
import KuanticTag from './KuanticTag.vue'
import { logMixin } from '../kuantic-popup/quasar/mixins/logMixin'

export default {
  mixins: [logMixin],
  components: {
    KuanticTag,
  },
}
</script>

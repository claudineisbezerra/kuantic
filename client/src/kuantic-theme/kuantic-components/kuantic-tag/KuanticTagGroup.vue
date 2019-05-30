<template>
  <div class="kuantic-tag-group">
    <kuantic-tag
      v-for="(item, index) in value"
      :key="index"
      :name="item.name || item"
      :type="type || item.type"
      :removable="removable"
      @remove="removeTag(index)"
    />
  </div>
</template>

<script>
import KuanticTag from './KuanticTag.vue'

export default {
  name: 'kuantic-tag-group',
  props: {
    removable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
    },
    type: {
      type: String,
      default: '',
    },
  },
  components: {
    KuanticTag,
  },
  methods: {
    removeTag (tagIndex) {
      this.$emit('input', this.value.filter((item, i) => i !== tagIndex))
    },
  },
}
</script>

<style lang="scss">
.kuantic-tag-group {
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <div class="kuantic-tree-root">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'kuantic-tree-root',
  methods: {
    /**
     * @public
     */
    collapse () {
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'kuantic-tree-category') {
            child.collapse()
          }
        })
      })
    },
    /**
     * @public
     */
    expand () {
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'kuantic-tree-category') {
            child.expand()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss">
.kuantic-tree-root {
  padding: 0.3125rem;
  // List items require padding. Somewhat hacky, but the only remaining option is using render functions.
  .kuantic-tree-category + .kuantic-tree-category, .kuantic-tree-node + .kuantic-tree-node, .kuantic-tree-category + .kuantic-tree-node, .kuantic-tree-node + .kuantic-tree-category {
    margin-top: 0.625rem;
  }
}
</style>

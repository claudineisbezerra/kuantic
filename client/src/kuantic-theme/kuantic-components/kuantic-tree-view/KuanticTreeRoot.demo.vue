<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.expand()">
      EXPAND ALL
    </button>
    <button class="btn btn-primary btn-sm" @click="$refs.treeView.collapse()">
      COLLAPSE ALL
    </button>

    <kuantic-tree-root
      ref="treeView"
    >
      <kuantic-tree-category
        label="Category text"
        isOpen
      >
        <kuantic-tree-node>
          Node text
        </kuantic-tree-node>
        <kuantic-tree-node>
          Node text
        </kuantic-tree-node>
      </kuantic-tree-category>
    </kuantic-tree-root>
  </div>
</template>

<script>
import KuanticTreeRoot from './KuanticTreeRoot.vue'
import KuanticTreeNode from './KuanticTreeNode'
import KuanticTreeCategory from './KuanticTreeCategory'

export default {
  components: { KuanticTreeCategory, KuanticTreeNode, KuanticTreeRoot },
}
</script>

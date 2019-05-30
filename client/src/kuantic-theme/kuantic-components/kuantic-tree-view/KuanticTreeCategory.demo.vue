<template>
  <div
    style="left: 420px; top: 180px; width: 400px; background-color: white; position: absolute">
    <kuantic-tree-category label="Category with icon">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-nutrition"/>
      </div>
      <kuantic-tree-node>
        One
      </kuantic-tree-node>
      <kuantic-tree-node>
        Two
      </kuantic-tree-node>
      <kuantic-tree-node>
        Three
      </kuantic-tree-node>
    </kuantic-tree-category>

    <kuantic-tree-category label="Category open" isOpen>
      <kuantic-tree-node>
        One
      </kuantic-tree-node>
      <kuantic-tree-node>
        Two
      </kuantic-tree-node>
      <kuantic-tree-node>
        Three
      </kuantic-tree-node>
    </kuantic-tree-category>
  </div>
</template>

<script>

import KuanticTreeCategory from './KuanticTreeCategory'
import KuanticTreeNode from './KuanticTreeNode'

export default {
  components: { KuanticTreeNode, KuanticTreeCategory },
}
</script>

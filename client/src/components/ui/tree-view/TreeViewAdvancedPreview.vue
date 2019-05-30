<template>
  <div class="tree-view-advanced-preview">
    <div class="va-row mb4">
      <div class="small-set flex sm6 justify--center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.expand()"
        >
          EXPAND ALL
        </button>
      </div>
      <div class="small-set flex sm6 justify--center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.collapse()"
        >
          COLLAPSE ALL
        </button>
      </div>
    </div>

    <kuantic-tree-root ref="treeView">
      <kuantic-tree-category label="Electronics">
        <kuantic-tree-node>Cellphones</kuantic-tree-node>
        <kuantic-tree-node>Camera Body Kits</kuantic-tree-node>
        <kuantic-tree-node>External HDDs</kuantic-tree-node>
      </kuantic-tree-category>
      <kuantic-tree-category isOpen label="Products">
        <kuantic-tree-category label="Cables">
          <kuantic-tree-node>Audio</kuantic-tree-node>
          <kuantic-tree-node>Video</kuantic-tree-node>
          <kuantic-tree-node>Optical</kuantic-tree-node>
        </kuantic-tree-category>
        <kuantic-tree-node>Monitors</kuantic-tree-node>
        <kuantic-tree-node>Keyboards</kuantic-tree-node>
      </kuantic-tree-category>
      <kuantic-tree-category label="Apparel">
        <kuantic-tree-node>Jackets</kuantic-tree-node>
        <kuantic-tree-node>Pants</kuantic-tree-node>
        <kuantic-tree-node>Skirts</kuantic-tree-node>
      </kuantic-tree-category>
    </kuantic-tree-root>
  </div>
</template>

<script>
export default {
  name: 'tree-view-advanced-preview',
}
</script>

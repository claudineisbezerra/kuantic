<template>
  <kuantic-tree-root>
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
</template>

<script>
export default {
  name: 'tree-view-basic-preview',
}
</script>

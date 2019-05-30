<template>
  <kuantic-tree-root>
    <kuantic-tree-category label="Images">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-images"/>
      </div>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"/>
        </div>
        sick_catz_cuddling.jpg
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"/>
        </div>
        pins-and-needles.jpg
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-image"/>
        </div>
        avatar_50x50.jpg
      </kuantic-tree-node>
    </kuantic-tree-category>
    <kuantic-tree-category label="Music" isOpen>
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-star-outline"/>
      </div>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"/>
        </div>
        Taylor_swift_hello.mp3
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"/>
        </div>
        straight_to_the_bank.wav
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-musical-notes"/>
        </div>
        imagine_dragons_promo.mp3
      </kuantic-tree-node>
    </kuantic-tree-category>
    <kuantic-tree-category label="Miscellaneous">
      <div slot="icon" class="icon">
        <span aria-hidden="true" class="ion ion-md-list"/>
      </div>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-grid"/>
        </div>
        dump.sql
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-help"/>
        </div>
        unknown-file
      </kuantic-tree-node>
      <kuantic-tree-node>
        <div slot="icon" class="icon">
          <span aria-hidden="true" class="ion ion-md-key"/>
        </div>
        secure.key
      </kuantic-tree-node>
    </kuantic-tree-category>
  </kuantic-tree-root>
</template>

<script>
export default {
  name: 'tree-view-icons-preview',
}
</script>

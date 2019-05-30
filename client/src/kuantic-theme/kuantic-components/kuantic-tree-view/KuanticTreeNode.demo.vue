<template>
  <div
    style="left: 420px; top: 180px; background-color: white; position: absolute"
  >
    <kuantic-tree-node>
      <kuantic-checkbox
        slot="checkbox"
        v-model="checkboxValue"
      />
      <div slot="icon" class="icon">
        <span aria-hidden="true"
              class="ion ion-md-nutrition"
        />
      </div>
      Some text
    </kuantic-tree-node>
  </div>
</template>

<script>
import KuanticTreeNode from './KuanticTreeNode.vue'

import KuanticCheckbox from '../kuantic-checkbox/KuanticCheckbox'

export default {
  components: {
    KuanticTreeNode,
    KuanticCheckbox,
  },
  data () {
    return {
      checkboxValue: false,
    }
  },
}
</script>

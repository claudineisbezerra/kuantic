<template>
  <div class="sets-list va-row">
    <div class="flex md12 xs12">
      <div class="va-row">

        <div class="small-set flex lg6 xs12">
          <kuantic-widget :headerText="$t('treeView.basic')">
            <tree-view-basic-preview/>
          </kuantic-widget>
        </div>

        <div class="small-set flex lg6 xs12">
          <kuantic-widget :headerText="$t('treeView.icons')">
            <tree-view-icons-preview/>
          </kuantic-widget>
        </div>
      </div>

      <div class="va-row">
        <div class="small-set flex lg6 xs12">
          <kuantic-widget :headerText="$t('treeView.advanced')">
            <tree-view-advanced-preview/>
          </kuantic-widget>
        </div>

        <div class="small-set flex lg6 xs12">
          <kuantic-widget :headerText="$t('treeView.editable')">
            <tree-view-editable-preview/>
          </kuantic-widget>
        </div>
      </div>
      <div class="small-set flex lg6 xs12">
        <kuantic-widget :headerText="$t('treeView.selectable')">
          <tree-view-selectable-preview/>
        </kuantic-widget>
      </div>

    </div>
  </div>
</template>

<script>
import KuanticWidget
  from '../../../kuantic-theme/kuantic-components/kuantic-widget/KuanticWidget.vue'
import TreeViewBasicPreview from './TreeViewBasicPreview'
import TreeViewIconsPreview from './TreeViewIconsPreview'
import TreeViewSelectablePreview from './TreeViewSelectablePreview'
import TreeViewAdvancedPreview from './TreeViewAdvancedPreview'
import TreeViewEditablePreview from './TreeViewEditablePreview'

export default {
  name: 'tree-view',
  components: {
    TreeViewEditablePreview,
    TreeViewAdvancedPreview,
    TreeViewSelectablePreview,
    TreeViewIconsPreview,
    TreeViewBasicPreview,
    KuanticWidget,
  },
  data () {
    return {
      treeViewData: {},
    }
  },
}
</script>

<style lang="scss">

</style>

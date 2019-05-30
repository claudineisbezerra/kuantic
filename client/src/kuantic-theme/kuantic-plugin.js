import Alert from './kuantic-components/kuantic-alert/KuanticAlert.vue'
import Breadcrumbs
  from './kuantic-components/kuantic-breadcrumbs/KuanticBreadcrumbs.vue'
import Chart from './kuantic-components/kuantic-chart/KuanticChart.vue'
import Chat from './kuantic-components/kuantic-chat/KuanticChat.vue'
import Checkbox from './kuantic-components/kuantic-checkbox/KuanticCheckbox.vue'
import DataTable
  from './kuantic-components/kuantic-datatable/KuanticDataTable.vue'
import Feed from './kuantic-components/kuantic-feed/KuanticFeed.vue'
import MediumEditor
  from './kuantic-components/kuantic-medium-editor/KuanticMediumEditor.vue'
import Modal from './kuantic-components/kuantic-modal/KuanticModal.vue'
import MultiSelect
  from './kuantic-components/kuantic-multi-select/KuanticMultiSelect.vue'
import Popover from './kuantic-components/kuantic-popover/KuanticPopover.vue'
import PreLoader
  from './kuantic-components/kuantic-preloader/KuanticPreLoader.vue'
import ProfileCard
  from './kuantic-components/kuantic-profile-card/KuanticProfileCard.vue'
import ProgressBar
  from './kuantic-components/kuantic-progress-bar/KuanticProgressBar.vue'
import RadioButton
  from './kuantic-components/kuantic-radio-button/KuanticRadioButton'
import Scrollbar
  from './kuantic-components/kuantic-scrollbar/KuanticScrollbar.vue'
import SimpleSelect
  from './kuantic-components/kuantic-simple-select/KuanticSimpleSelect.vue'
import Slider from './kuantic-components/kuantic-slider/KuanticSlider.vue'
import SocialNews
  from './kuantic-components/kuantic-social-news/KuanticSocialNews.vue'
import Switch from './kuantic-components/kuantic-switch/KuanticSwitch.vue'
import Tabs from './kuantic-components/kuantic-tabs/KuanticTabs.vue'
import Tooltip from './kuantic-components/kuantic-tooltip/KuanticTooltip.vue'
import Widget from './kuantic-components/kuantic-widget/KuanticWidget.vue'
import Wizard from './kuantic-components/kuantic-wizard/KuanticWizard.vue'
import TreeRoot from './kuantic-components/kuantic-tree-view/KuanticTreeRoot'
import TreeCategory
  from './kuantic-components/kuantic-tree-view/KuanticTreeCategory'
import TreeNode from './kuantic-components/kuantic-tree-view/KuanticTreeNode'
import DatePicker
  from './kuantic-components/kuantic-date-picker/KuanticDatePicker'
import Card from './kuantic-components/kuantic-card/KuanticCard'
import FileUpload
  from './kuantic-components/kuantic-file-upload/KuanticFileUpload'
import Tag from './kuantic-components/kuantic-tag/KuanticTag'
import TagGroup from './kuantic-components/kuantic-tag/KuanticTagGroup'
import KuanticDropdown
  from './kuantic-components/kuantic-dropdown/KuanticDropdown'

import KuanticToasted from './kuantic-mixins/KuanticToasted'

import Dropdown from './kuantic-directives/Dropdown'
import StickyScroll from './kuantic-directives/StickyScroll'

import KuanticAccordion
  from './kuantic-components/kuantic-collapse/KuanticAccordion'
import KuanticCollapse
  from './kuantic-components/kuantic-collapse/KuanticCollapse'

import KuanticTimeline
  from './kuantic-components/kuantic-timelines/KuanticTimeline'
import KuanticTimelineItem
  from './kuantic-components/kuantic-timelines/KuanticTimelineItem'
import KuanticPopup
  from './kuantic-components/kuantic-popup/quasar/components/popup/KuanticPopup.vue'

import KuanticContainer from './kuantic-components/kuantic-grid/VGrid/Container'
import VuestVaLayout from './kuantic-components/kuantic-grid/VGrid/Layout'
import KuanticFlex from './kuantic-components/kuantic-grid/VGrid/Flex'

import { installQuasarPlatform } from './kuantic-components/kuantic-popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar kuantic platform object that holds needed values.
installQuasarPlatform()

const KuanticPlugin = {
  install (Vue, options) {
    [
      Alert,
      Breadcrumbs,
      Chart,
      Chat,
      Checkbox,
      DataTable,
      Feed,
      Modal,
      MultiSelect,
      PreLoader,
      ProfileCard,
      ProgressBar,
      RadioButton,
      Scrollbar,
      SimpleSelect,
      Slider,
      SocialNews,
      Switch,
      Tabs,
      Widget,
      Wizard,
      MediumEditor,
      Tooltip,
      Popover,
      TreeRoot,
      TreeCategory,
      TreeNode,
      FileUpload,
      KuanticDropdown,
      DatePicker,
      Card,
      Tag,
      TagGroup,
      KuanticAccordion,
      KuanticCollapse,
      KuanticTimeline,
      KuanticTimelineItem,
      KuanticPopup,
      KuanticContainer,
      VuestVaLayout,
      KuanticFlex,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    Vue.mixin(KuanticToasted)

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default KuanticPlugin

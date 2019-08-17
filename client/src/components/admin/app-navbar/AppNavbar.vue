<template>
  <kuantic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <!-- <span slot="logo">
      <icon-kletter/>
    </span> -->
    <span slot="logo">
      <kuantic-icon-kuantic/>
    </span>
    <span slot="center">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:contato@kuantic.com.br">contato@kuantic.com.br</a>
    </span>

    <message-dropdown class="col nav-item"/>
    <notification-dropdown class="col nav-item"/>
    <language-dropdown class="col nav-item"/>
    <profile-dropdown class="col nav-item"/>
  </kuantic-navbar>

</template>

<script>
import IconKletter from '../../../kuantic-theme/kuantic-components/kuantic-icon/IconKletter'
import KuanticIconKuantic
  from '../../../kuantic-theme/kuantic-components/kuantic-icon/KuanticIconKuantic'
import KuanticNavbar
  from '../../../kuantic-theme/kuantic-components/kuantic-navbar/KuanticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',

  components: {
    IconKletter,
    KuanticIconKuantic,
    KuanticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>

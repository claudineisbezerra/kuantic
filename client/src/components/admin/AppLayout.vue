<template>
  <kuantic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content va-layout gutter--lg fluid" role="main">
      <app-breadcrumbs/>
      <kuantic-pre-loader v-show="isLoading" class="pre-loader"/>
      <router-view/>
    </main>
    <span slot="footer">
      ©2019. Made by&nbsp;<a href="https://kuantic.com.br" target="_blank"> Kuantic</a>
    </span>
  </kuantic-layout>
</template>

<script>
import KuanticLayout
  from '../../kuantic-theme/kuantic-components/kuantic-layout/KuanticLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from '../../kuantic-theme/kuantic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    KuanticLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs,
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>

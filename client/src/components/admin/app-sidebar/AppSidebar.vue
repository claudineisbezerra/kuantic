<template>
  <kuantic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.planning') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'sales-projection' }">
          <span slot="title">
            <span>{{ $t('menu.salesProjection') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.purchase') }}</span>
        </span>
        <sidebar-link :to="{ name: 'best-sellers' }">
          <span slot="title">
            <span>{{ $t('menu.bestSellers') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'abc-curve' }">
          <span slot="title">
            <span>{{ $t('menu.abcCurve') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'nos-list' }">
          <span slot="title">
            <span>{{ $t('menu.nosList') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'product-grids' }">
          <span slot="title">
            <span>{{ $t('menu.productGrids') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'monthly-budget' }">
          <span slot="title">
            <span>{{ $t('menu.monthlyBudget') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'repurchase' }">
          <span slot="title">
            <span>{{ $t('menu.repurchase') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.pricing') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'matrix-pricing' }">
          <span slot="title">
            <span>{{ $t('menu.matrixPricing') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'campaign-pricing' }">
          <span slot="title">
            <span>{{ $t('menu.campaignPricing') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'stock-pricing' }">
          <span slot="title">
            <span>{{ $t('menu.stockPricing') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'competition-by-product' }">
          <span slot="title">
            <span>{{ $t('menu.competitionByProduct') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'competition-by-portfolio' }">
          <span slot="title">
            <span>{{ $t('menu.competitionByPortfolio') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.marketing') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-analytics' }">
          <span slot="title">
            <span>{{ $t('menu.googleAnalytics') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'facebook-twitter' }">
          <span slot="title">
            <span>{{ $t('menu.facebookTwitter') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'remarketing' }">
          <span slot="title">
            <span>{{ $t('menu.remarketing') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.settings') }}</span>
        </span>
        <sidebar-link :to="{ name: 'configurations' }">
          <span slot="title">
            <span>{{ $t('menu.configurations') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'dailyindicators' }">
          <span slot="title">
            <span>{{ $t('menu.dailyindicators') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'summaryindicators' }">
          <span slot="title">
            <span>{{ $t('menu.summaryindicators') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-auth"></span>
          <span>{{ $t('menu.profile') }}</span>
        </span>
        <template v-if="isAuthorized && user && Object.keys(user).length > 0">
          <template v-for="option in options">
            <template v-if="option.isSignedInLink">
              <sidebar-link :key="option.name" :to="{ name: option.redirectTo }">
                <span slot="title">
                  <span>{{ $t(`menu.${option.name}`) }}</span>
                </span>
              </sidebar-link>
            </template>
          </template>
        </template>
        <template v-else>
          <template v-for="option in options">
            <template v-if="!option.isSignedInLink">
              <sidebar-link :key="option.name" :to="{ name: option.redirectTo }">
                <span slot="title">
                  <span>{{ $t(`menu.${option.name}`) }}</span>
                </span>
              </sidebar-link>
            </template>
          </template>
        </template>
      </sidebar-link-group>

      <sidebar-link
        :to="{ name: 'about' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon">
            <i class="fa fa-question icon-left input-icon"/>
          </span>
          <span>{{ $t('menu.about') }}</span>
        </span>
      </sidebar-link>

      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-statistics"></span>
          <span>{{ $t('menu.statistics') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">
            <span>{{ $t('menu.charts') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>{{ $t('menu.progressBars') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-forms"></span>
          <span>{{ $t('menu.forms') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">
            <span>{{ $t('menu.formElements') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizards' }">
          <span slot="title">
            <span>{{ $t('menu.formWizards') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">
            <span>{{ $t('menu.mediumEditor') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-tables"></span>
          <span>{{ $t('menu.tables') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-ui-elements"></span>
          <span>{{ $t('menu.uiElements') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'typography' }">
          <span slot="title">
            <span>{{ $t('menu.typography') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'buttons' }">
          <span slot="title">
            <span>{{ $t('menu.buttons') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'collapse' }">
          <span slot="title">
            <span>{{ $t('menu.collapse') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'color-pickers' }">
          <span slot="title">
            <span>{{ $t('menu.colorPickers') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'filters' }">
          <span slot="title">
            <span>{{ $t('menu.filters') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'timelines' }">
          <span slot="title">
            <span>{{ $t('menu.timelines') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'notifications' }">
          <span slot="title">
            <span>{{ $t('menu.notifications') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'icon-sets' }">
          <span slot="title">
            <span>{{ $t('menu.icons') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spinners' }">
          <span slot="title">
            <span>{{ $t('menu.spinners') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'grid' }">
          <span slot="title">
            <span>{{ $t('menu.grid') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'modals' }">
          <span slot="title">
            <span>{{ $t('menu.modals') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'file-upload' }">
          <span slot="title">
            <span>{{ $t('menu.fileUpload') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tags' }">
          <span slot="title">
            <span>{{ $t('menu.tags') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tree-view' }">
          <span slot="title">
            <span>{{ $t('menu.treeView') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'cards' }">
          <span slot="title">
            <span>{{ $t('menu.cards') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-extras"></span>
          <span>{{ $t('menu.extra') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-maps"></span>
          <span>{{ $t('menu.maps') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-maps' }">
          <span slot="title">
            <span>{{ 'Google Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'yandex-maps' }">
          <span slot="title">
            <span>{{ 'Yandex Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'leaflet-maps' }">
          <span slot="title">
            <span>{{ 'Leaflet Maps' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'bubble-maps' }">
          <span slot="title">
            <span>{{ $t('Bubble Maps') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'line-maps' }">
          <span slot="title">
            <span>{{ $t('Line Maps') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon kuantic-icon kuantic-icon-files"></span>
          <span>{{ $t('menu.pages') }}</span>
        </span>
        <sidebar-link
          :to="{ name: '404-pages' }">
          <span slot="title">
            <span>{{ $t('404 Pages') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

    </template>
  </kuantic-sidebar>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import KuanticSidebar
  from '../../../kuantic-theme/kuantic-components/kuantic-sidebar/KuanticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    KuanticSidebar,
    SidebarLink,
    SidebarLinkGroup,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Array,
      default: () => [
        {
          name: 'myProfile',
          redirectTo: 'my-profile',
          isSignedInLink: true
        },
        {
          name: 'login',
          redirectTo: 'login',
          isSignedInLink: false
        },
        {
          name: 'signup',
          redirectTo: 'signup',
          isSignedInLink: false
        },
        {
          name: 'logout',
          redirectTo: 'login',
          isSignedInLink: true
        },
      ],
    },
  },
  computed: {
    ...mapGetters(['getUserData', 'isAuthorized']),
    user () {
      return this.getUserData
    }
  },
}

</script>

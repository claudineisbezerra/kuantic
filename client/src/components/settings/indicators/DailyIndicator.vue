<template>
  <div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('dailyindicators.dailyindicators_title')">
          <kuantic-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="indicators"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="tableFields"
            :filterInputLabel="$t('repurchase.filter_label')"
            :sortFunctions="sortFunctions"
            :queryParams="queryParams"
            >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </kuantic-data-table>
        </kuantic-widget>
      </div>
    </div>

  </div>
</template>


<script>
import Vue from 'vue'
import { SpringSpinner } from 'epic-spinners'
import FieldsDefinition from './table/data/daily-fields-definition'
import ItemsPerPageDefinition from './table/data/items-per-page-definition'
import QueryParams from './table/data/query-params'
import DataTableStyles from './table/data/data-table-styles'

import axios from 'axios'
import _ from 'lodash'
import store from 'vuex-store'
import { mapActions } from 'vuex'
import setAuthToken from 'utils/authToken'

export default {
  name: 'dailyindicators',
  components: {
    SpringSpinner
  },
  data () {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      tableFields: FieldsDefinition.tableFields,
      itemsPerPage: ItemsPerPageDefinition.itemsPerPage,
      sortFunctions: FieldsDefinition.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      defaultItemsPerPage: 6,
      queryParams: QueryParams,
      indicators: []
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),

    clear (field) {
      this[field] = ''
    },
    composeDailyIndicators () {
      this.errors = []
      axios.get('/api/admin/indicator/composeDailyIndicators')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          this.indicators = res.data.indicators
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    }
  },
  mounted () {
    console.log('Indicator mounted.')
  },
  created () {
    this.$nextTick(() => {
      this.composeDailyIndicators ()
    })
  },
}
</script>

<style lang="scss">

.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>

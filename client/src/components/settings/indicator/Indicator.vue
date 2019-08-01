<template>
  <div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('indicator.title_by_product_type')">
          <kuantic-editable-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="indicator.product_types"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="tableFields"
            :filterInputLabel="$t('purchase.filter_label')"
            :sortFunctions="sortFunctions"
            :queryParams="queryParams"
            @kuantic:cell-changed="updateIndicator"
            @kuantic:delete-item="removeIndicator"
            >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </kuantic-editable-data-table>
        </kuantic-widget>
      </div>
    </div>

  </div>
</template>


<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
import { SpringSpinner } from 'epic-spinners'
import FieldsDefinition from './table/data/fields-definition'
import ItemsPerPageDefinition from './table/data/items-per-page-definition'
import QueryParams from './table/data/query-params'
import DataTableStyles from './table/data/data-table-styles'

import axios from 'axios'
import _ from 'lodash'
import store from 'vuex-store'
import { mapActions } from 'vuex'
import setAuthToken from 'utils/authToken'

export default {
  name: 'indicator',
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
      indicator: {}
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),

    clear (field) {
      this[field] = ''
    },
    getIndicators () {
      this.errors = []
      console.log('getIndicators...')
      axios.get('/api/admin/indicator/getIndicators')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          console.log('res.data.indicator:', res.data.indicator)
          this.indicator = res.data.indicator
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    composeIndicators () {
      this.errors = []
      console.log('composeIndicators...')
      axios.get('/api/admin/indicator/composeIndicators')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          console.log('res.data.indicator:', res.data.indicator)
          this.indicator = res.data.indicator
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    updateIndicator (item) {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/admin/indicator/update', item)
            .then((res) => {
              if (res.data.errors) {
                for (const error of res.data.errors) {
                  const [key] = Object.keys(error)
                  const [value] = Object.values(error)
                  this.errors.push({ key, value })
                }
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    removeIndicator (_id) {
      this.errors = []
      console.log('removeIndicator _id:', _id)
      if (! _id) return
      axios.delete('/api/admin/indicator/remove',{ params: {_id: _id} })
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
          console.log('removeIndicator this.errors:', this.errors)
        } else {
          console.log('res.data.indicator:', res.data.indicator)
          this.indicator = res.data.indicator
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
      this.composeIndicators ()
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

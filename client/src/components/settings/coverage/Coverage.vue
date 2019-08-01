<template>
  <div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('coverage.title_by_product_type')">
          <kuantic-editable-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="coverage.product_types"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="tableFields"
            :filterInputLabel="$t('purchase.filter_label')"
            :sortFunctions="sortFunctions"
            :queryParams="queryParams"
            @kuantic:cell-changed="updateCoverage"
            @kuantic:delete-item="removeCoverage"
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
  name: 'coverage',
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
      coverage: {}
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),

    clear (field) {
      this[field] = ''
    },
    getCoverages () {
      this.errors = []
      axios.get('/api/admin/coverage/getCoverages')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          console.log('res.data.coverage:', res.data.coverage)
          this.coverage = res.data.coverage
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    updateCoverage (item) {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/admin/coverage/update', item)
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
    removeCoverage (_id) {
      this.errors = []
      console.log('removeCoverage _id:', _id)
      if (! _id) return
      axios.delete('/api/admin/coverage/remove',{ params: {_id: _id} })
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
          console.log('removeCoverage this.errors:', this.errors)
        } else {
          // console.log('res.data:', res.data)
          console.log('res.data.coverage:', res.data.coverage)
          this.coverage = res.data.coverage
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    }
  },
  mounted () {
    console.log('Coverage mounted.')
  },
  created () {
    this.$nextTick(() => {
      this.getCoverages ()
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

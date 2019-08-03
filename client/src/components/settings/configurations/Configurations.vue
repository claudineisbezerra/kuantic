<template>
  <div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('coverage.title_by_product_type')">
          <kuantic-editable-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="configurations.coverages"
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
  name: 'configurations',
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
      configurations: {}
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),

    clear (field) {
      this[field] = ''
    },
    getConfigs () {
      this.errors = []
      axios.get('/api/admin/config/getConfigs')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          this.configurations = res.data.configurations
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    updateCoverage (item) {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/admin/config/updateCoverage', item)
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
      if (! _id) return
      axios.delete('/api/admin/config/removeCoverage',{ params: {_id: _id} })
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          this.configurations = res.data.configurations
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
      this.getConfigs ()
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

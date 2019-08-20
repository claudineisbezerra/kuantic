<template>
  <div>
    <!-- Coverages -->
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('settings.coverages_params_title')">
          <kuantic-datatable-coverage
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="configurations.coverages"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="coverageTableFields"
            :filterInputLabel="$t('settings.filter_label')"
            :sortFunctions="coverageSortFunctions"
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
          </kuantic-datatable-coverage>
        </kuantic-widget>
      </div>
    </div>

    <!-- Calculation Params -->
    <div class="va-row" v-if="configurations.calculation">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('settings.calculation_params_title')">
          <!-- date_of_calculation -->
          <div class="va-row">
            <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <input  name="title"
                          readonly="readonly"
                          v-model="configurations.calculation.date_of_calculation.title"
                          @change="updateDaysOfCalculation(configurations.calculation.date_of_calculation.title)"
                          />
                </div>
              </div>
            </div>

            <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <kuantic-date-picker-ptbr
                    name="date_of_calculation"
                    v-model="configurations.calculation.date_of_calculation.at_date"
                  />
                  <label class="control-label" for="date_of_calculation">
                    {{'settings.date_of_calculation' | translate}}
                  </label>
                  <i class="bar"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- days_of_calculation -->
          <div class="va-row">
            <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <input  name="title"
                          readonly="readonly"
                          v-model="configurations.calculation.days_of_calculation.title"
                          @change="updateDaysOfCalculation(configurations.calculation.days_of_calculation.title)"
                          />
                </div>
              </div>
            </div>

            <!-- <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <kuantic-date-picker-ptbr
                    name="start_date"
                    v-model="configurations.calculation.days_of_calculation.start_date"
                    @on-change="updateDaysOfCalculation(configurations.calculation.days_of_calculation)"
                  />
                  <label class="control-label" for="start_date">
                    {{'settings.start_date' | translate}}
                  </label>
                  <i class="bar"></i>
                </div>
              </div>
            </div> -->

            <!-- <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <kuantic-date-picker-ptbr
                    name="end_date"
                    v-model="configurations.calculation.days_of_calculation.end_date"
                    @on-change="updateDaysOfCalculation(configurations.calculation.days_of_calculation)"
                  />
                  <label class="control-label" for="end_date">
                    {{'settings.end_date' | translate}}
                  </label>
                  <i class="bar"></i>
                </div>
              </div>
            </div> -->

            <div class="flex md2">
              <div class="form-group">
                <div class="input-group">
                  <input  name="number_of_days"
                          v-model="configurations.calculation.days_of_calculation.number_of_days"
                          @change="updateDaysOfCalculation(configurations.calculation.days_of_calculation)"
                          v-validate="'required|numeric'"/>
                  <label class="control-label" for="number_of_days">
                    {{'settings.number_of_days' | translate}}
                  </label>
                  <i class="bar"></i>
                  <small v-show="veeErrors.has('number_of_days')" class="help text-danger">
                    {{ veeErrors.first('number_of_days') }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>

    <!-- Calculation Ranges -->
    <!-- <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('settings.calculation_params_title')">
          <kuantic-datatable-range
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="configurations.ranges"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="rangeTableFields"
            :filterInputLabel="$t('settings.filter_label')"
            :sortFunctions="rangeSortFunctions"
            :queryParams="queryParams"
            @kuantic:cell-changed="updateDaysOfCalculation"
            @kuantic:delete-item="removeDaysOfCalculation"
            >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </kuantic-datatable-range>
        </kuantic-widget>
      </div>
    </div> -->

  </div>
</template>


<script>
import Vue from 'vue'
import BadgeColumn from 'components/tables/BadgeColumn.vue'
import { SpringSpinner } from 'epic-spinners'
import CoverageFieldsDefinition from './table/data/coverage-fields-definition'
import RangeFieldsDefinition from './table/data/range-fields-definition'
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
    BadgeColumn,
    SpringSpinner
  },
  data () {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      coverageTableFields: CoverageFieldsDefinition.tableFields,
      coverageSortFunctions: CoverageFieldsDefinition.sortFunctions,
      rangeTableFields: RangeFieldsDefinition.tableFields,
      rangeSortFunctions: RangeFieldsDefinition.sortFunctions,
      itemsPerPage: ItemsPerPageDefinition.itemsPerPage,
      paginationPath: '',
      defaultTablePerPage: 5,
      defaultItemsPerPage: 5,
      queryParams: QueryParams,
      configurations: {}
    }
  },
  watch: {
    'configurations.calculation.date_of_calculation.at_date': function (newValue, oldValue) {
      // workaround to solve vue-flatpickr-component event problems
      if (oldValue !== 'undefined' && newValue !== oldValue) {
        this.updateDateOfCalculation(newValue)
      }
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
    },
    updateDaysOfCalculation (item) {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/admin/config/updateDaysOfCalculation', item)
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
    removeDaysOfCalculation (_id) {
      this.errors = []
      if (! _id) return
      axios.delete('/api/admin/config/removeDaysOfCalculation',{ params: {_id: _id} })
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
    /**
     * @description Convert string date to IsoDate
     * @param strDate String formatted date (i.e. DD-MM-AAAA)
     * @param fromLocalization String localization (pt-br)
     * @returns { Date } new Date()
     */
    parseToLocalizeDate (strDate, fromLocalization) {
      if (!strDate || !fromLocalization) return null
      let p;
      if (fromLocalization === 'pt-br') {
        p = strDate.match(/^(\d{1,2})\-?(\d{1,2})?\-?(\d{2,4})?$/)
        if (!p) return null
      }
      let dt = new Date(parseInt(p[3] || new Date().getFullYear()), parseInt(p[2] || (new Date().getMonth() + 1)) - 1, parseInt(p[1]), 0, 0, 0, 0)
      return dt
    },
    updateDateOfCalculation (dt) {
      let at_date
      if (dt) {
        at_date = this.parseToLocalizeDate(dt, 'pt-br')
      } else {
        at_date = new Date();
      }
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/admin/config/updateDateOfCalculation',{ at_date: at_date })
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
    removeDateOfCalculation (_id) {
      this.errors = []
      if (! _id) return
      axios.delete('/api/admin/config/removeDateOfCalculation',{ params: {_id: _id} })
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

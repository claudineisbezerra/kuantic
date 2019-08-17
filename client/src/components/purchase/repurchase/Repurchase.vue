<template>
  <div class="repurchase">
    <div class="va-row">
      <div class="flex md12">
        <kuantic-widget :headerText="'repurchase.filter_title' | translate">
          <form @submit.prevent="handleRepurchaseSubmit" name="repurchase">
            <div class="va-row">
              <div class="flex md6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        id="repurchase_title"
                        name="repurchase_title"
                        v-model="repurchaseTitle"
                        />
                      <label class="control-label" for="repurchase_title">
                        {{'repurchase.repurchase_title' | translate}}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div v-if="repurchaseId"
                   class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        id="repurchase_id"
                        name="repurchase_id"
                        readonly="readonly"
                        v-model="repurchaseId"
                        />
                      <label class="control-label control-label-as-title" for="repurchase_id">
                        {{'repurchase.repurchase_id' | translate}}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md2">
                <fieldset>
                  <div class="form-group form_group-adjust">
                    <div class="input-group">
                      <div class="control-label-adjust"></div>
                      <label class="control-label control-label-as-title">
                        {{'repurchase.collection' | translate}}
                      </label>
                      <kuantic-checkbox-input
                        v-for="(collection, id) in collections"
                        :key="id"
                        :label="collection.title"
                        :val="(collection.title).toString()"
                        v-model="checkedCollections"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2">
                <fieldset>
                  <div class="form-group form_group-adjust">
                    <div class="input-group">
                      <div class="control-label-adjust"></div>
                      <label class="control-label control-label-as-title">
                        {{'repurchase.product_type' | translate}}
                      </label>
                      <kuantic-checkbox-input
                        v-for="(productType, id) in productTypes"
                        :key="id"
                        :label="productType.title"
                        :val="(productType.title).toString()"
                        v-model="checkedProductTypes"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2">
                <fieldset>
                  <div class="form-group form_group-adjust">
                    <div class="input-group">
                      <div class="control-label-adjust"></div>
                      <label class="control-label control-label-as-title">
                        {{'repurchase.price_range' | translate}}
                      </label>
                      <kuantic-checkbox-input
                        v-for="(priceRange, id) in priceRanges"
                        :key="id"
                        :label="setPriceRangeLabel(priceRange)"
                        :val="setPriceRangeValue(priceRange)"
                        v-model="checkedPriceRanges"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2">
                <fieldset>
                  <div class="form-group" :class="{'has-error': veeErrors.has('planned_budget')}">
                    <div class="input-group">
                      <input
                        id="planned_budget"
                        name="planned_budget"
                        v-model="plannedBudget"
                        v-money="money_plannedBudget"
                        v-validate="'positive_number'"
                        />
                      <label class="control-label" for="planned_budget">
                        {{'repurchase.planned_budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('planned_budget')" class="help text-danger">
                        {{ veeErrors.first('planned_budget') }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2">
                <fieldset>
                  <div class="form-group" :class="{'has-error': veeErrors.has('executed_budget')}">
                    <div class="input-group">
                      <input
                        id="executed_budget"
                        name="executed_budget"
                        v-model="executedBudget"
                        v-money="money_executedBudget"
                        v-validate="'ge_zeros'"
                        />
                      <label class="control-label" for="executed_budget">
                        {{'repurchase.executed_budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('executed_budget')" class="help text-danger">
                        {{ veeErrors.first('executed_budget') }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="va-row">
              <div class="flex sm6 lg6 xl3">
                <button class="btn btn-primary">
                  {{'repurchase.compute' | translate}}
                </button>
              </div>
            </div>

          </form>
        </kuantic-widget>
      </div>
    </div>

   <!-- PLANNED BUDGET -->
    <div v-if="repurchase &&
              Object.keys(repurchase).length > 0 &&
              repurchase.repurchases &&
              repurchase.repurchases.planned_items &&
              Object.keys(repurchase.repurchases.planned_items).length > 0">
      <div class="va-row">
        <div class="flex md12 xs12">
          <kuantic-widget :headerText="$t('repurchase.planned_budget_filter_result')">
            <div>
              <div class="va-row">
                <kuantic-data-table
                  :apiUrl="apiUrl"
                  :apiMode="apiMode"
                  :data="repurchase.repurchases.planned_items"
                  :itemsPerPage="itemsPerPage"
                  :defaultPerPage="defaultItemsPerPage"
                  :tableFields="plannedTableFields"
                  :filterInputLabel="$t('repurchase.filter_label')"
                  :sortFunctions="plannedSortFunctions"
                  :queryParams="queryParams">
                  <spring-spinner
                    slot="loading"
                    :animation-duration="2500"
                    :size="70"
                    color="#4ae387"
                  />
                </kuantic-data-table>
              </div>
              <div class="va-row">
                <div class="flex sm6 lg6 xl3">
                  <button class="btn btn-primary dropdown-toggle theme-toggle" type="button">
                    {{'repurchase.download' | translate}}
                    <i class="ion-ios-arrow-down arrow-down"></i>
                    <kuantic-dropdown position="bottom">
                      <template>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.planned_items,
                                                  repurchase.params.repurchase_id,
                                                  'csv')">
                          {{'repurchase.download_csv' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.planned_items,
                                                  repurchase.params.repurchase_id,
                                                  'xls')">
                          {{'repurchase.download_xls' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.planned_items,
                                                  repurchase.params.repurchase_id,
                                                  'json')">
                          {{'repurchase.download_json' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.planned_items,
                                                  repurchase.params.repurchase_id,
                                                  'txt')">
                          {{'repurchase.download_txt' | translate}}
                        </a>
                      </template>
                    </kuantic-dropdown>
                  </button>
                </div>
              </div>
            </div>
          </kuantic-widget>
        </div>
      </div>
    </div>


    <div class="va-row"
         v-if="repurchasePlannedBudgetGroupedByCollectionProductType && repurchasePlannedBudgetGroupedByCollectionProductType.length > 0">
      <template v-for="(collectionProductType, id) in repurchasePlannedBudgetGroupedByCollectionProductType">
        <div :key="id" class="flex md6 xs12">
          <kuantic-widget class="chart-widget" :headerText="$t('repurchase.repurchase_suggested') +': '+ collectionProductType.product_type_title+' > '+collectionProductType.collection_title">
            <kuantic-chart :data="setByCollectionProductTypeChartData(collectionProductType)" type="vertical-bar"/>
          </kuantic-widget>
        </div>
      </template>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12"
           v-if="repurchasePlannedBudgetGroupedByProductType && repurchasePlannedBudgetGroupedByProductType.length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('repurchase.header_by_product_type_summary_suggested')">
          <kuantic-chart :data="setByProductTypeChartData(repurchasePlannedBudgetGroupedByProductType, $root.CONSTANT.BUDGET.TYPE.PLANNED)" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

    <!-- EXECUTED BUDGET -->
    <div v-if="repurchase &&
              Object.keys(repurchase).length > 0 &&
              repurchase.repurchases &&
              repurchase.repurchases.executed_items &&
              Object.keys(repurchase.repurchases.executed_items).length > 0">
      <div class="va-row">
        <div class="flex md12 xs12">
          <kuantic-widget :headerText="$t('repurchase.executed_budget_filter_result')">
            <div>
              <div class="va-row">
                <kuantic-data-table
                  :apiUrl="apiUrl"
                  :apiMode="apiMode"
                  :data="repurchase.repurchases.executed_items"
                  :tableFields="executedTableFields"
                  :defaultPerPage="defaultItemsPerPage"
                  :filterInputLabel="$t('repurchase.filter_label')"
                  :sortFunctions="executedSortFunctions"
                  :queryParams="queryParams">
                  <spring-spinner
                    slot="loading"
                    :animation-duration="2500"
                    :size="70"
                    color="#4ae387"
                  />
                </kuantic-data-table>
              </div>
              <div class="va-row">
                <div class="flex sm6 lg6 xl3">
                  <button class="btn btn-primary dropdown-toggle theme-toggle" type="button">
                    {{'repurchase.download' | translate}}
                    <i class="ion-ios-arrow-down arrow-down"></i>
                    <kuantic-dropdown position="bottom">
                      <template>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.executed_items,
                                                  repurchase.params.repurchase_id,
                                                  'csv')">
                          {{'repurchase.download_csv' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.executed_items,
                                                  repurchase.params.repurchase_id,
                                                  'xls')">
                          {{'repurchase.download_xls' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.executed_items,
                                                  repurchase.params.repurchase_id,
                                                  'json')">
                          {{'repurchase.download_json' | translate}}
                        </a>
                        <a  class="dropdown-item"
                            href="#"
                            @click="handleExport (repurchase.repurchases.executed_items,
                                                  repurchase.params.repurchase_id,
                                                  'txt')">
                          {{'repurchase.download_txt' | translate}}
                        </a>
                      </template>
                    </kuantic-dropdown>
                  </button>
                </div>
              </div>
            </div>
          </kuantic-widget>
        </div>
      </div>
    </div>

    <div class="va-row">
      <template v-for="(collectionProductType, id) in repurchaseExecutedBudgetGroupedByCollectionProductType">
        <div :key="id" class="flex md6 xs12">
          <kuantic-widget class="chart-widget" :headerText="$t('repurchase.repurchase_todo') +': '+ collectionProductType.product_type_title+' > '+collectionProductType.collection_title">
            <kuantic-chart :data="setByCollectionProductTypeChartData(collectionProductType)" type="vertical-bar"/>
          </kuantic-widget>
        </div>
      </template>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12"
           v-if="repurchaseExecutedBudgetGroupedByProductType  && Object.keys(repurchaseExecutedBudgetGroupedByProductType).length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('repurchase.header_by_product_type_summary_todo')">
          <kuantic-chart :data="setByProductTypeChartData(repurchaseExecutedBudgetGroupedByProductType, $root.CONSTANT.BUDGET.TYPE.EXECUTED)" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import PlannedFields from './table/data/planned-fields-definition'
import ExecutedFields from './table/data/executed-fields-definition'
import ItemsPerPage from './table/data/items-per-page-definition'
import QueryParams from './table/data/query-params'
import DataTableStyles from './table/data/data-table-styles'

import { SpringSpinner } from 'epic-spinners'
import { VMoney } from 'v-money'

import axios from 'axios'
import _ from 'lodash'
import store from 'vuex-store'
import { mapActions } from 'vuex'
import setAuthToken from 'utils/authToken'
import exportFromJSON from 'export-from-json'

export default {
  name: 'repurchase',
  components: {
    SpringSpinner
  },
  directives: {
    money: VMoney
  },
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.email) {
        isValid = this.formFields.email.validated && this.formFields.email.valid
      }
      return isValid
    },
    executed_items () {
      return this.repurchase.repurchases.executed_items
    },
    planned_items () {
      return this.repurchase.repurchases.planned_items
    }
  },
  data () {
    return {
      repurchaseId: null,
      repurchaseTitle: null,
      collections: [],
      productTypes: [],
      priceRanges: [],
      plannedBudget: null,
      executedBudget: null,
      checkedCollections: [],
      checkedProductTypes: [],
      checkedPriceRanges: [],
      money_plannedBudget: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },
      money_executedBudget: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      repurchase: {},
      itemsPerPage: ItemsPerPage.itemsPerPage,
      defaultItemsPerPage: 6,
      plannedTableFields: PlannedFields.tableFields,
      plannedSortFunctions: PlannedFields.sortFunctions,
      executedTableFields: ExecutedFields.tableFields,
      executedSortFunctions: ExecutedFields.sortFunctions,
      queryParams: QueryParams,
      repurchasePlannedBudgetGroupedByCollectionProductType: [],
      repurchaseExecutedBudgetGroupedByCollectionProductType: [],
      repurchasePlannedBudgetGroupedByProductType: [],
      repurchaseExecutedBudgetGroupedByProductType: [],
    }
  },
  watch: {
    repurchase: function (newRepurchase) {
      this.repurchaseTitle = newRepurchase.params.repurchase_title
      this.repurchaseId = newRepurchase.params.repurchase_id
      // this.checkedCollections = newRepurchase.params.collections
      // this.checkedProductTypes = newRepurchase.params.product_types
      // this.checkedPriceRanges = newRepurchase.params.price_ranges
      // this.plannedBudget = newRepurchase.params.planned_budget
      // this.executedBudget = newRepurchase.params.executed_budget
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),

    clear (field) {
      this[field] = ''
    },
    setPriceRangeLabel (priceRange) {
      if (!priceRange) return

      let startAt = priceRange.start_at
      let endAt = priceRange.end_at
      let label = ''
      if (startAt === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL && endAt === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        label = this.$t('repurchase.all_prices')
      }
      if (startAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL && endAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        label = this.$t('repurchase.start') + ' ' + startAt + ' ' + this.$t('repurchase.end') + ' ' + endAt
      }
      if (startAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL && endAt === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        label = this.$t('repurchase.beyond') + ' ' + startAt
      }
      return label
    },
    setPriceRangeValue (priceRange) {
      if (!priceRange) return
      let startAt
      if (priceRange.start_at === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        startAt = this.$root.CONSTANT.PRICE.MAX_RANGE.VALUE
      } else {
        startAt = priceRange.start_at
      }
      let endAt
      if (priceRange.end_at === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        endAt = this.$root.CONSTANT.PRICE.MAX_RANGE.VALUE
      } else {
        endAt = priceRange.end_at
      }
      let val = startAt + '|' + endAt

      return val
    },
    setRepurchaseParams () {
      let param = {
        repurchase_id: null,
        repurchase_title: null,
        collections: [],
        product_types: [],
        price_ranges: [],
        planned_budget: null,
        executed_budget: null,
      }

      if (this.repurchaseId) {
        param.repurchase_id = this.repurchaseId
      }
      if (this.repurchaseTitle) {
        param.repurchase_title = this.repurchaseTitle
      }

      if (this.checkedCollections && this.checkedCollections.length > 0) {
        param.collections = this.checkedCollections
      }

      if (this.checkedProductTypes && this.checkedProductTypes.length > 0) {
        param.product_types = this.checkedProductTypes
      }

      if (this.checkedPriceRanges && this.checkedPriceRanges.length > 0) {
        let priceRanges = []
        for (let i = 0; i < this.checkedPriceRanges.length; i++) {
          let priceRange = { from: null, to: null }
          let itemsArray = _.split(this.checkedPriceRanges[i], '|', 2)
          if (itemsArray.length > 1) {
            let from = itemsArray[0]
            let to = itemsArray[1]
            priceRange.from = from
            priceRange.to = to
            priceRanges.push(priceRange)
          }
        }
        param.price_ranges = priceRanges
      }

      if (this.plannedBudget) {
        let unmaskedPlannedBudget = this.removeCurrencyMask(this.plannedBudget)
        if (parseFloat(unmaskedPlannedBudget) >= 0) {
          param.planned_budget = unmaskedPlannedBudget
        } else {
          param.planned_budget = null
        }
      } else {
        param.planned_budget = null
      }

      if (this.executedBudget && parseFloat(this.removeCurrencyMask(this.executedBudget)) <= 0) {
         if (this.plannedBudget && parseFloat(this.removeCurrencyMask(this.plannedBudget)) > 0) {
           this.executedBudget = this.plannedBudget
         }
      }
      if (this.executedBudget) {
        let unmaskedExecutedBudget = this.removeCurrencyMask(this.executedBudget)
        if (parseFloat(unmaskedExecutedBudget) >= 0) {
          param.executed_budget = unmaskedExecutedBudget
        } else {
          param.executed_budget = null
        }
      } else {
        param.executed_budget = null
      }

      return param
    },
    removeCurrencyMask (value) {
      // Removes all currency symbols and decimal sign ',' and thousands sign '.'
      // eslint-disable-next-line no-useless-escape
      let unmasked = value.replace(/[^\d^\-\.\,\s]+/g, '').replace('.', '').replace(',', '.').trim()
      return unmasked
    },
    handleRepurchaseInit () {
      this.errors = []
      axios.get('/api/admin/purchase/init')
      .then((res) => {
        if (res.data.errors) {
          for (const error of res.data.errors) {
            const [key] = Object.keys(error)
            const [value] = Object.values(error)
            this.errors.push({ key, value })
          }
        } else {
          this.collections = res.data.collections
          this.productTypes = res.data.productTypes
          this.priceRanges = res.data.priceRanges
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    handleRepurchaseSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          let param = this.setRepurchaseParams()
          axios.get('/api/admin/purchase/repurchase',
            { params: {
                repurchase_id: param.repurchase_id,
                repurchase_title: param.repurchase_title,
                collections: JSON.stringify(param.collections),
                product_types: JSON.stringify(param.product_types),
                price_ranges: JSON.stringify(param.price_ranges),
                planned_budget: param.planned_budget,
                executed_budget: param.executed_budget
              }
            }
          )
            .then((res) => {
              if (res.data.errors) {
                for (const error of res.data.errors) {
                  const [key] = Object.keys(error)
                  const [value] = Object.values(error)
                  this.errors.push({ key, value })
                }
              } else {
                this.$nextTick(() => {
                  this.repurchase = {}
                  this.repurchase = res.data.repurchase
                  this.repurchasePlannedBudgetGroupedByCollectionProductType = res.data.repurchasePlannedBudgetGroupedByCollectionProductType
                  this.repurchaseExecutedBudgetGroupedByCollectionProductType = res.data.repurchaseExecutedBudgetGroupedByCollectionProductType
                  this.repurchasePlannedBudgetGroupedByProductType = res.data.repurchasePlannedBudgetGroupedByProductType
                  this.repurchaseExecutedBudgetGroupedByProductType = res.data.repurchaseExecutedBudgetGroupedByProductType
                })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    setByCollectionProductTypeChartData (repurchaseByCollectionProductType) {
      if (!repurchaseByCollectionProductType) return
      if (repurchaseByCollectionProductType.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = _.sample(_.omit(palette, ['transparent','success','white']));

      let labels = []
      labels.push(this.$t('repurchase.inventory_actual'))
      labels.push(this.$t('repurchase.inventory_optimal'))
      labels.push(this.$t('repurchase.repurchase_suggested'))
      labels.push(this.$t('repurchase.repurchase_todo'))

      let data = []
      data.push(repurchaseByCollectionProductType.inventory_quantity)
      data.push(repurchaseByCollectionProductType.inventory_optimal)
      data.push(repurchaseByCollectionProductType.repurchase_planned_quantity_to_buy)
      data.push(repurchaseByCollectionProductType.repurchase_executed_quantity_to_buy)

      let chartData = {
        labels: labels,
        datasets: [
          {
            label: repurchaseByCollectionProductType.product_type_title,
            backgroundColor: backgroundColor,
            borderColor: palette.transparent,
            data: data,
          }
        ]
      }

      return chartData
    },
    setByProductTypeChartData (repurchaseByProductType, budgetType) {
      if (!repurchaseByProductType || !budgetType) return
      if (repurchaseByProductType.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = [palette.info, palette.success, palette.primary, palette.warning]

      let labels = []
      let data = []
      for (let i in repurchaseByProductType) {
        let item = repurchaseByProductType[i]
        let label = item.product_type_title
        labels.push(label)

        let qty = 0;
        if (budgetType === this.$root.CONSTANT.BUDGET.TYPE.PLANNED) {
          qty = item.repurchase_planned_quantity_to_buy
        }
        if (budgetType === this.$root.CONSTANT.BUDGET.TYPE.EXECUTED) {
          qty = item.repurchase_executed_quantity_to_buy
        }
        data.push(qty)

      }
      let chartData = {
        labels: labels,
        datasets: [
          {
            backgroundColor: backgroundColor,
            borderColor: palette.transparent,
            data: data,
          }
        ]
      }

      return chartData
    },
    handleExport (jsonData, defaultName, defaultType) {
      if (!jsonData || !defaultName || !defaultType) return

      let data = jsonData
      let fileName = defaultName
      let exportType = defaultType

      exportFromJSON({ data, fileName, exportType })
    },
  },
  mounted () {
    console.log('Repurchase mounted.')
  },
  created () {
    this.$nextTick(() => {
      this.handleRepurchaseInit ()
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  .overview-tab {
    .explore-row {
      display: none !important;
    }
  }

  .maps-tab {
    height: 500px;
  }
}

.profile-card-widget, .chat-widget {
  width: 100%;
  .widget-body {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
    }
  }
}

.bottom-widgets {
  > div[class^='col'] {
    & > div {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="purchase">
    <div class="va-row">
      <div class="flex md12">
        <kuantic-widget :headerText="'purchase.filter_title' | translate">
          <form @submit.prevent="handlePurchaseSubmit" name="purchase">
            <div class="va-row">
              <div class="flex md2.5">
                <fieldset>
                  <template v-if="collections && collections.length > 0">
                    <kuantic-simple-select
                      name="collections"
                      :label="'purchase.collection' | translate"
                      v-model="chosenCollection"
                      option-key="title"
                      v-bind:options="collections"
                    />
                    <small v-show="veeErrors.has('collections')" class="help text-danger">
                      {{ veeErrors.first('collections') }}
                    </small>
                  </template>

                  <template v-if="productTypes && productTypes.length > 0">
                    <kuantic-simple-select
                      name='productTypes'
                      :label="'purchase.product_type' | translate"
                      v-model="chosenProductType"
                      option-key="title"
                      v-bind:options='productTypes'
                    />
                    <small v-show="veeErrors.has('productTypes')" class="help text-danger">
                      {{ veeErrors.first('productTypes') }}
                    </small>
                  </template>
                </fieldset>
              </div>
              <div class="flex md2.5">
                <fieldset>
                  <div class="form-group" :class="{'has-error': veeErrors.has('price-range')}">
                    <div class="input-group">
                      <kuantic-checkbox
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
              <div class="flex md2.5">
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
                        {{'purchase.planned_budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('planned_budget')" class="help text-danger">
                        {{ veeErrors.first('planned_budget') }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2.5">
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
                        {{'purchase.executed_budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('executed_budget')" class="help text-danger">
                        {{ veeErrors.first('executed_budget') }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2">
                <div class="va-row btn-margin-row">
                  <div class="flex justify--center">
                    <button class="btn btn-sm btn-primary">
                      {{'purchase.compute' | translate}}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </kuantic-widget>
      </div>
    </div>

   <!-- PLANNED BUDGET -->
    <div v-if="purchase &&
              Object.keys(purchase).length > 0 &&
              purchase.purchases &&
              purchase.purchases.planned_items &&
              Object.keys(purchase.purchases.planned_items).length > 0"
         class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('purchase.planned_budget_filter_result')">
          <kuantic-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="purchase.purchases.planned_items"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultItemsPerPage"
            :tableFields="plannedTableFields"
            :filterInputLabel="$t('purchase.filter_label')"
            :sortFunctions="plannedSortFunctions"
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

    <div class="va-row">
      <template v-for="(collectionProductType, id) in purchasePlannedBudgetGroupedByCollectionProductType">
        <div :key="id" class="flex md6 xs12">
          <kuantic-widget class="chart-widget" :headerText="$t('purchase.purchase_suggested') +': '+ collectionProductType.product_type+' > '+collectionProductType.collection_title">
            <kuantic-chart :data="setByCollectionProductTypeChartData(collectionProductType)" type="vertical-bar"/>
          </kuantic-widget>
        </div>
      </template>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12"
           v-if="purchasePlannedBudgetGroupedByProductType && Object.keys(purchasePlannedBudgetGroupedByProductType).length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('purchase.header_by_product_type_summary_suggested')">
          <kuantic-chart :data="setByProductTypeChartData(purchasePlannedBudgetGroupedByProductType, $root.CONSTANT.BUDGET.TYPE.PLANNED)" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

    <!-- EXECUTED BUDGET -->
    <div v-if="purchase &&
              Object.keys(purchase).length > 0 &&
              purchase.purchases &&
              purchase.purchases.executed_items &&
              Object.keys(purchase.purchases.executed_items).length > 0"
         class="va-row">

      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('purchase.executed_budget_filter_result')">
          <kuantic-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="purchase.purchases.executed_items"
            :tableFields="executedTableFields"
            :defaultPerPage="defaultItemsPerPage"
            :filterInputLabel="$t('purchase.filter_label')"
            :sortFunctions="executedSortFunctions"
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

    <div class="va-row">
      <template v-for="(collectionProductType, id) in purchaseExecutedBudgetGroupedByCollectionProductType">
        <div :key="id" class="flex md6 xs12">
          <kuantic-widget class="chart-widget" :headerText="$t('purchase.purchase_todo') +': '+ collectionProductType.product_type+' > '+collectionProductType.collection_title">
            <kuantic-chart :data="setByCollectionProductTypeChartData(collectionProductType)" type="vertical-bar"/>
          </kuantic-widget>
        </div>
      </template>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12"
           v-if="purchaseExecutedBudgetGroupedByProductType  && Object.keys(purchaseExecutedBudgetGroupedByProductType).length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('purchase.header_by_product_type_summary_todo')">
          <kuantic-chart :data="setByProductTypeChartData(purchaseExecutedBudgetGroupedByProductType, $root.CONSTANT.BUDGET.TYPE.EXECUTED)" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import PlannedFields from './table/planned-fields-definition'
import ExecutedFields from './table/executed-fields-definition'
import ItemsPerPage from './table/items-per-page-definition'
import QueryParams from './table/query-params'
import DataTableStyles from './table/data-table-styles'


import { SpringSpinner } from 'epic-spinners'
import { VMoney } from 'v-money'

import axios from 'axios'
import _ from 'lodash'
import store from 'vuex-store'
import { mapActions } from 'vuex'
import setAuthToken from 'utils/authToken'

export default {
  name: 'profile',
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
      return this.purchase.purchases.executed_items
    },
    planned_items () {
      return this.purchase.purchases.planned_items
    }
  },
  data () {
    return {
      collections: [],
      productTypes: [],
      priceRanges: [],
      chosenCollection:{},
      chosenProductType: {},
      plannedBudget: null,
      executedBudget: null,
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
      purchase: {},
      itemsPerPage: ItemsPerPage.itemsPerPage,
      defaultItemsPerPage: 6,
      plannedTableFields: PlannedFields.tableFields,
      plannedSortFunctions: PlannedFields.sortFunctions,
      executedTableFields: ExecutedFields.tableFields,
      executedSortFunctions: ExecutedFields.sortFunctions,
      queryParams: QueryParams,
      purchasePlannedBudgetGroupedByCollectionProductType: [],
      purchaseExecutedBudgetGroupedByCollectionProductType: [],
      purchasePlannedBudgetGroupedByProductType: [],
      purchaseExecutedBudgetGroupedByProductType: [],
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
        label = this.$t('purchase.all_prices')
      }
      if (startAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL && endAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        label = this.$t('purchase.start') + ' ' + startAt + ' ' + this.$t('purchase.end') + ' ' + endAt
      }
      if (startAt !== this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL && endAt === this.$root.CONSTANT.PRICE.MAX_RANGE.LABEL) {
        label = this.$t('purchase.beyond') + ' ' + startAt
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
    setPurchaseParams () {
      let param = {
        purchase_id: null, // Será gerado automáticamente no SERVER
        purchase_title: 'Default title', // todo: Definido manuamente (por enquanto)
        collections: [],
        product_types: [],
        price_ranges: [],
        planned_budget: null,
        executed_budget: null,
      }

      if (this.chosenCollection && Object.keys(this.chosenCollection).length > 0) {
        let collections = []
        let collection = {}
        Object.entries(this.chosenCollection).forEach(entry => {
          let key = entry[0];
          let value = entry[1];
          collection[key] = value
        });
        collections.push(collection)
        param.collections = collections
      }

      if (this.chosenProductType && Object.keys(this.chosenProductType).length > 0) {
        let productTypes = []
        let productType = {}
        Object.entries(this.chosenProductType).forEach(entry => {
          let key = entry[0];
          let value = entry[1];
          productType[key] = value
        });
        productTypes.push(productType)
        param.product_types = productTypes
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
    handlePurchaseInit () {
      this.errors = []
      axios.get('/api/admin/intelligence/init')
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
    handlePurchaseSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          let param = this.setPurchaseParams()
          axios.get('/api/admin/intelligence/purchase',
            { params: {
                purchase_id: param.purchase_id,
                purchase_title: param.purchase_title,
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
                  this.purchase = {}
                  this.purchase = res.data.purchase
                  this.purchasePlannedBudgetGroupedByCollectionProductType = res.data.purchasePlannedBudgetGroupedByCollectionProductType
                  this.purchaseExecutedBudgetGroupedByCollectionProductType = res.data.purchaseExecutedBudgetGroupedByCollectionProductType
                  this.purchasePlannedBudgetGroupedByProductType = res.data.purchasePlannedBudgetGroupedByProductType
                  this.purchaseExecutedBudgetGroupedByProductType = res.data.purchaseExecutedBudgetGroupedByProductType
                })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    setByProductTypeChartData (purchaseByProductType, budgetType) {
      if (!purchaseByProductType || !budgetType) return
      if (purchaseByProductType.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = [palette.info, palette.success, palette.primary, palette.warning]

      let labels = []
      let data = []
      for (let i in purchaseByProductType) {
        let item = purchaseByProductType[i]
        let label = item.product_type
        labels.push(label)

        let qty = 0;
        if (budgetType === this.$root.CONSTANT.BUDGET.TYPE.PLANNED) {
          qty = item.purchase_planned_quantity_to_buy
        }
        if (budgetType === this.$root.CONSTANT.BUDGET.TYPE.EXECUTED) {
          qty = item.purchase_executed_quantity_to_buy
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
          },
        ],
      }

      return chartData
    },
    setByCollectionProductTypeChartData (purchaseByCollectionProductType) {
      if (!purchaseByCollectionProductType) return
      if (purchaseByCollectionProductType.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = _.sample(_.omit(palette, ['transparent','success','white']));

      let labels = []
      labels.push(this.$t('purchase.initial_stock'))
      labels.push(this.$t('purchase.ideal_stock'))
      labels.push(this.$t('purchase.purchase_suggested'))
      labels.push(this.$t('purchase.purchase_todo'))

      let data = []
      data.push(purchaseByCollectionProductType.inventory_quantity)
      data.push(purchaseByCollectionProductType.inventory_optimal)
      data.push(purchaseByCollectionProductType.purchase_planned_quantity_to_buy)
      data.push(purchaseByCollectionProductType.purchase_executed_quantity_to_buy)

      let chartData = {
        labels: labels,
        datasets: [
          {
            label: purchaseByCollectionProductType.product_type,
            backgroundColor: backgroundColor,
            borderColor: palette.transparent,
            data: data,
          },
        ],
      }

      return chartData
    },
  },
  mounted () {
    console.log('Purchase mounted.')
  },
  created () {
    this.$nextTick(() => {
      this.handlePurchaseInit ()
      // this.$validator.validateAll()
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

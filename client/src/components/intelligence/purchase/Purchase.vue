<template>
  <div class="purchase">
    <div class="va-row">
      <div class="flex md12">
        <kuantic-widget :headerText="'purchase.filter_title' | translate">
          <form @submit.prevent="handleSubmit" name="purchase">
            <div class="va-row">
              <div class="flex md2.5">
                <fieldset>
                  <kuantic-simple-select
                    name="division"
                    :label="'purchase.division' | translate"
                    v-model="chosenDivision"
                    option-key="title"
                    v-bind:options="division"
                  />
                  <small v-show="veeErrors.has('division')" class="help text-danger">
                    {{ veeErrors.first('division') }}
                  </small>
                  <kuantic-simple-select
                     name="category"
                    :label="'purchase.category' | translate"
                    v-model="chosenCategory"
                    v-bind:options="category"
                  />
                  <small v-show="veeErrors.has('category')" class="help text-danger">
                    {{ veeErrors.first('category') }}
                  </small>
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
                  <div class="form-group" :class="{'has-error': veeErrors.has('compared_budget')}">
                    <div class="input-group">
                      <input
                        id="compared_budget"
                        name="compared_budget"
                        v-model="comparedBudget"
                        v-money="money_comparedBudget"
                        v-validate="'ge_zeros'"
                        />
                      <label class="control-label" for="compared_budget">
                        {{'purchase.compared_budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('compared_budget')" class="help text-danger">
                        {{ veeErrors.first('compared_budget') }}
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

    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-widget :headerText="$t('purchase.filter_result')">
          <kuantic-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="purchase.purchases"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :paginationPath="paginationPath"
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
      <template v-for="(divisionCategory, id) in purchasePlannedBudgetGroupedByDivisionCategory">
        <div :key="id" class="flex md6 xs12">
          <kuantic-widget class="chart-widget" :headerText="divisionCategory.product_type+'::'+divisionCategory.collection_title">
            <kuantic-chart :data="setByDivisionCategoryChartData(divisionCategory)" type="vertical-bar"/>
          </kuantic-widget>
        </div>
      </template>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12"
           v-if="purchasePlannedBudgetGroupedByCategory && Object.keys(purchasePlannedBudgetGroupedByCategory).length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('purchase.header_by_category_summary_suggested')">
          <kuantic-chart :data="setByPlannedCategoryChartData(purchasePlannedBudgetGroupedByCategory)" type="donut"/>
        </kuantic-widget>
      </div>

      <div class="flex md6 xs12"
           v-if="purchaseComparedBudgetGroupedByCategory  && Object.keys(purchaseComparedBudgetGroupedByCategory).length > 0">
        <kuantic-widget class="chart-widget" :headerText="$t('purchase.header_by_category_summary_todo')">
          <kuantic-chart :data="setByComparedCategoryChartData(purchaseComparedBudgetGroupedByCategory)" type="donut"/>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import Division from '@/data/store/collection'
import Category from '@/data/store/product-type'
import PriceRanges from '@/data/store/price-range'
import FieldsDef from '@/data/table/fields-definition'
import ItemsPerPageDef from '@/data/table/items-per-page-definition'
import QueryParams from '@/data/table/query-params'

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
  },
  data () {
    return {
      division: Division,
      category: Category,
      priceRanges: PriceRanges,
      chosenDivision:{},
      chosenCategory: null,
      plannedBudget: null,
      comparedBudget: null,
      checkedPriceRanges: [],
      money_plannedBudget: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },
      money_comparedBudget: {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      purchase: {},
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams,
      purchasePlannedBudgetGroupedByDivisionCategory: [],
      purchaseComparedBudgetGroupedByDivisionCategory: [],
      purchasePlannedBudgetGroupedByCategory: [],
      purchaseComparedBudgetGroupedByCategory: [],
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
        purchase_id: null, // Sera gerado automáticamente no SERVER
        purchase_title: 'Default title', // Definido manuamente - por enquanto
        collections: [],
        product_types: [],
        price_ranges: [],
        planned_budget: null,
        compared_budget: null,
      }

      if (this.chosenDivision && Object.keys(this.chosenDivision).length > 0) {
        let collections = []
        let collection = {}
        Object.entries(this.chosenDivision).forEach(entry => {
          let key = entry[0];
          let value = entry[1];
          collection[key] = value
        });
        collections.push(collection)
        param.collections = collections
      }

      if (this.chosenCategory) {
        let chosenCategoryStr = `"${this.chosenCategory}"`
        param.product_types.push(chosenCategoryStr)

      } else {
        param.product_types = []
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
        if (parseInt(unmaskedPlannedBudget) >= 0) {
          param.planned_budget = unmaskedPlannedBudget
        } else {
          param.planned_budget = null
        }
      } else {
        param.planned_budget = null
      }

      if (this.comparedBudget) {
        let unmaskedComparedBudget = this.removeCurrencyMask(this.comparedBudget)
        if (parseInt(unmaskedComparedBudget) >= 0) {
          param.compared_budget = unmaskedComparedBudget
        } else {
          param.compared_budget = null
        }
      } else {
        param.compared_budget = null
      }
      return param
    },
    removeCurrencyMask (value) {
      // Removes all currency symbols and decimal sign ',' and thousands sign '.'
      // eslint-disable-next-line no-useless-escape
      let unmasked = value.replace(/[^\d^\-\.\,\s]+/g, '').replace('.', '').replace(',', '.').trim()
      return unmasked
    },
    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          let param = this.setPurchaseParams()
          axios.get('/api/admin/intelligence/purchase',
            { params: {
                purchase_id: param.purchase_id,
                purchase_title: param.purchase_title,
                collections: JSON.stringify(param.collections),
                collections: JSON.stringify(param.collections),
                product_types: JSON.stringify(param.product_types),
                price_ranges: JSON.stringify(param.price_ranges),
                planned_budget: param.planned_budget,
                compared_budget: param.compared_budget
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
                this.purchase = res.data.purchase
                this.purchasePlannedBudgetGroupedByDivisionCategory = res.data.purchasePlannedBudgetGroupedByDivisionCategory
                this.purchaseComparedBudgetGroupedByDivisionCategory = res.data.purchaseComparedBudgetGroupedByDivisionCategory
                this.purchasePlannedBudgetGroupedByCategory = res.data.purchasePlannedBudgetGroupedByCategory
                this.purchaseComparedBudgetGroupedByCategory = res.data.purchaseComparedBudgetGroupedByCategory

                // console.log('res.data.user:', res.data.user)
                // console.log('res.data.user.handle:', res.data.user.handle)

                // localStorage.setItem('authToken', res.data.token)
                // this.$store.dispatch('app/toggleAuthState', true)
                // this.$store.dispatch('app/saveUserData', res.data.user)

                // setAuthToken(res.data.token)

              // this.$router.push({
              //   name: 'profile',
              //   params: { handle: res.data.user.handle }
              // })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    },
    setByPlannedCategoryChartData (purchaseByCategory) {
      if (!purchaseByCategory) return
      if (purchaseByCategory.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = [palette.info, palette.success, palette.primary, palette.warning]

      let labels = []
      let data = []
      for (let i in purchaseByCategory) {
        let item = purchaseByCategory[i]
        let label = item.product_type
        labels.push(label)

        let qty = item.purchase_quantity_to_buy
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
    setByComparedCategoryChartData (purchaseByCategory) {
      if (!purchaseByCategory) return
      if (purchaseByCategory.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = [palette.info, palette.success, palette.primary, palette.warning]

      let labels = []
      let data = []
      for (let i in purchaseByCategory) {
        let item = purchaseByCategory[i]
        let label = item.product_type
        labels.push(label)

        let qty = item.purchase_quantity_to_buy_modified
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
    setByDivisionCategoryChartData (purchaseByDivisionCategory) {
      if (!purchaseByDivisionCategory) return
      if (purchaseByDivisionCategory.length <= 0) return

      // Define ramdom background color
      let palette = store.getters.palette
      let backgroundColor = _.sample(_.omit(palette, ['transparent','success','white']));

      let labels = []
      labels.push(this.$t('purchase.initial_stock'))
      labels.push(this.$t('purchase.ideal_stock'))
      labels.push(this.$t('purchase.purchase_suggested'))
      labels.push(this.$t('purchase.purchase_todo'))

      let data = []
      data.push(purchaseByDivisionCategory.inventory_quantity)
      data.push(purchaseByDivisionCategory.inventory_optimal)
      data.push(purchaseByDivisionCategory.purchase_quantity_to_buy)
      data.push(purchaseByDivisionCategory.purchase_quantity_to_buy_modified)

      let chartData = {
        labels: labels,
        datasets: [
          {
            label: purchaseByDivisionCategory.product_type,
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

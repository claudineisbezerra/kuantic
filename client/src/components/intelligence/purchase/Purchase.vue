<template>
  <div class="purchase">
    <div class="va-row">
      <div class="flex md12">
        <kuantic-widget :headerText="'purchase.filter-title' | translate">
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
                  <div class="form-group" :class="{'has-error': veeErrors.has('planned-budget')}">
                    <div class="input-group">
                      <input
                        id="planned-budget"
                        name="planned-budget"
                        v-model="plannedBudget"
                        v-money="money"
                        v-validate="'positive_number'"
                        />
                      <label class="control-label" for="planned-budget">
                        {{'purchase.planned-budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('planned-budget')" class="help text-danger">
                        {{ veeErrors.first('planned-budget') }}
                      </small>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex md2.5">
                <fieldset>
                  <div class="form-group" :class="{'has-error': veeErrors.has('compared-budget')}">
                    <div class="input-group">
                      <input
                        id="compared-budget"
                        name="compared-budget"
                        v-model="comparedBudget"
                        v-money="money"
                        />
                      <label class="control-label" for="compared-budget">
                        {{'purchase.compared-budget' | translate}}
                      </label>
                      <i class="bar"></i>
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
        <kuantic-widget :headerText="$t('purchase.filter-result')">
          <kuantic-data-table
            :apiUrl="apiUrl"
            :apiMode="apiMode"
            :data="purchase.purchase_list"
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
      <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Compra por categoria: TÊNIS::MASCULINO">
          <kuantic-chart :data="tenisMasculinoVerticalBarChartData" type="vertical-bar"/>
        </kuantic-widget>
      </div>
      <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Compra por categoria: BOTAS::MASCULINO">
          <kuantic-chart :data="botaMasculinoVerticalBarChartData" type="vertical-bar"/>
        </kuantic-widget>
      </div>
      <!-- <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Camisetas: Masculino">
          <kuantic-chart :data="camisetaMasculinoVerticalBarChartData" type="vertical-bar"/>
        </kuantic-widget>
      </div> -->
      <!-- <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Moletons: Masculino">
          <kuantic-chart :data="moletonMasculinoVerticalBarChartData" type="vertical-bar"/>
        </kuantic-widget>
      </div> -->
    </div>

    <div class="va-row">
      <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Resumo de COMPRAS SUGERIDAS">
          <kuantic-chart :data="compraSugeridaDonutChartData" type="donut"/>
        </kuantic-widget>
      </div>
      <div class="flex md6 xs12">
        <kuantic-widget class="chart-widget" headerText="Resumo de COMPRAS A REALIZAR">
          <kuantic-chart :data="compraRealizarDonutChartData" type="donut"/>
        </kuantic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import Division from '@/data/store/collection'
import Category from '@/data/store/product-type'
import PriceRanges from '@/data/store/price-range'
import PurchaseData from '@/data/store/purchase-data'
import FieldsDef from '@/data/table/fields-definition'
import ItemsPerPageDef from '@/data/table/items-per-page-definition'
import QueryParams from '@/data/table/query-params'

import TenisMasculinoVerticalBarChartData from '@/data/table/charts/tenis-masculino-vertical-bar-chart-data'
import BotaMasculinoVerticalBarChartData from '@/data/table/charts/bota-masculino-vertical-bar-chart-data'
import CamisetaMasculinoVerticalBarChartData from '@/data/table/charts/camiseta-masculino-vertical-bar-chart-data'
import MoletonMasculinoVerticalBarChartData from '@/data/table/charts/moleton-masculino-vertical-bar-chart-data'
import CompraSugeridaDonutChartData from '@/data/table/charts/compra-sugerida-donut-chart-data'
import CompraRealizarDonutChartData from '@/data/table/charts/compra-realizar-donut-chart-data'
import { SpringSpinner } from 'epic-spinners'
import { VMoney } from 'v-money'

import axios from 'axios'
import _ from 'lodash'
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
      chosenDivision: {
        id: null,
        title: null
      },
      chosenCategory: null,
      plannedBudget: null,
      comparedBudget: null,
      chosenPriceStartAt: null,
      chosenPriceEndAt: null,
      checkedPriceRanges: [],
      money: {},
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      purchase: PurchaseData.purchase,
      // purchaseParams: {},

      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams,
      camisetaMasculinoVerticalBarChartData: CamisetaMasculinoVerticalBarChartData,
      moletonMasculinoVerticalBarChartData: MoletonMasculinoVerticalBarChartData,
      tenisMasculinoVerticalBarChartData: TenisMasculinoVerticalBarChartData,
      botaMasculinoVerticalBarChartData: BotaMasculinoVerticalBarChartData,
      compraSugeridaDonutChartData: CompraSugeridaDonutChartData,
      compraRealizarDonutChartData: CompraRealizarDonutChartData,
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
        label = this.$t('purchase.all-prices')
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
      let purchaseParams = {
        collection: [],
        product_type: [],
        price_range: [],
        planned_budget: null,
        compared_budget: null,
      }

      if (this.chosenDivision && this.chosenDivision.id) {
        purchaseParams.collection.push(this.chosenDivision)
      } else {
        purchaseParams.collection = []
      }

      if (this.chosenCategory) {
        purchaseParams.product_type.push(this.chosenCategory)
      } else {
        purchaseParams.product_type = []
      }

      if (this.checkedPriceRanges) {
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
        purchaseParams.price_range = priceRanges
      } else {
        purchaseParams.price_range = []
      }

      if (this.plannedBudget) {
        let unmaskedPlannedBudget = this.removeCurrencyMask(this.plannedBudget)
        if (parseInt(unmaskedPlannedBudget) > 0) {
          purchaseParams.planned_budget = unmaskedPlannedBudget
        } else {
          purchaseParams.planned_budget = null
        }
      } else {
        purchaseParams.planned_budget = null
      }

      if (this.comparedBudget) {
        let unmaskedComparedBudget = this.removeCurrencyMask(this.comparedBudget)
        if (parseInt(unmaskedComparedBudget) > 0) {
          purchaseParams.compared_budget = unmaskedComparedBudget
        } else {
          purchaseParams.compared_budget = null
        }
      } else {
        purchaseParams.compared_budget = null
      }
      return purchaseParams
    },
    removeCurrencyMask (el) {
      // Removes all currency symbols and decimal sign ',' and thousands sign '.'
      // eslint-disable-next-line no-useless-escape
      let unmasked = el.replace(/[^\d\.\,\s]+/g, '').replace('.', '').replace(',', '.')
      return unmasked
    },
    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          let purchaseParams = this.setPurchaseParams()
          console.log('Purchase purchaseParams: ', purchaseParams)
          axios.get('/api/admin/intelligence/purchase',
            { params: purchaseParams }
          )
            .then((res) => {
              // console.log('Purchase res:', res)
              if (res.data.errors) {
                for (const error of res.data.errors) {
                  const [key] = Object.keys(error)
                  const [value] = Object.values(error)
                  this.errors.push({ key, value })
                }
              } else {
                // console.log('res.data.token:', res.data.token)
                // console.log('res.data.user:', res.data.user)
                // console.log('res.data.user.handle:', res.data.user.handle)

                localStorage.setItem('authToken', res.data.token)
                this.$store.dispatch('app/toggleAuthState', true)
                // this.$store.dispatch('app/saveUserData', res.data.user)

                setAuthToken(res.data.token)

              // this.$router.push({
              //   name: 'profile',
              //   params: { handle: res.data.user.handle }
              // })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    }
  },
  mounted () {
    console.log('Purchase mounted.')
  },
  created () {
    this.$nextTick(() => {
      // Custom VeeValidate rules
      this.$validator.extend('positive_number', {
        getMessage: (field) => this.$t('validate.positive_number'),
        validate: (value) => new Promise(resolve => {
          resolve({
            valid: value && (parseFloat(this.removeCurrencyMask(value)) > 0)
          })
        })
      })

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

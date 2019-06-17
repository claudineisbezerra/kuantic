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
                    :label="'purchase.division' | translate"
                    v-model="chosenDivision"
                    option-key="title"
                    v-bind:options="division"
                  />
                  <kuantic-simple-select
                    :label="'purchase.category' | translate"
                    v-model="chosenCategory"
                    v-bind:options="category"
                  />
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
                        v-validate="'required'"
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
                        v-validate="'required'"
                        v-money="money"
                        />
                      <label class="control-label" for="compared-budget">
                        {{'purchase.compared-budget' | translate}}
                      </label>
                      <i class="bar"></i>
                      <small v-show="veeErrors.has('compared-budget')" class="help text-danger">
                        {{ veeErrors.first('compared-budget') }}
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
import Division from '@/data/store/Division'
import Category from '@/data/store/ProductType'
import PriceRanges from '@/data/store/PriceRanges'
import FieldsDef from '@/data/table/fields-definition'
import ItemsPerPageDef from '@/data/table/items-per-page-definition'
import QueryParams from '@/data/table/query-params'
import PurchaseData from '@/data/table/purchase-data-output'
import TenisMasculinoVerticalBarChartData from '@/data/table/charts/TenisMasculinoVerticalBarChartData'
import BotaMasculinoVerticalBarChartData from '@/data/table/charts/BotaMasculinoVerticalBarChartData'
import CamisetaMasculinoVerticalBarChartData from '@/data/table/charts/CamisetaMasculinoVerticalBarChartData'
import MoletonMasculinoVerticalBarChartData from '@/data/table/charts/MoletonMasculinoVerticalBarChartData'
import CompraSugeridaDonutChartData from '@/data/table/charts/CompraSugeridaDonutChartData'
import CompraRealizarDonutChartData from '@/data/table/charts/CompraRealizarDonutChartData'
import { SpringSpinner } from 'epic-spinners'
import { VMoney } from 'v-money'

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
    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log('Form fields are valid.')

          console.log('Field chosenDivision:', this.chosenDivision)
          console.log('Field chosenCategory:', this.chosenCategory)
          console.log('Field checkedPriceRanges:', this.checkedPriceRanges)
          console.log('Field plannedBudget:', this.plannedBudget)
          console.log('Field comparedBudget:', this.comparedBudget)
          console.log('Field chosenPriceStartAt:', this.chosenPriceStartAt)
          console.log('Field chosenPriceEndAt:', this.chosenPriceEndAt)
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

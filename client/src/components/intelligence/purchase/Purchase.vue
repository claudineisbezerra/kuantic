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
                    option-key="description"
                    v-bind:options="division"
                  />
                </fieldset>
              </div>
              <div class="flex md2.5">
                <fieldset>
                  <div class="form-group" :class="{'has-error': veeErrors.has('price-range')}">
                    <div class="input-group">
                      <kuantic-checkbox
                        label="Todas os preços"
                        v-model="checkbox.all"
                      />
                      <kuantic-checkbox
                        label="De 0,00 até 50,00"
                        v-model="checkbox.range1"
                      />
                      <kuantic-checkbox
                        label="De 51,00 até 100,00"
                        v-model="checkbox.range2"
                      />
                      <kuantic-checkbox
                        label="De 101,00 até 150,00"
                        v-model="checkbox.range3"
                      />
                      <kuantic-checkbox
                        label="Acima de 150,00"
                        v-model="checkbox.range4"
                      />
                    </div>
                  </div>
                  <!-- <kuantic-checkbox
                    :label="$t('forms.controls.unselected')"
                    v-model="checkbox.unselected"
                  />
                  <kuantic-checkbox
                    :label="$t('forms.controls.selected')"
                    v-model="checkbox.selected"
                  />
                  <kuantic-checkbox
                    :label="$t('forms.controls.readonly')"
                    v-model="checkbox.readonly"
                    :readonly="true"
                  />
                  <kuantic-checkbox
                    :label="$t('forms.controls.disabled')"
                    :disabled="true"
                    v-model="checkbox.disabled"
                  />
                  <kuantic-checkbox
                    :label="$t('forms.controls.error')"
                    error
                    v-model="checkbox.error"
                  />
                  <kuantic-checkbox
                    :label="$t('forms.controls.errorMessage')"
                    :error-messages="errorMessages"
                    :errorCount="2"
                    v-model="checkbox.errorMessages"
                  /> -->
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
            :data="data"
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
import FieldsDef from '@/data/table/fields-definition'
import ItemsPerPageDef from '@/data/table/items-per-page-definition'
import QueryParams from '@/data/table/query-params'
import MyData from '@/data/table/my-data'
import TenisMasculinoVerticalBarChartData from '@/data/table/charts/TenisMasculinoVerticalBarChartData'
import BotaMasculinoVerticalBarChartData from '@/data/table/charts/BotaMasculinoVerticalBarChartData'
import CamisetaMasculinoVerticalBarChartData from '@/data/table/charts/CamisetaMasculinoVerticalBarChartData'
import MoletonMasculinoVerticalBarChartData from '@/data/table/charts/MoletonMasculinoVerticalBarChartData'
import CompraSugeridaDonutChartData from '@/data/table/charts/CompraSugeridaDonutChartData'
import CompraRealizarDonutChartData from '@/data/table/charts/CompraRealizarDonutChartData'
import { SpringSpinner } from 'epic-spinners'
console.log('Purchase MyData:', MyData)
console.log('Purchase MyData.data:', MyData.data)

export default {
  name: 'profile',
  components: {
    SpringSpinner,
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
      chosenDivision: '',
      plannedBudget: '',
      comparedBudget: '',
      priceRange: '',
      checkbox: {
        all: false,
        range1: true,
        range2: true,
        range3: false,
        range4: false
      },
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: false,
      data: MyData.data,
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
    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log('Form fields are valid.')
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

<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-multi-select
        label="Select country"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <kuantic-multi-select
        label="Select country duplicate"
        v-model="selectedCountries"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>
import CountriesList from '@/data/location/CountriesList'
import KuanticMultiSelect from './KuanticMultiSelect'

export default {
  components: {
    KuanticMultiSelect,
  },
  data () {
    return {
      selectedCountries: [],
      CountriesList,
    }
  },
}
</script>

<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-simple-select
        label="Select country"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
    <div class="demo-container__item">
      <kuantic-simple-select
        label="Select country duplicate"
        v-model="selectedCountry"
        :options="CountriesList"
      />
    </div>
  </div>
</template>

<script>

import CountriesList from 'data/CountriesList'
import KuanticSimpleSelect from './KuanticSimpleSelect'

export default {
  components: {
    KuanticSimpleSelect,
  },
  data () {
    return {
      selectedCountry: '',
      CountriesList,
    }
  },
}
</script>

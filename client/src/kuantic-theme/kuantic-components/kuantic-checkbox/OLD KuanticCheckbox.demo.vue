<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-checkbox v-model="value">
        <div slot="label">
         Selected
        </div>
      </kuantic-checkbox>
      <kuantic-checkbox v-model="value" label="Readonly" readonly/>
      <kuantic-checkbox v-model="value" label="Disabled" disabled/>
      <kuantic-checkbox v-model="value" error label="Error" isError/>
      <kuantic-checkbox v-model="value" errorMessages="errorMessages" label="Error-message"/>
      <kuantic-checkbox v-model="value" :errorMessages="errorMessages" :errorCount="2" label="Error-message"/>
      <kuantic-checkbox v-model="value" error disabled label="Error + disabled"/>
    </div>
  </div>
</template>

<script>
import KuanticCheckbox from './KuanticCheckbox'

export default {
  components: {
    KuanticCheckbox
  },
  data () {
    return {
      value: true,
      errorMessages: ['error message 1', 'error message 2']
    }
  }
}
</script>

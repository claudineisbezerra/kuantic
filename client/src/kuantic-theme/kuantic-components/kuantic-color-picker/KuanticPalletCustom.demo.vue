<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-pallet-custom :palette="palette" v-model="color"/>
    </div>
    <div class="demo-container__item">
      <kuantic-pallet-custom :palette="palette" v-model="color"/>
    </div>
  </div>
</template>

<script>
import { colorArray } from '../../../kuantic-theme/kuantic-components/kuantic-color-picker/KuanticTheme'

import KuanticPalletCustom from './KuanticPalletCustom'

export default {
  components: {
    KuanticPalletCustom,
  },
  data () {
    return {
      palette: colorArray,
      color: '#aaaaaa',
    }
  },
}
</script>

<style lang="scss">

</style>

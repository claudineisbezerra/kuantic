<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-color-input v-model="value"/>
    </div>
    <div class="demo-container__item">
      <p>Selected</p>
      <kuantic-color-input v-model="value" selected/>
    </div>
    <div class="demo-container__item">
      <p>Disabled</p>
      <kuantic-color-input v-model="value" disabled/>
    </div>
    <div class="demo-container__item">
      <img src="https://i.imgur.com/UjiMAZj.png" alt="">
    </div>
  </div>
</template>

<script>
import KuanticColorInput from './KuanticColorInput'

export default {
  components: {
    KuanticColorInput,
  },
  data () {
    return {
      value: '#aaaaaa',
    }
  },
}
</script>

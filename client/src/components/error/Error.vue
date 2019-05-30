<template>
  <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
    <div v-if="errors" v-show="errors.length !== 0" class="mb-6 form__error">
      <transition-group name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <small v-for="error in errors" :key="error.key">
          {{ error.value }}
        </small>
      </transition-group>
    </div>
    <div v-else v-show="errorMessage" class="mb-6 form__error">
      <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <small class="help text-danger">
          {{ errorMessage }}
        </small>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'error',
  props: ['errors', 'errorMessage'],
  data: function () {
    return {}
  }
}
</script>

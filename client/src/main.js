// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import './i18n'
import axios from 'axios'
import io from 'socket.io-client'
import setAuthToken from '../utils/authToken'
import clientConstants from 'utils/clientConstants'

import KuanticPlugin from '@/kuantic-theme/kuantic-plugin'
import YmapPlugin from 'vue-yandex-maps'
// import { checkUserData } from './helpers/user'
import _ from 'lodash'
import VMoney from 'v-money'
Vue.use(VMoney,
  {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    precision: 2,
    masked: false
  })

Vue.use(KuanticPlugin)
Vue.use(YmapPlugin)

// NOTE: workaround for VeeValidate (fieldsBagName) + vuetable-2
// NOTE: workaround for VeeValidate (errorBagName) + server error return treatment
Vue.use(VeeValidate, {
  errorBagName: 'veeErrors',
  fieldsBagName: 'formFields',
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

let mixin = {
  data: function () {
    return {
      CONSTANT: clientConstants
    }
  },
  created () {
    // Custom VeeValidate rules
    this.$validator.extend('positive_number', {
      getMessage: (field) => this.$t('validate.positive_number'),
      validate: (value) => new Promise(resolve => {
        let unmaskedValue = value.replace(/[^\d^\-\.\,\s]+/g, '').replace('.', '').replace(',', '.').trim()
        resolve({
          valid: value && (parseFloat(unmaskedValue) > 0)
        })
      })
    })

    this.$validator.extend('ge_zeros', {
      getMessage: (field) => this.$t('validate.ge_zeros'),
      validate: (value) => new Promise(resolve => {
        let unmaskedValue = value.replace(/[^\d^\-\.\,\s]+/g, '').replace('.', '').replace(',', '.').trim()
        resolve({
          valid: value && (parseFloat(unmaskedValue) >= 0)
        })
      })
    })
  },
}

/** Socket IO Client - Store in Vuex State for use in components */
let socket = null
if (process.env.NODE_ENV === 'development') {
  socket = io('http://localhost:5000')
} else {
  socket = io('/')
}
store.dispatch('app/assignSocket', socket)

/** Check for auth token on refresh and set authorization header for incoming requests */
if (localStorage.authToken) {
  setAuthToken(localStorage.authToken)
} else {
  setAuthToken(null)
}

/** Axios Request Intercept */
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

/** Axios Response Intercept */
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem('authToken')
      store.dispatch('app/toggleAuthState', false)
      router.push({
        name: 'login',
        params: { message: Vue.i18n.translate('auth.401_ErrorMessage') }
      })
    }
    return Promise.reject(error)
  }
)

/** Router intercept before each routing */
router.beforeEach(async (to, from, next) => {
  store.commit('app/setLoading', true)
  next()

  // await checkUserData(next)
  // if (to.meta.requiresAuth) {
  //   if (localStorage.getItem('authToken') === null) {
  //     localStorage.clear()
  //     next({
  //       name: 'login',
  //       params: { message: Vue.i18n.translate('auth.401_ErrorMessage') }
  //     })
  //   } else {
  //     next()
  //   }
  // } else if (!_.isEmpty(to.meta) && !to.meta.requiresAuth) {
  //   if (localStorage.getItem('authToken')) {
  //     next({
  //       name: 'profile',
  //       params: { handle: store.getters.getUserData.handle }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
})

router.afterEach((to, from) => {
  store.commit('app/setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  mixins: [mixin],
  router,
  store,
  render: h => h(App),
})

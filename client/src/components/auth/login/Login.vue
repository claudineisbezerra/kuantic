<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>

    <div class="social">
        <oauth provider="facebook" icon="fab fa-facebook" classes="btn-facebook" />
        <oauth provider="google" icon="fab fa-google-plus" classes="btn-google-plus" />
    </div>

    <form method="post" @submit.prevent="handleSubmit" name="login">
      <div class="form-group">
        <div class="input-group">
          <input name="email"
                 v-model.trim="email"
                 v-validate="'required|email'"
                 type="text"
                 :class="{'input': true, 'is-danger': veeErrors.has('email') }"
                 />
          <label class="control-label" for="email">
            {{'auth.email' | translate}}
          </label>
          <i class="bar"/>
          <span style="color: Red;">
            <i v-show="veeErrors.has('email')" class="fa fa-exclamation-triangle"></i>
          </span>
          <small v-show="veeErrors.has('email')" class="help text-danger">
            {{ veeErrors.first('email') }}
          </small>
        </div>
      </div>
      <div class="form-group" with-icon-right>
        <div class="input-group">
          <input name="password"
                 v-model.trim="password"
                 v-validate="'required|min:5|max:15'"
                 type="password"
                 :class="{'input': true, 'is-danger': veeErrors.has('password') }"
                 />
          <label class="control-label" for="password">{{'auth.password' | translate}}</label>
          <i class="bar"/>
          <span style="color: Red;">
            <i v-show="veeErrors.has('password')" class="fa fa-exclamation-triangle"></i>
          </span>
          <small v-show="veeErrors.has('password')" class="help text-danger">
            {{ veeErrors.first('password') }}
          </small>
        </div>
      </div>
      <error :errorMessage="errorMessage" />
      <error :errors="errors" />
      <div class="d-flex align--center justify--space-between">
        <button class="btn btn-primary" type="submit">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link flex-center pl-2 text-center' :to="{name: 'signup'}">
          {{'auth.createAccount' | translate}}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Error from 'components/error/Error.vue'
import OAuth from 'components/auth/social/OAuth.vue'
import { mapActions } from 'vuex'
import setAuthToken from '../../../../utils/authToken'

export default {
  name: 'login',
  components: {
    error: Error,
    oauth: OAuth
  },
  props: ['message'],
  data: function () {
    return {
      email: '',
      password: '',
      errorMessage: this.message,
      errors: []
    }
  },
  methods: {
    ...mapActions(['app/saveUserData', 'app/toggleAuthState']),

    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.post('/api/auth/login',
            { email: this.email, password: this.password }
          )
            .then((res) => {
              if (res.data.errors) {
                for (const error of res.data.errors) {
                  const [key] = Object.keys(error)
                  const [value] = Object.values(error)
                  this.errors.push({ key, value })
                }
              } else {
                localStorage.setItem('authToken', res.data.token)
                this.$store.dispatch('app/toggleAuthState', true)
                this.$store.dispatch('app/saveUserData', res.data.user)
                setAuthToken(res.data.token)

                this.$router.push({
                  name: 'dashboard'
                })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 3000)
    }
  },
  mounted () {
    if (this.errorMessage) {
      setTimeout(() => { this.errorMessage = '' }, 3000)
    }
  }
}
</script>

<style lang="scss">
.login {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
    margin-top: 0;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}

</style>

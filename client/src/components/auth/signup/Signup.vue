<template>
  <div class="signup">
    <h2>{{ $t('auth.createNewAccount') }}</h2>

    <div class="social">
        <oauth provider="facebook" icon="fab fa-facebook" classes="btn-facebook" />
        <oauth provider="google" icon="fab fa-google-plus" classes="btn-google-plus" />
    </div>

    <form method="post" @submit.prevent="handleSubmit" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input name="username"
                 v-model.trim="username"
                 v-validate="'required|min:5|max:50'"
                 type="text"
                 :class="{'input': true, 'is-danger': veeErrors.has('username') }"
                 />
          <label class="control-label" for="username">
            {{'auth.username' | translate}}
          </label>
          <i class="bar"/>
          <span style="color: Red;">
            <i v-show="veeErrors.has('username')" class="fa fa-exclamation-triangle"></i>
          </span>
          <small v-show="veeErrors.has('username')" class="help text-danger">
            {{ veeErrors.first('username') }}
          </small>
        </div>
      </div>

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

      <kuantic-checkbox name="agree-to-terms"
                        id="agree-to-terms"
                        v-model="hasAgreedToTerms">
        <template slot="label">
          {{ $t('auth.agree') }}
          <a class="link" href="#">{{ $t('auth.termsOfUse') }}</a>
        </template>
      </kuantic-checkbox>

      <error :errorMessage="errorMessage" />
      <error :errors="errors" />

      <div class="d-flex align--center justify--space-between">
        <button class="btn btn-primary" type="submit">
          {{'auth.signup' | translate}}
        </button>
        <router-link class='link flex-center pl-2 text-center' :to="{name: 'login'}">
          {{'auth.alreadyJoined' | translate}}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import slugify from 'slugify'
import Error from 'components/error/Error.vue'
import OAuth from 'components/auth/social/OAuth.vue'
import setAuthToken from '../../../../utils/authToken'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'signup',
  components: {
    error: Error,
    oauth: OAuth
  },
  data () {
    return {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      hasAgreedToTerms: true,
      errorMessage: this.message,
      errors: [],
    }
  },
  computed: {
    ...mapGetters(['getSocket'])
  },
  methods: {
    ...mapActions(['app/saveUserData', 'app/toggleAuthState']),
    handleSubmit () {
      this.errors = []
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.username) {
          this.firstName = this.username.split(' ')[0]
          this.lastName = this.username.substring(this.firstName.length).trim()
          }

          axios.post(
            '/api/auth/signup',
            {
              username: this.username,
              first_name: this.firstName,
              last_name: this.lastName,
              handle: slugify(this.username.toLowerCase()),
              email: this.email,
              password: this.password,
              has_agreed_to_terms: this.hasAgreedToTerms
            },
          )
            .then((res) => {
              if (res.data.errors) {
                if (typeof res.data.errors === 'object') {
                    let errors = res.data.errors.errors
                  for (let key in errors) {
                    let value =  errors[key]
                    this.errors.push({ key, value })
                  }
                }
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
      setTimeout(() => { this.errors = [] }, 2000)
    }
  },
}
</script>

<style lang="scss">
.signup {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    text-align: center;
    margin-top: 0;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 2.6875rem;
  }
}
</style>

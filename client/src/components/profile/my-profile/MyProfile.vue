<template>
  <div class="my-profile">
    <form>
      <div class="va-row">
        <div class="flex md3">
          <kuantic-widget :headerText="$t('profile.profileCard')" class="profile-card-widget">
            <kuantic-profile-card :name="user.username"
                                  :location="user.location"
                                  :photoSource="user.image"
                                  :social="{
                                    twitter: user.social.twitter,
                                    facebook: user.social.facebook,
                                    instagram: user.social.instagram}">
            </kuantic-profile-card>
            <!-- <kuantic-profile-card :name="'Veronique Lee'"
                                  :location="'Malaga, Spain'"
                                  photoSource="https://i.imgur.com/NLrdqsk.png"
                                  :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                    instagram: 'instagram.com'}">
            </kuantic-profile-card> -->
          </kuantic-widget>
        </div>
        <div class="flex md9">
          <kuantic-widget :headerText="'profile.form.title' | translate">
            <form>
              <div class="va-row">
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.first_name"
                              id="firstName"
                              name="firstName"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.first_name')"></i>
                        <label class="control-label" for="firstName" role="button">
                          {{'profile.field.firstName' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.last_name"
                              id="lastName"
                              name="lastName"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.last_name')"></i>
                        <label class="control-label" for="lastName" role="button">
                          {{'profile.field.lastName' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right"
                        :class="{'has-error': veeErrors.has('email'), 'valid': isSuccessfulEmailValid}">
                      <div class="input-group">
                        <input
                          id="email"
                          name="email"
                          v-model="user.email"
                          v-validate="'required|email'"
                          />
                        <i
                          class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                        <i
                          class="fa fa-check valid-icon icon-right input-icon"></i>
                        <label class="control-label" for="email">
                          {{'profile.field.email' | translate}}
                        </label>
                        <i class="bar"></i>
                        <small v-show="veeErrors.has('email')" class="help text-danger">
                          {{ veeErrors.first('email') }}
                        </small>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right"
                        :class="{'has-error': veeErrors.has('phone'), 'valid': isSuccessfulEmailValid}">
                      <div class="input-group">
                        <input
                          id="phone"
                          name="phone"
                          v-model="user.phone"
                          />
                        <i
                          class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                        <i
                          class="fa fa-check valid-icon icon-right input-icon"></i>
                        <label class="control-label" for="phone">
                          {{'profile.field.phone' | translate}}
                        </label>
                        <i class="bar"></i>
                        <small v-show="veeErrors.has('phone')" class="help text-danger">
                          {{ veeErrors.first('phone') }}
                        </small>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="flex xs4">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.default_address.zipCode"
                              id="postalCode"
                              name="postalCode"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.default_address.zipCode')"></i>
                        <label class="control-label" for="postalCode" role="button">
                          {{'profile.field.zipCode' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="flex xs8">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.default_address.address"
                               id="address"
                               name="address"
                               required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.default_address.address')"></i>
                        <label class="control-label" for="address" role="button">
                          {{'profile.field.address' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="flex xs4">
                  <fieldset>
                    <kuantic-simple-select
                      :label="'profile.field.country' | translate"
                      v-model="user.default_address.country"
                      v-bind:options="countriesList"
                    />
                  </fieldset>
                </div>
                <div class="flex xs4">
                  <fieldset>
                    <kuantic-simple-select
                      :label="'profile.field.province' | translate"
                      v-model="user.default_address.province"
                      v-bind:options="statesList"
                    />
                  </fieldset>
                </div>
                <div class="flex xs4">
                  <fieldset>
                    <kuantic-simple-select
                      :label="'profile.field.city' | translate"
                      v-model="user.default_address.city"
                      v-bind:options="citiesList"
                    />
                  </fieldset>
                </div>
              </div>

              <div class="va-row">
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.social.facebook.url"
                              id="facebook"
                              name="facebook"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.social.facebook.url')"></i>
                        <label class="control-label" for="facebook" role="button">
                          {{'profile.field.facebook' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="va-row">
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.social.instagram.url"
                              id="instagram"
                              name="instagram"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.social.instagram.url')"></i>
                        <label class="control-label" for="instagram" role="button">
                          {{'profile.field.instagram' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="va-row">
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.social.twitter.url"
                              id="twitter"
                              name="twitter"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.social.twitter.url')"></i>
                        <label class="control-label" for="twitter" role="button">
                          {{'profile.field.twitter' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="va-row">
                <div class="flex xs6">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <input v-model="user.company"
                              id="company"
                              name="company"
                              required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.company')"></i>
                        <label class="control-label" for="company" role="button">
                          {{'profile.field.company' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="va-row">
                <div class="flex xs12">
                  <fieldset>
                    <div class="form-group with-icon-right">
                      <div class="input-group">
                        <textarea v-model="user.about_me"
                                  id="aboutMe"
                                  name="aboutMe"
                                  required/>
                        <i class="fa fa-times icon-right input-icon pointer"
                          @click="clear('user.about_me')"></i>
                        <label class="control-label" for="aboutMe" role="button">
                          {{'profile.field.aboutMe' | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>

              </div>
            </form>
          </kuantic-widget>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CountriesList from '@/data/location/countries-list'
import CitiesList from '@/data/location/cities-list'
import StatesList from '@/data/location/states-list'

export default {
  name: 'my-profile',
  computed: {
    ...mapGetters(['getUserData', 'isAuthorized']),
    user () {
      return this.getUserData
    },
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
      isMale: true,
      countriesList: CountriesList,
      citiesList: CitiesList,
      statesList: StatesList,
      chosenCountry: '',
      chosenState: '',
      chosenCity: '',
      clearableText: '',
      email: 'andrei@dreamsupport.io',
      phone: '+5511999998888',
      wrongEmail: 'andrei@dreamsupport',
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: [],
      radioSelectedOption: 'option1',
      radioSelectedDisableOption: 'option1',
      checkbox: {
        unselected: false,
        selected: true,
        readonly: true,
        disabled: true,
        error: false,
        errorMessages: true
      },
      errorMessages: ['error message 1', 'error message 2'],
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2018-05-09',
      },
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
    getUserProfile(user) {
      if (!user) return
      this.$validator.validateAll().then((result) => {
        if (result) {
          axios.get('/api/profile/:handle', user )
            .then((res) => {
              if (res.data.errors) {
                for (const error of res.data.errors) {
                  const [key] = Object.keys(error)
                  const [value] = Object.values(error)
                  this.errors.push({ key, value })
                }
              } else {
                this.$nextTick(() => {
                  this.user = res.data.user
                })
              }
            })
        }
      })
      setTimeout(() => { this.errors = [] }, 1500)
    }
  },
  created () {
    this.$nextTick(() => {
      if (this.user) {
        // this.getUserProfile(this.user);
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
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

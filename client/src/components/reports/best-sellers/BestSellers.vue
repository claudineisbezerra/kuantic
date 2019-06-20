<template>
  <div class="bestsellers">
    <form>
      <div class="va-row">
      <div class="flex md3">
        <kuantic-widget :headerText="$t('profile.profileCard')" class="profile-card-widget">
          <kuantic-profile-card :name="'Veronique Lee'"
                                :location="'Malaga, Spain'"
                                photoSource="https://i.imgur.com/NLrdqsk.png"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </kuantic-profile-card>
        </kuantic-widget>
      </div>
      <div class="flex md9">
        <kuantic-widget :headerText="'profile.form.title' | translate">
          <form>
            <div class="va-row">
              <div class="flex xs6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">
                        {{'profile.field.company' | translate}}</label>
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
                        v-model="email"
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
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="clearableText"
                             id="name"
                             name="name"
                             required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                        @click="clear('clearableText')"></i>
                      <label class="control-label" for="name" role="button">
                        {{'profile.field.name' | translate}}
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
                      <input v-model="clearableText"
                             id="surname"
                             name="surname"
                             required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                        @click="clear('clearableText')"></i>
                      <label class="control-label" for="surname" role="button">
                        {{'profile.field.surname' | translate}}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="flex xs2">
                <fieldset>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="clearableText"
                             id="postalCode"
                             name="postalCode"
                             required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                        @click="clear('clearableText')"></i>
                      <label class="control-label" for="postalCode" role="button">
                        {{'profile.field.postalCode' | translate}}
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="flex xs10">
                <fieldset>
                  <div class="form-group with-icon-right">
                    <div class="input-group">
                      <input v-model="clearableText"
                             id="address"
                             name="address"
                             required/>
                      <i class="fa fa-times icon-right input-icon pointer"
                        @click="clear('clearableText')"></i>
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
                    v-model="chosenCountry"
                    v-bind:options="countriesList"
                  />
                </fieldset>
              </div>
              <div class="flex xs4">
                <fieldset>
                  <kuantic-simple-select
                    :label="'profile.field.state' | translate"
                    v-model="chosenState"
                    v-bind:options="statesList"
                  />
                </fieldset>
              </div>
              <div class="flex xs4">
                <fieldset>
                  <kuantic-simple-select
                    :label="'profile.field.city' | translate"
                    v-model="chosenCity"
                    v-bind:options="citiesList"
                  />
                </fieldset>
              </div>

              <div class="flex xs12">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <textarea type="text" id="aboutMe"
                                required></textarea>
                      <label class="control-label" for="aboutMe">
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
import CountriesList from '@/data/location/countries-list'
import CitiesList from '@/data/location/cities-list'
import StatesList from '@/data/location/states-list'

export default {
  name: 'profile',
  computed: {
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
  },
  mounted () {
    console.log('Best Sellers mounted.')
  },
  created () {
    this.$nextTick(() => {
      this.$validator.validateAll()
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

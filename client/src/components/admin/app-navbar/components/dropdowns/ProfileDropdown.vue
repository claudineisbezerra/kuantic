<template>
  <div class="profile-dropdown flex-center">
    <template v-if="isAuthorized && user && Object.keys(user).length > 0">
      <span class="profile-dropdown__avatar-container">
        <img :src="user.image"/>
      </span>
      <kuantic-dropdown v-model="isShown" position="bottom">
        <template v-for="option in options">
          <template v-if="option.isSignedInLink">
            <div :key="option.name" class="dropdown-item plain-link-item">
              <router-link :to="{ name: option.redirectTo, params: { handle: user.handle } }"
                           class="plain-link"
                           href="#">
                {{ $t(`user.${option.name}`) }}
              </router-link>
            </div>
          </template>
        </template>
      </kuantic-dropdown>
    </template>

    <template v-else>
      <span class="profile-dropdown__avatar-container">
        <span class="i-profile-badge"></span>
      </span>
      <kuantic-dropdown v-model="isShown" position="bottom">
        <template v-for="option in options">
          <template v-if="!option.isSignedInLink">
            <div :key="option.name" class="dropdown-item plain-link-item">
              <router-link :to="{ name: option.redirectTo }" class="plain-link" href="#">
                {{ $t(`user.${option.name}`) }}
              </router-link>
            </div>
          </template>
        </template>
      </kuantic-dropdown>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'myProfile',
          redirectTo: 'my-profile',
          isSignedInLink: true
        },
        {
          name: 'login',
          redirectTo: 'login',
          isSignedInLink: false
        },
        {
          name: 'signup',
          redirectTo: 'signup',
          isSignedInLink: false
        },
        {
          name: 'logout',
          redirectTo: 'login',
          isSignedInLink: true
        },
      ],
    },
  },
  computed: {
    ...mapGetters(['getUserData', 'isAuthorized']),
    user () {
      return this.getUserData
    }
  },
  methods: {
    ...mapActions(['app/toggleAuthState']),
    logout () {
      if (localStorage.getItem('authToken')) {
        localStorage.clear()
        this.$store.dispatch('app/toggleAuthState', false)
        this.$router.push({ name: 'login' })
      }
    }
  },
  created () {
    if (localStorage.getItem('authToken')) {
      this.$store.dispatch('app/toggleAuthState', true)
    } else {
      localStorage.clear()
      this.$store.dispatch('app/toggleAuthState', false)
    }
    console.log('ProfileDropdown authToken: ', localStorage.getItem('authToken') )
    console.log('ProfileDropdown isAuthorized: ', this.isAuthorized )
    console.log('ProfileDropdown user: ', this.user )
  }

}
</script>

<style lang="scss">
@import '../../../../../kuantic-theme/kuantic-sass/resources/resources';

.profile-dropdown {
  cursor: pointer;

  &__avatar-container {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid $lighter-gray;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }

  }
}

.i-profile-badge {
  position: relative;
  right: -3px;
  top: -7px;
  height: 60px;
  width: 40px;
}
</style>

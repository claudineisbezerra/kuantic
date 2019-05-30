<template>
  <!-- https://bootsnipp.com/snippets/M3x9 -->
  <button :disabled="disabled" class="social__btn btn btn-block btn--clear p-0">
    <div :class="classes" class="social__item">
      <i :class="icon"></i>
      <span>
        &nbsp;&nbsp;&nbsp;{{ $t('auth.loginWith') }} {{ provider }}
      </span>
    </div>
  </button>
</template>

<script>
import setAuthToken from '../../../../utils/authToken'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'oAuth',
  props: ['provider', 'icon', 'classes'],
  computed: {
    ...mapGetters(['getSocket', 'isTest', 'toggleWithoutAnimation'])
  },
  data: function () {
    return {
      popup: null,
      disabled: false
    }
  },
  methods: {
    ...mapActions(['app/saveUserData', 'app/toggleAuthState']),

    startAuth (e) {
      if (!this.disabled) {
        e.preventDefault()
        this.popup = this.open()
        this.checkAuth()
        this.disabled = true
      }
    },

    open () {
      const width = 600
      const height = 600
      const left = window.innerWidth / 2 - width / 2
      const top = window.innerHeight / 2 - height / 2
      const url = `/api/auth/${this.provider}?socketId=${this.getSocket.id}`
      return window.open(
        url,
        '',
        `toolbar=no, location=no, directories=no, status=no, menubar=no,
                scrollbars=no, resizable=no, copyhistory=no, width=${width},
                height=${height}, top=${top}, left=${left}`
      )
    },

    close () {
      this.popup.close()
    },

    checkAuth () {
      const check = setInterval(() => {
        if (!this.popup || this.popup.closed) {
          clearInterval(check)
          this.disabled = false
        }
      }, 1000)
    }

  },

  created () {
    this.getSocket.on(this.provider, (data) => {
      data = JSON.parse(data)
      localStorage.setItem('authToken', data.token)

      this.$store.dispatch('app/toggleAuthState', true)
      this.$store.dispatch('app/saveUserData', data.user)

      setAuthToken(data.token)

      this.close()
      this.disabled = false
      this.$router.push({
        name: 'profile',
        params: { handle: data.user.handle }
      })
    })
  },

  beforeDestroy () {
    this.getSocket.removeListener(this.provider)
  }
}
</script>

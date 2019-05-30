<template>
  <div class="kuantic-page-not-found-simple">
    <div class="kuantic-page-not-found-simple__content">
      <div class="kuantic-page-not-found-simple__wallpaper">
        <router-link class="i-kuantic kuantic-page-not-found-simple__i-kuantic"
                     :to="{path: '/'}"/>
      </div>
      <div class="kuantic-page-not-found-simple__wallpaper">
        <h3 class="kuantic-page-not-found-simple__text">The page's gone
          fishing.</h3>
      </div>
      <div class="kuantic-page-not-found-simple__wallpaper flex md12">
        <div class="va-row kuantic-page-not-found-simple__message">
          <h4 class="kuantic-page-not-found-simple__text-small">If you feel that
            it's not right, please send us a message at &nbsp;</h4>
          <a href="mailto:contato@kuantic.com.br">contato@kuantic.com.br</a>
        </div>
      </div>
      <div class="kuantic-page-not-found-simple__wallpaper-button flex md12">
        <router-link :to="{ path: './dashboard' }">
          <button class="btn btn-primary back-button">
            {{'Back to dashboard'}}
          </button>
        </router-link>
      </div>
    </div>
    <kuantic-page-not-found-sad-wallpaper/>
    <made-by-component/>
  </div>
</template>

<script>
import MadeByComponent from './MadeByComponent'
import KuanticPageNotFoundSadWallpaper
  from './KuanticPageNotFoundSadWallpaper.vue'

export default {
  name: 'kuantic-page-not-found-simple',
  components: {
    MadeByComponent,
    KuanticPageNotFoundSadWallpaper,
  },
}
</script>

<style lang="scss">
.kuantic-page-not-found-simple {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;
  &__text {
    padding-top: 10%;
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
  }
  &__i-kuantic {
    margin-top: 10%;
  }
  &__wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    a {
      margin-top: 2rem;
    }
  }
  &__wallpaper-button {
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    text-align: center;
    justify-content: center;
  }
  &__i-kuantic {
    z-index: 2;
    height: $auth-wallpaper-ikuantic-h;
    width: 100%;
  }
  &__message {
    justify-content: center;
  }
  @include media-breakpoint-down(xs) {
    .kuantic-page-not-found-simple {
      height: $auth-mobile-main-h;

      &__wallpaper-button {
        width: 100%;
        margin-left: 0;

        .back-button {
          max-width: 300px;
          padding-left: 30px;
          padding-right: 30px;
        }
      }
      &__message {
        justify-content: center;
      }
      &__i-kuantic {
        margin-top: 5%;
      }
      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>

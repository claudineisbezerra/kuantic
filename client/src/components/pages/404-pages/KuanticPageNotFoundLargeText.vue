<template>
  <div class="kuantic-page-not-found-large-text">
    <div class="kuantic-page-not-found-large-text__content">
      <div class="kuantic-page-not-found-large-text__wallpaper">
        <router-link
          class="i-kuantic kuantic-page-not-found-large-text__i-kuantic"
          :to="{path: '/'}"/>
      </div>
      <div class="kuantic-page-not-found-large-text__wallpaper">
        <h1 class="kuantic-page-not-found-large-text__number">404</h1>
      </div>
      <div class="kuantic-page-not-found-large-text__wallpaper">
        <h3 class="kuantic-page-not-found-large-text__text">The page's gone
          fishing.</h3>
      </div>
      <div class="kuantic-page-not-found-large-text__wallpaper flex md12">
        <div class="va-row kuantic-page-not-found-large-text__message justify--center">
          <h4 class="kuantic-page-not-found-large-text__text-small">
            If you feel that it's not right, please send us a message at &nbsp;
          </h4>
          <a href="mailto:contato@kuantic.com.br">contato@kuantic.com.br</a>
        </div>
      </div>
      <div
        class="kuantic-page-not-found-large-text__wallpaper-button flex md12">
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
  name: 'kuantic-page-not-found-large-text',
  components: {
    MadeByComponent,
    KuanticPageNotFoundSadWallpaper,
  },
}
</script>

<style lang="scss">
.kuantic-page-not-found-large-text {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__number {
    font-size: 350px;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 15px;
    margin-right: -15px;
    margin-bottom: 0;
    color: white;
  }
  &__text {
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
  }
  &__wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    text-align: center;
    align-items: flex-start;
    justify-content: center;

    a {
      margin-top: 2rem;
    }
  }
  &__wallpaper-button {
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  &__i-kuantic {
    z-index: 2;
    margin-top: 8%;
    height: $auth-wallpaper-ikuantic-h;
    width: 100%;
  }
  @include media-breakpoint-down(xs) {
    .kuantic-page-not-found-large-text {
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
      &__number {
        font-size: 150px;
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

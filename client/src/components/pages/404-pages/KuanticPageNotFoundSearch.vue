<template>
  <div class="kuantic-page-not-found-search">
    <div class="kuantic-page-not-found-search__content">
      <div class="kuantic-page-not-found-search__wallpaper">
        <router-link class="i-kuantic kuantic-page-not-found-search__i-kuantic"
                     :to="{path: '/'}"/>
      </div>
      <div class="kuantic-page-not-found-search__wallpaper">
        <h3 class="kuantic-page-not-found-search__text">The page's gone
          fishing.</h3>
      </div>
      <div class="kuantic-page-not-found-search__wallpaper flex md12">
        <div class="va-row kuantic-page-not-found-search__message">
          <h4 class="kuantic-page-not-found-search__text-small">
            If you feel that it's not right, please send us a message at &nbsp;
          </h4>
          <a href="mailto:contato@kuantic.com.br">contato@kuantic.com.br</a>
        </div>
      </div>
      <div class="kuantic-page-not-found-search__wallpaper">
        <div class="form-group">
          <div class="input-group kuantic-page-not-found-search__input">
            <input
              placeholder="Search on the menu"
              style="color: white"
              v-model="inputValue"
            >
            <i class="bar"
               :style="'width: ' + 310 + 'px'"/>
          </div>
        </div>
      </div>
      <div
        class="kuantic-page-not-found-search__wallpaper kuantic-page-not-found-search__not-found-wallpaper-list">
        <div class="kuantic-page-not-found-search__wrapper">
          <ul
            class="kuantic-page-not-found-search__list"
            v-for="(category, index) in filterItems"
            :key="index"
          >
            {{ category.categoryName }}
            <li
              class="kuantic-page-not-found-search__list-element"
              v-for="(item, index) in category.items"
              :key="index"
            >
              <router-link :to="{ path: item.itemLink }">
                {{ item.itemName}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <kuantic-page-not-found-sad-wallpaper/>
    <made-by-component/>
  </div>
</template>

<script>
import CategoriesConfig from './CategoriesConfig'
import MadeByComponent from './MadeByComponent'
import KuanticPageNotFoundSadWallpaper
  from './KuanticPageNotFoundSadWallpaper.vue'

export default {
  name: 'kuantic-page-not-found-search',
  components: {
    MadeByComponent,
    KuanticPageNotFoundSadWallpaper,
  },
  data () {
    return {
      categories: CategoriesConfig,
      inputValue: '',
    }
  },
  computed: {
    filterItems () {
      if (this.inputValue.length >= 1) {
        return this.categories.map(
          category => {
            return {
              categoryName: category.categoryName,
              items: category.items.filter(item => item.itemName.toUpperCase()
                .search(this.inputValue.toUpperCase()) !== -1),
            }
          },
        ).filter(category => category.items.length >= 1)
      } else {
        return this.categories
      }
    },
  },
}
</script>

<style lang="scss">
.kuantic-page-not-found-search {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__text {
    padding-top: 50px;
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
    margin-top: 100px;
  }
  &__list {
    color: white;
  }
  &__input {
    width: 310px;
  }
  &__wallpaper {
    max-height: 40%;
    display: flex;
    justify-content: center;

    a {
      margin-top: 2rem;
    }
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
    .kuantic-page-not-found-search {
      height: $auth-mobile-main-h;

      &__message {
        justify-content: center;
      }
      &__list-element {
        font-size: 13px;
      }
      &__not-found-wallpaper-list {
        padding: 0;
      }
      &__i-kuantic {
        margin-top: 5%;
      }
      &__text-small {
        font-size: 15px;
      }
      &__wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>

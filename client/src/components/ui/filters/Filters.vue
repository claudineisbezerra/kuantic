<template>
  <div class="filters-page">
    <kuantic-widget headerText="Show filters">
      <div class="row">
        <div class="col-md-12">
          <div slot="body">
            <div class="row filters-page__filter-bar-container">
              <filter-bar
                v-model="name"
                class="filters-page__filter-bar"
                label="Name"
              />
              <filter-bar
                v-model="email"
                class="filters-page__filter-bar"
                label="Email"
              />
              <kuantic-simple-select
                class="filters-page__filter-bar"
                label="City"
                v-model="city"
                :options="cityList"
              />
            </div>
          </div>
          <div class="filters-page__tags">
            <kuantic-tag
              v-if="name"
              :name="`Name: ${ name }`"
              removable
              @remove="name = ''"
            />
            <kuantic-tag
              v-if="email"
              :name="`Email: ${ email }`"
              removable
              @remove="email = ''"
            />
            <kuantic-tag
              v-if="city"
              :name="`City: ${ city }`"
              removable
              @remove="city = ''"
            />
            <span
              v-if="this.city || this.name || this.email"
              class="filters-page__clear-all-text"
              @click="clearAll"
            >
              Clear all filters
            </span>
          </div>
        </div>
      </div>
    </kuantic-widget>
    <kuantic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="filters-page__table-heading">{{ $t('tables.headings.name') }}</td>
            <td class="filters-page__table-heading">{{ $t('tables.headings.email') }}</td>
            <td class="filters-page__table-heading">{{ $t('tables.headings.city') }}</td>
            <td align="right" class="filters-page__table-heading">{{ $t('tables.headings.score') }}</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" v-bind:key="item.email">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.city }}</td>
            <td align="right">{{ item.score }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </kuantic-widget>
  </div>
</template>

<script>
import KuanticWidget
  from '../../../kuantic-theme/kuantic-components/kuantic-widget/KuanticWidget'
import FilterBar
  from '../../../kuantic-theme/kuantic-components/kuantic-datatable/datatable-components/FilterBar.vue'
import KuanticSimpleSelect
  from '../../../kuantic-theme/kuantic-components/kuantic-simple-select/KuanticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import { cityList, itemList } from './filtersData'
export default {
  name: 'filters',
  components: {
    KuanticWidget, FilterBar, SpringSpinner, KuanticSimpleSelect
  },
  data () {
    return {
      name: '',
      email: '',
      city: '',
      cityList: cityList,
      itemList: itemList,
    }
  },
  methods: {
    clearAll () {
      this.name = ''
      this.email = ''
      this.city = ''
    }
  },
  computed: {
    filteredItems () {
      let filteredItems = this.itemList
      if (this.name) {
        filteredItems = filteredItems.filter(item => item.name.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
      if (this.email) {
        filteredItems = filteredItems.filter(item => item.email.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      if (this.city) {
        filteredItems = filteredItems.filter(item => item.city.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
      return filteredItems
    }
  }
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    width: 300px;
  }
  &__filter-bar-container {
    margin: 0;
    justify-content: space-between;
  }
  &__table-heading {
    color: $vue-green
  }
  &__collapse {
    .kuantic-collapse__body {
      background-color: white;
    }
  }
  &__clear-all-text {
    cursor: pointer;
    color: $vue-green;
    margin-top: 0.3rem;
  }
}
</style>

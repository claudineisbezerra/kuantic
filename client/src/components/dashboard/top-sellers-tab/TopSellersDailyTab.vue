<template>
  <div class="overview-tab dashboard-tab">
    <div class="va-row">
      <div class="flex md12 xs12">
        <kuantic-data-table
          :apiMode="apiMode"
          :data="sampleData"
          :tableFields="tableFields"
          :defaultPerPage="defaultItemsPerPage"
          :filterInputLabel="$t('repurchase.filter_label')"
          :sortFunctions="sortFunctions"
          :queryParams="queryParams"
        >
          <spring-spinner
            slot="loading"
            :animation-duration="2500"
            :size="70"
            color="#4ae387"
          />
        </kuantic-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import TableFields from './table-fields-daily'
import ItemsPerPage from './items-per-page-definition'
import QueryParams from './query-params-daily'
import DataTableStyles from './data-table-styles'
import { getSampleData } from './sample-data'
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'top-seller-daily-tab',
  components: {
    SpringSpinner
  },
  data () {
    return {
      apiMode: false,

      tableFields: TableFields.tableFields,
      itemsPerPage: ItemsPerPage,
      queryParams: QueryParams,
      dataTableStyles: DataTableStyles,

      defaultItemsPerPage: 6,
      sortFunctions: TableFields.sortFunctions,
      sampleData: getSampleData()
    }
  },
}
</script>

<style lang="scss" scoped>
.overview-item {
  display: flex;
  align-items: center;
  height: 55px;
  margin-bottom: 3rem;
  padding-right: 1rem;
  font-size: 1.25rem;
  font-weight: bold;

  .overview-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-width: 85px;
    max-width: 85px;
    height: 100%;
  }
}

.overview-row {
  @include media-breakpoint-down(xs) {
    flex-wrap: wrap;
  }
}

.overview-col:first-child {
  margin-left: 2rem;
  @include media-breakpoint-down(md) {
    margin-left: 0;
  }
}

.explore-btn {
  margin-top: 6rem;
  margin-bottom: 1rem;
}
</style>

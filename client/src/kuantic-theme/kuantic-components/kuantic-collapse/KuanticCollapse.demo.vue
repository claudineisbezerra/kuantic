<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <kuantic-collapse v-model="expand">
        <button class="btn btn-info" slot="header">
          Toggle collapse
        </button>
        <div slot="body" style="padding: 10px;">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </kuantic-collapse>
    </div>
  </div>
</template>

<script>
import KuanticCollapse from './KuanticCollapse'

export default {
  components: { KuanticCollapse },
  data () {
    return {
      expand: false,
    }
  },
}
</script>

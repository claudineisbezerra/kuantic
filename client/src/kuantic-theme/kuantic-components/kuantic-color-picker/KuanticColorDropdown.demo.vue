<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-color-dropdown>
        <div slot="toggle">
          {Square}
        </div>
        <div class="content">
          [palette]
        </div>
      </kuantic-color-dropdown>
    </div>
  </div>
</template>

<script>
import KuanticColorDropdown from './KuanticColorDropdown'

export default {
  components: {
    KuanticColorDropdown,
  },
}
</script>

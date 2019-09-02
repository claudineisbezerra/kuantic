<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="vue-lists">
            <h4>Mais vendidos</h4>
            <div class="typo-articles">
              <p>
                Planejamento dos orçamentos mensais para recompras.
              </p>
            </div>
          </div>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import KuanticFuturePage from '../../pages/404-pages/KuanticFuturePage.vue'

export default {
  name: 'monthly-budget',
  components: {
    KuanticFuturePage
  },
}
</script>
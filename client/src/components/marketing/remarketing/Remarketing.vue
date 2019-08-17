<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Remarketing</h4>
          </div>
          <div class="typo-articles">
            <p>
              Informações detalhados sobre visitas em sites proprietários, custos aplicados em campanhas de vendas ou ações de marketing.
            </p>
          </div>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import KuanticFuturePage from '../../pages/404-pages/KuanticFuturePage.vue'

export default {
  name: 'remarketing',
  components: {
    KuanticFuturePage
  },
}
</script>
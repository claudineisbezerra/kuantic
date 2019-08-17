<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="vue-lists">
            <h4>Grade de produtos</h4>
            <div class="typo-articles">
              <p>
                Uma grade IDEAL para composição da variedade de produtos a venda é
                um ótimo auxílio para realizar compras mais racionais.
                <br>
                Nossa grade IDEAL será baseada nos produtos que apresentam melhor potencial de vendas.
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
  name: 'best-sellers',
  components: {
    KuanticFuturePage
  },
}
</script>
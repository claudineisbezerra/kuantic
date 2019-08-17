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
                Uma lista histórica dos produtos com melhor desempenho de vendas.
                <br>
                Você saberá detalhes relevantes sobre cada item vendido incluindo dados do tipo:
              </p>
            </div>

            <div class="va-row">
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    Valores totais de vendas.
                  </li>
                  <li>
                    Quantidade total vendas.
                  </li>
                  <li>
                    Potencial de vendas.
                  </li>
                  <li>
                    Margem de contribuição.
                  </li>
                </ul>
              </div>
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
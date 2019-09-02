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
                Classificação de produtos por critérios de desempenho comercial.
                <br>
                Você saberá os níveis de indicadores de desempenho que justificam a classificação do produto.
                Os indicadores mais comuns serão:
              </p>
            </div>

            <div class="va-row">
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    PC1 Potencial de vendas.
                  </li>
                  <li>
                    Potencial de vendas.
                  </li>
                  <li>
                    Preço.
                  </li>
                  <li>
                    Custo.
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
  name: 'abc-curve',
  components: {
    KuanticFuturePage
  },
}
</script>
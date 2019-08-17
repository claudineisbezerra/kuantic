<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Precificação de competição por carteira de produtos</h4>
          </div>
          <div class="typo-articles">
            <p>
              Esta precificação é baseada nos preços POR CARTEIRA DE PRODUTOS <i>(Portfolio de produtos)</i> obtidos do concorrente.
              <br>
              Esta será uma uma preficicação utilizada apenas de forma comparativa.
              <br>
              Os preço de comparação, neste caso, serão obtidos a média de preços da categoria de produtos.
              <br>
              O preço do concorrente será comparado ao preço mínimo médio da categoria do produto obtido
              a partir de cálculos dos preços mínimos definidos na matriz de precificação associada.
              <br>
              <br>
              (*) O histórico dos dados utilizados para gerar a precificação devem ser mantidos.
              <br>
              Ex: Precificação por campanha, Precificação de giro de estoque, Precificação comparativa.
              <br>
              <br>
              (**) Esta funcionalidade é DEPENDENTE da obtenção dos preços do produto do concorrente.
              <br>
              Isto poderá ser feito:
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    Manualmente.
                  </li>
                  <li>
                    Utilizando-se um sistema de terceiros para buscas (Crawler).
                  </li>
                  <li>
                    Utilizando-se um sistema proprietário para buscas (Crawler).
                  </li>
                </ul>
              </div>
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
  name: 'competition-by-portfolio',
  components: {
    KuanticFuturePage
  },
}
</script>
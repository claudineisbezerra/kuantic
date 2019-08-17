<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Precificação de competição por produto</h4>
          </div>
          <div class="typo-articles">
            <p>
              Esta precificação é baseada nos preços POR PRODUTO <i>(SKU)</i>  obtidos dos concorrentes.
              <br>
              O preço do concorrente será comparado ao preço mínimo do produto definido
              na matriz de precificação associada.
              <br>
              Se o preço extraído do concorrente for maior ou igual
              ao preço mínimo obtido na matriz de precificação associada,
              <br>
              A precificação do produto será o mesmo que o preço do concorrente,
              <br>
              senão a precificação do produto será preço mínimo obtido na matriz de precificação associada.
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
  name: 'competition-by-product',
  components: {
    KuanticFuturePage
  },
}
</script>
<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Precificação de campanhas</h4>
          </div>
          <div class="typo-articles">
            <p>
              Será possível definir qual o tipo da campanha a ser conduzida e os parâmetros associados.
              <br>
              Ex: ( Campanha: 3 por 100. Define-se a quantidade: 3 e preço: 100,00).
              <br>
              <br>
              Associar os produtos da campanha utilizando filtros d tipo:
              <br>
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    Divisão.
                  </li>
                  <li>
                    Categoria.
                  </li>
                  <li>
                    Marca.
                  </li>
                  <li>
                    Coleção.
                  </li>
                  <li>
                    Sazonalidade.
                  </li>
                  <li>
                    Blacklist.
                  </li>
                  <li>
                    Matriz de precificação a ser utilizada para cálculo do preço mínimo.
                  </li>
                </ul>
              </div>
              Com base nos parâmetros da campanha, o preço do produto para a campanha será calculado.
              <br>
              Serão elegíveis a participar da campanha os skus cujo preço na campanha seja
              maior ou igual ao preço mínimo calculado a partir da Matriz de precificação associada.
              <br>
              <br>
              (*) O histórico dos dados utilizados para gerar a precificação devem ser mantidos.
              <br>
              Ex: Precificação por campanha, Precificação de giro de estoque, Precificação comparativa.
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
  name: 'campaign-pricing',
  components: {
    KuanticFuturePage
  },
}
</script>
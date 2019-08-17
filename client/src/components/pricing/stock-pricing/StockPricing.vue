<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Precificação de giro de estoque</h4>
          </div>
          <div class="typo-articles">
            <p>
              Será possível definir a fonte de produtos para precificação a ser conduzida.
              <br>
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    Blacklist.
                  </li>
                  <li>
                    Sazonalidade.
                  </li>
                  <li>
                    Coleção.
                  </li>
                  <li>
                    Divisão.
                  </li>
                  <li>
                    Categoria.
                  </li>
                  <li>
                    Marca.
                  </li>
                </ul>
              </div>

              Condições comerciais e parâmetros associados
              <div class="flex md6">
                <ul class="vue-unordered">
                  <li>
                    Minimo de idade.
                  </li>
                  <li>
                    Minimo de cobertura.
                  </li>
                  <li>
                    Mínimo de idade + cobertura.
                  </li>
                  <li>
                    Step de desconto.
                  </li>
                  <li>
                    Matriz de precificação.
                  </li>
                </ul>
              </div>
              Com base nos parâmetros configurados, os skus passiveis de precificação serão obtidos.
              <br>
              Então será calculado um possível preço p1 após o step de desconto.
              <br>
              e um preço p2 calculado utilizando a margem de contribuição mínima contida
              na Matriz de precificação.
              <br>
              O sku deve receber o maior preço entre entre p1 e p2.
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
  name: 'stock-pricing',
  components: {
    KuanticFuturePage
  },
}
</script>
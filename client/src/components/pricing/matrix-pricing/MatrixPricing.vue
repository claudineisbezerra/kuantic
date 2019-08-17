<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Matriz de precificação</h4>
          </div>
          <div class="typo-articles">
            <p>
              Definir uma Matriz de precificação com margens de contribuição mínimas aceitáveis para distintas idades e cobertura de produtos em estoque.
              <br>
              Esta matriz será a base para o esquema de precificação definindo limite de descontos e margens de contribuição.
              <br>
              Inicialmente a matriz poderá ser alimentada através de inputs manuais resumidos em formato de tabela (UI)
              <br>
              A partir dos inputs resumidos serão geradas NOVAS MATRIZES com digerentes limites de descontos e margens de contribuição.
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
  name: 'matrix-pricing',
  components: {
    KuanticFuturePage
  },
}
</script>
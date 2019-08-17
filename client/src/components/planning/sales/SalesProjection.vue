<template>
  <div>
    <kuantic-future-page/>
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h4>Projeção de vendas</h4>
          </div>
          <div class="typo-articles">
            <p>
              São projetados diversos meses futuros considerando o histórico de negócios realizados.
              Se não houver histórico anterior, serão configurados dados que simulem um típico
              mês de vendas e simulados os períodos seguintes.
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
  name: 'sales-projection',
  components: {
    KuanticFuturePage
  },
}
</script>
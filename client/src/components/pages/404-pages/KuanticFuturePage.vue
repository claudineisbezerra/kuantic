<template>
  <div class="future-page-typo">
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="typo-headers">
            <h1>Futura funcionalidade</h1>
          </div>
          <div class="typo-articles">
            <blockquote class="blockquote">
              <p>
                Eu sou um experimento. Meio certo, meio definido, meio pronto, tudo em estado de transição. </p>
              <footer class="blockquote-footer">CB</footer>
            </blockquote>
          </div>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kuantic-future-page',
}
</script>

<style lang="scss">
.future-page-typo {
  .typo-articles {
    margin-bottom: 6.25rem;
    width: 90%;
  }

  .widget-body {
    padding: 3.75rem 4.7rem 0 2.2rem !important;
  }

  .vue-lists ul, ol {
    width: 85%;
  }
}

</style>

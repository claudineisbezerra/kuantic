<template>
  <div class="page notfound">
    <section class="section mt-6 section--notfound">
      <div class="section__heading">
        <span class="section__title">{{ $t('page_not_found') }}</span>
      </div>
      <div class="section__content">
        <p class="section__lead">{{ $t('404_not_found_msg') }}</p>
        <div class="notfound__dp">
          <img :alt="$t('404_not_found')" src="@/assets/img/undraw_empty_xct9.svg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  props: [],
  components: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.section__content {
  padding-bottom: 140px;
}

.section__heading {
  // @include respond(phone) {
  //   margin-top: 100px;
  // }
}

.notfound {
  &__dp {
    margin: 5rem 0 0 0;

    // @include respond(phone) {
    //   margin: 2rem 0 0 0;
    // }

    & img {
      width: 65%;

      // @include respond(phone) {
      //   width: 100%;
      // }
    }
  }
}
</style>

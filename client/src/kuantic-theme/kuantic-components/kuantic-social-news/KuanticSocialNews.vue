<template>
  <div class="kuantic-social-news">
    <div class="d-flex justify--space-between align--center kuantic-social-news__text-with-button">
      <span class="text">Isto é o que os usuários postaram sobre sua empresa.</span>
      <a :href="url" target="_blank">
        <button class="btn btn-micro btn-primary">VEJA</button>
      </a>
    </div>
    <div class="d-flex justify--space-around kuantic-social-news__photo-list">
      <div
        class="kuantic-social-news__photo-list__photo"
        v-for="(pieceOfNews, index) in news"
        :key="index"
        :style="`background: url(${pieceOfNews.photoURL})`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kuantic-social-news',
  props: ['news', 'url'],
}
</script>

<style lang="scss">
.kuantic-social-news {
  &__text-with-button {
    padding-bottom: 1.5rem;
    overflow: hidden;
    .text {
      font-size: $font-size-base;
      @include va-ellipsis();
    }
    .btn {
      margin-left: 1rem;
      line-height: 1; //TODO: review btn styles
    }
  }
  &__photo-list {
    // This hides photos that won't fit.
    height: 80px;
    overflow: hidden;
    flex-wrap: wrap;

    &__photo {
      background-size: cover !important;
      width: 80px;
      height: 80px;
      margin-right: 2px;
    }
  }
}
</style>

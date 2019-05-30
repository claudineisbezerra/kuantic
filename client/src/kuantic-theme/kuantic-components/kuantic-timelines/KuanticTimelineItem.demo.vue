<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-timeline-item :isFirst="true" :isLast="true">
        <div slot="before">22 February, 2018</div>
        <kuantic-card
          slot="after"
          stripe="warning"
          title-on-image
          overlay
          image="https://picsum.photos/300/200/?random">
          <template slot="title">
            Card with overlay and text on top of image
          </template>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </kuantic-card>
      </kuantic-timeline-item>
    </div>
  </div>
</template>

<script>
import KuanticTimelineItem from './KuanticTimelineItem.vue'
import KuanticCard from '../kuantic-card/KuanticCard'

export default {
  components: {
    KuanticCard,
    KuanticTimelineItem,
  },
}
</script>

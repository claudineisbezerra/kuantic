<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <kuantic-timeline>
        <kuantic-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">After text</span>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </div>

    <div class="demo-container__item">
      <kuantic-timeline vertical>
        <kuantic-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :active="item"
        >
          <span slot="before">Before text</span>
          <span slot="after">
            <div>After text</div>
            <div>After text</div>
            <div>After text</div>
          </span>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </div>

    <div class="demo-container__item">
      {{ items }}
      <button @click="reroll()">Reroll</button>
    </div>
  </div>
</template>

<script>
import KuanticTimeline from './KuanticTimeline.vue'
import KuanticTimelineItem from './KuanticTimelineItem.vue'

export default {
  components: {
    KuanticTimeline,
    KuanticTimelineItem,
  },
  data () {
    return {
      items: [
        true,
        true,
        false,
      ],
    }
  },
  methods: {
    reroll () {
      const getItem = () => !!Math.floor(Math.random() * 2)
      this.items = [
        getItem(),
        getItem(),
        getItem(),
      ]
    },
  },
}
</script>

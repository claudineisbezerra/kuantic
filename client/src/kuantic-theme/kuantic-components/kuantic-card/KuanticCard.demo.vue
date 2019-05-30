<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <div class="va-row">
        <div class="flex md3">
          <kuantic-card
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
        </div>
        <div class="flex md3">
          <kuantic-card
            stripe="danger"
            image="https://picsum.photos/300/200/?random"
            theme="bright">
            <template slot="title">
              Card title that wraps to a new line
            </template>
            This is a longer card with supporting text below as a natural
            lead-in to
            additional content. This content is a little bit longer.
            <p slot="footer">Last updated 3 mins ago</p>
          </kuantic-card>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="va-row">
        <div class="flex md4">
          <kuantic-card
            stripe="danger"
            image="https://picsum.photos/300/200/?random"
            theme="bright">
            <template slot="title">
              Card title that wraps to a new line
            </template>
            This is a longer card with supporting text below as a natural
            lead-in to
            additional content. This content is a little bit longer.
            <p slot="footer">Last updated 3 mins ago</p>
          </kuantic-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KuanticCard from './KuanticCard.vue'

export default {
  components: { KuanticCard },
}
</script>

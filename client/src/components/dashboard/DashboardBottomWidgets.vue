<template>
  <div class="va-row bottom-widgets">
    <div class="flex md6 xs12">
      <kuantic-widget class="no-h-padding no-v-padding">
        <kuantic-feed :initialPosts="posts"></kuantic-feed>
      </kuantic-widget>
    </div>
    <div class="flex md6 xs12">
      <kuantic-widget class="business-posts">
        <kuantic-social-news
          class="kuantic-social-news" :news="news"
          :url="'https://www.instagram.com/kuantic/'"
        />
      </kuantic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-bottom-widgets',

  data () {
    return {
      posts: [
        {
          name: 'Irina Myatelskaya',
          text: 'Fez o pedido de maior valor',
          photoURL: 'https://i.imgur.com/VuTDC8u.png',
        },
        {
          name: 'Andrei Hrabouski',
          text: 'e mais 08 efetuaram o pagamento',
          photoURL: 'https://i.imgur.com/W3mGrmW.png',
        },
        {
          name: 'Evan You',
          text: 'é novo na loja',
          photoURL: 'https://i.imgur.com/D7DOGBH.jpg',
        },
      ],
      news: [
        {
          photoURL: 'https://i.imgur.com/PiTDDcA.png',
        },
        {
          photoURL: 'https://i.imgur.com/M6GugaM.png',
        },
        {
          photoURL: 'https://i.imgur.com/vEy3fRU.png',
        },
        {
          photoURL: 'https://i.imgur.com/Xrywphx.png',
        },
        {
          photoURL: 'https://i.imgur.com/dqVtQGY.png',
        },
        {
          photoURL: 'https://i.imgur.com/qP7rTCy.png',
        },
        {
          photoURL: 'https://i.imgur.com/6YLsM43.png',
        },
        {
          photoURL: 'https://i.imgur.com/9PAOx55.png',
        },
        {
          photoURL: 'https://i.imgur.com/mVpc04D.png',
        },
        {
          photoURL: 'https://i.imgur.com/WdbTSLn.png',
        },
        {
          photoURL: 'https://i.imgur.com/ZXRIHfk.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bottom-widgets {
  > div[class^='col'] {
    & > div {
      width: 100%;
    }
  }
}
</style>

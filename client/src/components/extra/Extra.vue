<template>
  <div class="extra">
    <kuantic-widget :headerText="'extra.tabs.title' | translate"
                    class="no-v-padding">
      <kuantic-tabs class="tabs"
                    :names="[$t('extra.tabs.maps'), $t('extra.tabs.setupProfile'), $t('extra.tabs.overview')]">
        <div :slot="'extra.tabs.overview' | translate"
             class="flex justify--center">
          <overview-tab></overview-tab>
        </div>
        <div :slot="'extra.tabs.maps' | translate" class="maps-tab">
          <leaflet-map></leaflet-map>
        </div>
        <div :slot="'extra.tabs.setupProfile' | translate"
             class="flex justify--center">
          <setup-profile-tab wizardType="simple"></setup-profile-tab>
        </div>
      </kuantic-tabs>
    </kuantic-widget>

    <div class="va-row">
      <div class="flex md4">
        <kuantic-widget :headerText="$t('extra.profileCard')"
                        class="profile-card-widget">
          <kuantic-profile-card :name="'Veronique Lee'"
                                :location="'Malaga, Spain'"
                                photoSource="https://i.imgur.com/NLrdqsk.png"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </kuantic-profile-card>
        </kuantic-widget>
      </div>
      <div class="flex md8">
        <kuantic-widget :headerText="$t('extra.chat')" class="chat-widget">
          <kuantic-chat v-model="chatMessages"></kuantic-chat>
        </kuantic-widget>
      </div>
    </div>

    <div class="row bottom-widgets">
      <div class="flex md6">
        <kuantic-widget class="no-h-padding no-v-padding">
          <kuantic-feed :initialPosts="posts"></kuantic-feed>
        </kuantic-widget>
      </div>
      <div class="flex md6">
        <kuantic-widget class="business-posts">
          <kuantic-social-news :news="news"
                               :url="'https://instagram.com/smartapant'"></kuantic-social-news>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewTab from 'components/dashboard/features-tab/FeaturesTab.vue'
import SetupProfileTab
  from 'components/dashboard/setup-profile-tab/SetupProfileTab.vue'
import LeafletMap from 'components/maps/leaflet-maps/LeafletMap.vue'

export default {
  name: 'extra',
  components: {
    LeafletMap,
    SetupProfileTab,
    OverviewTab,
  },
  data () {
    return {
      chatMessages: [
        {
          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
          yours: false,
        },
        {
          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
          yours: true,
        },
        {
          text: 'Sounds great! See you later!',
          yours: false,
        },
        {
          text: 'Should I bring a lightbox with me?',
          yours: true,
        },
        {
          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
          yours: false,
        },
        {
          text: 'I\'m working on Kuantic, so let\'s meet at 3pm. Thanks!',
          yours: true,
        },
      ],
      posts: [
        {
          name: 'Irina Myatelskaya',
          text: 'joined the network',
          photoURL: 'https://i.imgur.com/VuTDC8u.png',
        },
        {
          name: 'Andrei Hrabouski',
          text: 'has just started a live video',
          photoURL: 'https://i.imgur.com/W3mGrmW.png',
        },
        {
          name: 'Evan You',
          text: 'joined the network',
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
.tabs {
  .overview-tab {
    .explore-row {
      display: none !important;
    }
  }

  .maps-tab {
    height: 500px;
  }
}

.profile-card-widget, .chat-widget {
  width: 100%;
  .widget-body {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
    }
  }
}

.bottom-widgets {
  > div[class^='col'] {
    & > div {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="timelines">
    <kuantic-widget
      class="no-h-padding no-v-padding"
      :headerText="$t('timelines.horizontalSimple')"
    >
      <kuantic-timeline>
        <kuantic-timeline-item active>
          <template slot="before">
            <div class="kuantic-timeline-item__title">
              February 2018
            </div>
            <div class="kuantic-timeline-item__description">
              Pre-sail rate: 50%
            </div>
          </template>
        </kuantic-timeline-item>
        <kuantic-timeline-item active>
          <template slot="before">
            <div class="kuantic-timeline-item__title">
              March 2018
            </div>
            <div class="kuantic-timeline-item__description">
              Pre-sail rate: 40%
            </div>
          </template>
        </kuantic-timeline-item>
        <kuantic-timeline-item>
          <template slot="before">
            <div class="kuantic-timeline-item__title">
              April 2018
            </div>
            <div class="kuantic-timeline-item__description">
              Pre-sail rate: 20%
            </div>
          </template>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </kuantic-widget>

    <kuantic-widget class="no-h-padding no-v-padding timelines__horizontal-long"
                    :headerText="$t('timelines.horizontalCards')">
      <kuantic-timeline class="timelines__horizontal-long__timeline">
        <kuantic-timeline-item active>
          <kuantic-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateFirst }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
        <kuantic-timeline-item active>
          <kuantic-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateSecond }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
        <kuantic-timeline-item>
          <kuantic-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ dateThird }}</template>
            {{ contentThird }}
          </kuantic-card>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </kuantic-widget>

    <kuantic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalSimple')">
      <div class="va-row">
        <div class="xs12 md6 flex">
          <kuantic-timeline vertical>
            <kuantic-timeline-item active>
              <kuantic-card
                slot="after"
              >
                <template slot="title">{{ dateFirst }}</template>
                {{ contentFirst }}
              </kuantic-card>
            </kuantic-timeline-item>
            <kuantic-timeline-item>
              <kuantic-card
                slot="after"
              >
                <template slot="title">{{ dateSecond }}</template>
                {{ contentFirst }}
              </kuantic-card>
            </kuantic-timeline-item>
          </kuantic-timeline>
        </div>
        <div class="xs12 md6 flex">
          <kuantic-timeline vertical>
            <kuantic-timeline-item active>
              <kuantic-card
                theme="dark"
                slot="after"
              >
                <template slot="title">{{ dateFirst }}</template>
                {{ contentFirst }}
              </kuantic-card>
            </kuantic-timeline-item>
            <kuantic-timeline-item>
              <kuantic-card
                theme="dark"
                slot="after"
              >
                <template slot="title">{{ dateSecond }}</template>
                {{ contentFirst }}
              </kuantic-card>
            </kuantic-timeline-item>
          </kuantic-timeline>
        </div>
      </div>
    </kuantic-widget>

    <kuantic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalLabel')">
      <kuantic-timeline vertical>
        <kuantic-timeline-item active>
          <span class="kuantic-timeline-item__text" slot="before">{{ dateFirst }}</span>
          <kuantic-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ titleFirst }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
        <kuantic-timeline-item>
          <span class="kuantic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <kuantic-card
            slot="after"
            stripe="success"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </kuantic-widget>

    <kuantic-widget class="no-h-padding no-v-padding"
                    :headerText="$t('timelines.verticalCentered')">
      <kuantic-timeline vertical centered>
        <kuantic-timeline-item active>
          <span class="kuantic-timeline-item__text" slot="before">{{ dateFirst }}</span>
          <kuantic-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleFirst }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
        <kuantic-timeline-item>
          <span class="kuantic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <kuantic-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
        <kuantic-timeline-item>
          <span class="kuantic-timeline-item__text" slot="before">{{ dateSecond }}</span>
          <kuantic-card
            slot="after"
            theme="dark"
          >
            <template slot="title">{{ titleSecond }}</template>
            {{ contentFirst }}
          </kuantic-card>
        </kuantic-timeline-item>
      </kuantic-timeline>
    </kuantic-widget>

  </div>
</template>

<script>

export default {
  name: 'timelines',
  data () {
    return {
      dateFirst: 'April 10 15:00',
      titleFirst: 'Make design',
      titleSecond: 'Develop an app',
      titleThird: 'Submit an app',
      horizontalSimpleContentFirst: 'Pre-sail rate: 50%',
      dateSecond: 'May 22 10:00',
      horizontalSimpleContentSecond: 'Pre-sail rate: 40%',
      dateThird: 'July 19 17:45',
      horizontalSimpleContentThird: 'Pre-sail rate: 20%',
      contentFirst: 'The unique stripes of zebras make them one of the animals most familiar to people.',
      contentSecond: 'They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands.',
      contentThird: 'However, various anthropogenic factors have had a severe impact on zebra populations',
    }
  },
}
</script>

<style lang="scss">
.timelines {
  &__horizontal-long {
    .widget-body {
      overflow-x: auto;
    }

    &__timeline {
      min-width: 800px;
    }
  }
}
</style>

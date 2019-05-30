<template>
  <div class="ui-typography">
    <div class="va-row">
      <div class="md12 flex">
        <kuantic-widget>
          <div class="vue-misc">
            <h2>{{ $t('about.title') }} </h2>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://expressjs.com/" target="_blank" class="btn btn-info btn-sm">{{ $t('about.expressjs') }}</a>
                    {{ $t('about.expressjsMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.jwtMsg') }} {{ $t('about.jwtMsgTokens') }}
                    <a href="https://jwt.io/" target="_blank" class="btn btn-info btn-sm">{{ $t('about.jwt') }}</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.jwtMsgAuthenticates') }}
                    <a href="https://jwt.io/" target="_blank" class="btn btn-info btn-sm">{{ $t('about.jwt') }}</a>
                    {{ $t('about.passportMsg') }}
                    <a href="http://www.passportjs.org/" target="_blank" class="btn btn-danger btn-sm">
                      {{ $t('about.passport') }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.bcryptjsMsg') }} {{ $t('about.package') }}
                    <a href="https://www.npmjs.com/package/bcryptjs" target="_blank" class="btn btn-success btn-sm">
                      {{ $t('about.bcryptjs') }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.socketIoMsg') }}
                    <a href="https://socket.io/" target="_blank" class="btn btn-info btn-sm">{{ $t('about.socketIo') }}</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://www.mongodb.com/" target="_blank" class="btn btn-info btn-sm">{{ $t('about.mongoDB') }}</a>
                    {{ $t('about.and') }}
                    <a href="https://www.mongodb.com/cloud/atlas" target="_blank" class="btn btn-dark btn-sm">
                      {{ $t('about.mongoDBAtlas') }}
                    </a>
                    {{ $t('about.mongoAtlasMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.loggingMsg') }}
                    <a href="https://github.com/winstonjs/winston/#readme" target="_blank" class="btn btn-info btn-sm">
                      {{ $t('about.winston') }}
                    </a>
                    {{ $t('about.and') }}
                    <a href="https://github.com/expressjs/morgan#readme" target="_blank" class="btn btn-warning btn-sm">
                      {{ $t('about.morgan') }}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://github.com/kimmobrunfeldt/concurrently#readme" target="_blank" class="btn btn-danger btn-sm">
                      {{ $t('about.concurrently') }}
                    </a>
                    {{ $t('about.concurrentlyMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://github.com/kimmobrunfeldt/concurrently#readme" target="_blank" class="btn btn-danger btn-sm">
                      {{ $t('about.crossEnv') }}
                    </a>
                    {{ $t('about.crossEnvMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://vuejs.org/" target="_blank" class="btn btn-success btn-sm">{{ $t('about.vuejs') }}</a>
                    {{ $t('about.vuejsMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://mattboldt.com/demos/typed-js/" target="_blank" class="btn btn-success btn-sm">
                      {{ $t('about.vueTypedjs') }}
                    </a>
                    {{ $t('about.vueTypedjsMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://kazupon.github.io/vue-i18n/" target="_blank" class="btn btn-success btn-sm">
                      {{ $t('about.vuexI18n') }}
                    </a>
                    {{ $t('about.vuexI18nMsg') }}.
                  </span>
                  <span>
                    <a href="https://github.com/mashpie/i18n-node/" target="_blank" class="btn btn-danger btn-sm">
                      {{ $t('about.i18n') }}
                    </a>
                    {{ $t('about.i18nMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://travis-ci.org/" target="_blank" class="btn btn-info btn-sm">
                      {{ $t('about.travisCI') }}
                    </a>
                    {{ $t('about.travisCIMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://www.heroku.com/" target="_blank" class="btn btn-warning btn-sm">
                      {{ $t('about.heroku') }}
                    </a>
                    {{ $t('about.herokuMsg') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    {{ $t('about.iconsMsg') }}:
                   <a href="https://fontawesome.com/" target="_blank" class="btn btn-info btn-sm">
                      {{ $t('about.fontawesome') }}
                    </a>
                   <a href="http://www.entypo.com/" target="_blank" class="btn btn-warning btn-sm">
                      {{ $t('about.entypo') }}
                    </a>
                   <a href="http://fontello.github.io/fontelico.font/demo.html" target="_blank" class="btn btn-danger btn-sm">
                      {{ $t('about.fontelico') }}
                    </a>
                   <a href="https://www.glyphicons.com/" target="_blank" class="btn btn-success btn-sm">
                      {{ $t('about.glyphicons') }}
                    </a>
                  {{ $t('about.iconsMsgOwn') }}.
                  </span>
                </div>
              </div>
            </div>
            <!-- <div class="va-row">
              <div class="flex md12">
                <div class="well">
                  <span>
                    <a href="https://github.com/vikkio88/vue-flag-icon#readme" target="_blank" class="btn btn-info btn-sm">
                      {{ $t('about.vueFlagIcon') }}
                    </a>
                    {{ $t('about.vueFlagIconMsg') }}
                  </span>
                </div>
              </div>
            </div> -->
          </div>
        </kuantic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography',
}
</script>

<style lang="scss">
.ui-typography {
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

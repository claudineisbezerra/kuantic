<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px;">
      <div class="va-row">
        <div class="flex lg4">
          <kuantic-progress-bar
            :value="35"
            type="circle"
            theme="Warning"
            background-theme="White"
          />
        </div>
        <div class="flex lg4">
          <kuantic-progress-bar
            :value="75"
            text="circle"
            type="circle"
            theme="Info"
            :animated="true"
            background-theme="White"
          />
        </div>
      </div>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <div class="va-row">
        <div class="flex lg4">
          <kuantic-progress-bar :value="55" theme="Warning" type="vertical"
                                size="thin"/>
        </div>
        <div class="flex lg4">
          <kuantic-progress-bar :value="40" theme="Danger" text="second"
                                type="vertical"/>
        </div>
        <div class="flex lg4">
          <kuantic-progress-bar :value="85" theme="Info" type="vertical"
                                size="thick" :animated="true"/>
        </div>
      </div>
    </div>
    <div class="demo-container__item" style="width: 300px">
      <kuantic-progress-bar :value="10" theme="Primary"/>
      <kuantic-progress-bar :value="30" theme="Info" text="blue"
                            :animated="true"/>
      <kuantic-progress-bar :value="50" theme="Warning"/>
      <kuantic-progress-bar :value="70" theme="Danger" text="Text"/>
      <kuantic-progress-bar :value="90" theme="Success" :animated="true"/>
    </div>
  </div>
</template>

<script>

import KuanticProgressBar from './KuanticProgressBar'

export default {
  components: {
    KuanticProgressBar,
  },
}
</script>

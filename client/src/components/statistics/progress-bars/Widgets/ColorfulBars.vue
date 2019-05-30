<template>
  <kuantic-widget headerText="Colorful Bars">
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basic' | translate}}
        <kuantic-progress-bar :value="100" theme="Danger"/>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thin' | translate}}
        <kuantic-progress-bar :value="100" size="thin" theme="Info"/>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thick' | translate}}
        <kuantic-progress-bar :value="100" size="thick" theme="Warning"/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex sm4 md4">
        {{'progressBars.basicVertical' | translate}}
        <div class="pb-container">
          <kuantic-progress-bar :value="100" type="vertical" theme="Success"/>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.thinVertical' | translate}}
        <div class="pb-container">
          <kuantic-progress-bar :value="100" size="thin" type="vertical"
                                theme="Black"/>
        </div>
      </div>
      <div class="flex sm4 md4">
        {{'progressBars.circle' | translate}}
        <div class="pb-container">
          <kuantic-progress-bar :value="100" type="circle"/>
        </div>
      </div>
    </div>
  </kuantic-widget>
</template>

<script>
export default {
  name: 'standard-bars',
}
</script>

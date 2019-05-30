<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <kuantic-accordion>
        <kuantic-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand first content
            </div>
          </div>
        </kuantic-collapse>
        <kuantic-collapse>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand second content
            </div>
          </div>
        </kuantic-collapse>
        <kuantic-collapse>
          <span slot="header"> Let's Go </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand three content
            </div>
          </div>
        </kuantic-collapse>
      </kuantic-accordion>
    </div>
    <div class="demo-container__item" style="width: 900px;">
      <kuantic-accordion expand>
        <kuantic-collapse>
          <span slot="header"> Expand This Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand first content
            </div>
          </div>
        </kuantic-collapse>
        <kuantic-collapse>
          <span slot="header"> Another Block </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand second content
            </div>
          </div>
        </kuantic-collapse>
        <kuantic-collapse>
          <span slot="header"> Let's Go </span>
          <div slot="body">
            <div style="padding: 10px;">
              Expand three content
            </div>
          </div>
        </kuantic-collapse>
      </kuantic-accordion>
    </div>
  </div>
</template>

<script>
import KuanticCollapse from './KuanticCollapse.vue'
import KuanticAccordion from './KuanticAccordion.vue'

export default {
  components: { KuanticCollapse, KuanticAccordion },
}
</script>

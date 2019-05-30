<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 500px;">
      <kuantic-simple-select
        label="Position"
        v-model="value"
        option-key="description"
        :options="imagePositions"
      />
    </div>
  </div>
</template>

<script>
// Fixes https://github.com/claudineisbezerra/kuantic/issues/413

import KuanticSimpleSelect from './KuanticSimpleSelect'

export default {
  name: 'my-component',
  components: { KuanticSimpleSelect },
  data: () => {
    return {
      value: null,
      imagePositions: [
        {
          id: '1',
          description: '1',
        },
        {
          id: '2',
          description: '2',
        },
      ],
    }
  },
}
</script>

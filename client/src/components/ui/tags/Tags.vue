<template>
  <div class="tags-page">
    <div class="flex md12">
      <kuantic-widget :headerText="$t('tags.default')">
        <kuantic-tag-group v-model="tags"/>
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('tags.removable')">
        <kuantic-tag-group v-model="removableTags" removable/>
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('tags.colored')">
        <kuantic-tag-group v-model="coloredTags" removable/>
      </kuantic-widget>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
      tagss: [],
      tags: [
        'Ford',
        'Toyota',
        'Volkswagen',
        'Opel',
        'Honda',
        'Porsche',
      ],
      removableTags: [
        'Ford',
        'Toyota',
        'Volkswagen',
        'Opel',
        'Honda',
        'Porsche',
      ],
      coloredTags: [
        {
          name: 'Potato',
          type: 'primary',
        },
        {
          name: 'Tomato',
          type: 'danger',
        },
        {
          name: 'Sweet corn',
          type: 'info',
        },
        {
          name: 'Carrot',
          type: 'dark',
        },
        {
          name: 'Broccoli',
          type: 'warning',
        },
        {
          name: 'Green bean',
          type: 'pale',
        },
      ],
    }
  },
}
</script>

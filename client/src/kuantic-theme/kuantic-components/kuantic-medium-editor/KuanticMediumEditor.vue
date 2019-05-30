<template>
  <div class="kuantic-medium-editor">
    <slot></slot>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'

export default {
  name: 'kuantic-medium-editor',

  props: {
    editorOptions: {
      type: Object,
      default: () => {
        return {
          buttonLabels: 'fontawesome',
          autoLink: true,
          toolbar: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'anchor',
              'h1',
              'h2',
              'h3',
            ],
          },
        }
      },
    },
  },

  data () {
    return {
      editor: null,
    }
  },

  mounted () {
    this.initEditor()
  },

  beforeDestroy () {
    this.destroyEditor()
  },

  methods: {
    initEditor () {
      this.editor = new MediumEditor(this.$el, this.editorOptions)
      this.$emit('initialized', this.editor)
    },

    destroyEditor () {
      this.editor.destroy()
    },
  },
}
</script>

<style lang="scss">
@import "~medium-editor/src/sass/medium-editor";

.kuantic-medium-editor {
  &:focus {
    outline: none;
  }
}
</style>

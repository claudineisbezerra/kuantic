<template>
  <div
    class="file-upload-list-item d-flex"
    :class="{'file-upload-list-item--undo': removed}"
  >
    <div
      class="va-row"
      v-if="removed"
    >
      <div class="flex md12">
        <kuantic-file-upload-undo
          @recover="recoverFile"
        />
      </div>
    </div>

    <div class="va-row align--center" v-else>
      <div class="file-upload-list-item__name flex xs12 lg3 ellipsis">
        {{ file.name }}
      </div>
      <div class="file-upload-list-item__size flex xs12 lg3">
        {{ file.size }}
      </div>
      <div class="file-upload-list-item__date flex xs12 lg4">
        <span>{{ $t('fileUpload.uploadedOn')}} {{ file.date }}</span>
      </div>
      <!-- TODO Use global classes instead -->
      <div class="file-upload-list-item__button-container flex xs12 lg2">
        <button
          type="button"
          class="btn-text btn-text--primary"
          @click="removeFile"
        >
          {{ $t('fileUpload.delete') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import KuanticFileUploadUndo from './KuanticFileUploadUndo'

export default {
  name: 'kuantic-file-upload-list-item',
  components: {
    KuanticFileUploadUndo: KuanticFileUploadUndo,
  },
  props: {
    file: {
      type: Object,
    },
  },
  data () {
    return {
      removed: false,
    }
  },
  methods: {
    showFilePreview () {

    },
    removeFile () {
      this.removed = true
      setTimeout(() => {
        if (this.removed) {
          this.$emit('remove')
          this.removed = false
        }
      }, 2000)
    },
    recoverFile () {
      this.removed = false
    },
  },
}
</script>

<style lang='scss'>
.file-upload-list-item {
  & + & {
    margin-top: 0.5rem;
  }

  background-color: $white;
  box-shadow: $sidebar-box-shadow;
  padding: 0.6rem 1rem;

  &__size {
    margin: auto;
    color: $gray-light;
  }

  &__date {
    margin: auto;
    color: $gray-light;
  }

  &--undo {
    background: none;
    box-shadow: none;
  }

  @include media-breakpoint-up(lg) {
    &__button-container {
      text-align: right;
    }
  }
}
</style>

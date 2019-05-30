<template>
  <div class="file-upload-page">
    <div class="flex md12">
      <kuantic-widget :headerText="$t('fileUpload.advancedMediaGallery')">
        <kuantic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          dropzone
          v-model="advancedGallery"
        />
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('fileUpload.advancedUploadList')">
        <kuantic-file-upload
          dropzone
          v-model="advancedList"
        />
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('fileUpload.single')">
        <kuantic-file-upload
          type="single"
          v-model="single"
        />
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('fileUpload.mediaGallery')">
        <kuantic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          v-model="gallery"
        />
      </kuantic-widget>
    </div>

    <div class="flex md12">
      <kuantic-widget :headerText="$t('fileUpload.uploadList')">
        <kuantic-file-upload
          v-model="list"
        />
      </kuantic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'file-upload',
  data () {
    return {
      advancedGallery: [],
      advancedList: [],
      single: [],
      gallery: [],
      list: [],
    }
  },
}
</script>

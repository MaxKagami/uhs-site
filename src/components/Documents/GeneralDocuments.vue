<template>
  <div>
    <b-button v-for="document in documents"
              :key="document.id"
              :href="document.url"
              target="_blank"
              block variant="outline-success">
      {{ document.name }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'general-documents',
  resource: 'GeneralDocuments',
  props: [ 'documents' ]
}
</script>

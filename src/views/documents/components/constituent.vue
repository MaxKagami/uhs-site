<template>
  <div>
    <b-button v-for="document in documents"
              :key="document.id"
              :href="$configs.backend_url + document.url"
              target="_blank"
              block variant="outline-success">
      <v-icon name="file-pdf"/>
      {{ document.name }}
      .PDF
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'constituent-documents',
  resource: 'ConstituentDocuments',
  props: [ 'documents' ]
}
</script>

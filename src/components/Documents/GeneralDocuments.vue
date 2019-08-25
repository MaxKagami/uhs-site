<template>
  <div>
    <b-container>
      <b-button v-for="document in documents"
                :key="document.id"
                :href="$config.backend_url + document.url"
                target="_blank"
                block variant="outline-success">
        {{ document.name }}
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'general-documents',
  resource: 'GeneralDocuments',
  props: [ 'documents' ]
}
</script>

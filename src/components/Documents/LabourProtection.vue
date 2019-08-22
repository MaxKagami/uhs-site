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
  name: 'labour-protection',
  resource: 'LabourProtection',
  props: [ 'documents' ]
}
</script>

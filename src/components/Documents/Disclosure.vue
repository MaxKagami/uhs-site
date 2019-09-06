<template>
  <div>
    <div role="tablist">
      <b-card no-body
              class="mb-1"
              v-for="form in forms"
              :key="form.id">
        <b-card-header class="p-1"
                       header-tag="header"
                       role="tab">
          <b-button block
                    href="#"
                    v-b-toggle.accordion="'accordion-' + form.id"
                    variant="success"
                    @click="getDocuments(form.id)">
            {{ form.name }}
          </b-button>
        </b-card-header>
        <b-collapse :id="'accordion-' + form.id"
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body>
            <b-button block
                      v-for="document in documents"
                      :key="document.id"
                      :href="$configs.backend_url + document.url"
                      target="_blank"
                      variant="outline-success">
              {{ document.name }}
            </b-button>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from '@/helpers/axios.js'
export default {
  name: 'disclosure',
  resource: 'Disclosure',
  data: () => ({
    forms_resource: '/document_forms',
    documents_resource: '/form_mappings?form_id=',
    forms: [],
    documents: []
  }),
  created () {
    this.getForms()
  },
  methods: {
    async getForms () {
      this.isLoading = true
      const { data } = await axios(this.forms_resource)
      this.isLoading = false
      this.forms = data
    },
    async getDocuments (id) {
      this.isLoading = true
      const { data } = await axios(this.documents_resource + id)
      this.isLoading = false
      this.documents = data
    }
  }
}
</script>

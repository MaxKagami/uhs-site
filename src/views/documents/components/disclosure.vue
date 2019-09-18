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
            <b-row>
              <b-col cols="1">
                <v-icon class="when-opened" name="chevron-up"/>
                <v-icon class="when-closed" name="chevron-down"/>
              </b-col>
              <b-col cols="10" class="text-center">{{ form.name }}</b-col>
              <b-col cols="1">
                <v-icon class="when-opened" name="chevron-up"/>
                <v-icon class="when-closed" name="chevron-down"/>
              </b-col>
            </b-row>
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
              <v-icon name="file-pdf"/>
              {{ document.name }}
              .PDF
            </b-button>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'disclosure',
  resource: 'Disclosure',
  data: () => ({
    forms: [],
    documents: [],
    isLoading: false
  }),
  created () {
    this.getForms()
  },
  methods: {
    async getForms () {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.documents.forms_resource)
      this.isLoading = false
      this.forms = data
    },
    async getDocuments (id) {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.documents.documents_resource + id)
      this.isLoading = false
      this.documents = data
    }
  }
}
</script>

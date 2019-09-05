<template>
  <div>
    <b-jumbotron class="services-banner">
      <b-container>
        <h1><span>{{ $services.main.subhead1 }}<br/>{{ $services.main.subhead2 }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <span v-html="$services.main.content"></span>
        <br/>
        <div role="tablist">
          <b-card no-body
                  class="mb-1"
                  v-for="service in services"
                  :key="service.id">
            <b-card-header class="p-1"
                           header-tag="header"
                           role="tab">
              <b-button block
                        href="#"
                        v-b-toggle.accordion="'accordion-' + service.id"
                        variant="success"
                        @click="getDocuments(service.id)">
                {{ service.name }}
              </b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + service.id"
                        accordion="my-accordion"
                        role="tabpanel">
              <b-card-body>
                <b-button block
                          v-for="document in documents"
                          :key="document.id"
                          :href="$config.backend_url + document.url"
                          target="_blank"
                          variant="outline-success">
                  {{ document.name }}
                </b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from '@/helpers/axios.js'
export default {
  name: 'services',
  resource: 'Services',
  data: () => ({
    services_url: '/services',
    mapping_url: '/service_mappings?service_id=',
    services: [],
    documents: [],
    isLoading: false
  }),
  mounted () {
    this.getServices()
  },
  methods: {
    async getServices () {
      this.isLoading = true
      const { data } = await axios(this.services_url)
      this.isLoading = false
      this.services = data
    },
    async getDocuments (id) {
      this.isLoading = true
      const { data } = await axios(this.mapping_url + id)
      this.isLoading = false
      this.documents = data
    }
  }
}
</script>

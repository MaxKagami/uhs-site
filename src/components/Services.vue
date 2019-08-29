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
                        @click="getServiceMappings(service.id)">
                {{ service.name }}
              </b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + service.id"
                        accordion="my-accordion"
                        role="tabpanel">
              <b-card-body>
                <b-button block
                          v-for="document in mappings"
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
import Axios from 'axios'
export default {
  name: 'services',
  resource: 'Services',
  data: () => ({
    services: [],
    mappings: []
  }),
  created () {
    this.getServices()
  },
  methods: {
    getServices () {
      Axios.get('http://localhost:3000/api/v1/services')
        .then(response => {
          this.services = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    },
    getServiceMappings (id) {
      Axios.get('http://localhost:3000/api/v1/service_mappings?service_id=' + id)
        .then(response => {
          this.mappings = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>

<style>
.services-banner {
  background: url("../assets/bg_coop.jpg") no-repeat center;
  padding-top: 220px;
  padding-bottom: 60px;
}
</style>

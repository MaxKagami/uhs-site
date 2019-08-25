<template>
  <div>
    <b-container>
      <div role="tablist">
        <b-card no-body
                v-for="form in forms"
                :key="form.id"
                class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block
                      href="#"
                      v-b-toggle.accordion="'accordion-' + form.id"
                      variant="success"
                      @click="getBundles(form.id)">
              {{ form.name }}
            </b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + form.id"
                      accordion="my-accordion" r
                      ole="tabpanel">
            <b-card-body>
              <b-button block
                        v-for="document in bundles"
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
</template>

<script>
import Axios from 'axios'
export default {
  name: 'disclosure',
  resource: 'Disclosure',
  data: () => ({
    forms: [],
    bundles: []
  }),
  created () {
    this.getForms()
  },
  methods: {
    getForms () {
      Axios.get('http://localhost:3000/api/v1/forms')
        .then(response => {
          this.forms = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    },
    getBundles (number) {
      Axios.get('http://localhost:3000/api/v1/form_bundles?form_id=' + number)
        .then(response => {
          this.bundles = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>

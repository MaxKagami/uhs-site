<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.answers.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <div role="tablist">
          <b-card v-for="answer in answers" :key="answer.id" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion="'accordion-' + answer.id" variant="success">{{ answer.title }}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + answer.id" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text><span v-html="answer.text"></span></b-card-text>
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
  name: 'answers',
  resource: 'Answers',
  data: () => ({
    resource_url: '/answers',
    answers: [],
    isLoading: false
  }),
  mounted () {
    this.getAnswers(this.resource_url)
  },
  methods: {
    async getAnswers (url) {
      this.isLoading = true
      const { data } = await axios(url)
      this.isLoading = false
      this.answers = data
    }
  }
}
</script>

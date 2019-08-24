<template>
  <div>
    <div class="img_wrapper">
      <b-img :src="background" fluid class="img_opacity"/>
      <div class="caption">
        <h1>{{ $answers.name }}</h1>
      </div>
    </div>
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
</template>

<script>
import Axios from 'axios'
export default {
  name: 'answers',
  resource: 'Answers',
  data: () => ({
    background: require('@/assets/bg.jpg'),
    answers: []
  }),
  created () {
    this.getAnswers()
  },
  methods: {
    getAnswers () {
      Axios.get('http://localhost:3000/api/v1/answers')
        .then(response => {
          this.answers = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>

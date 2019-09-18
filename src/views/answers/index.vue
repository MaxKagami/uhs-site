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
              <Button :id="answer.id" :title="answer.title"/>
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
export default {
  name: 'answers',
  resource: 'Answers',
  data: () => ({
    answers: [],
    isLoading: false,
    btn_arrow_name: 'chevron-down'
  }),
  mounted () {
    this.getAnswers(this.$configs.answers.answers_resource)
  },
  methods: {
    async getAnswers (url) {
      this.isLoading = true
      const { data } = await this.$axios(url)
      this.isLoading = false
      this.answers = data
    }
  }
}
</script>

<style lang="scss">
 @import "styles";
</style>

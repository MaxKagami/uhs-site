<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.news.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <b-container>
      <b-img :src="getImageURL(post.image)"/>
      <h1>{{ post.title }}</h1>
      <span v-html="post.text"></span>
      <router-link :to="{ name: 'news-feed' }"></router-link>
    </b-container>
  </div>
</template>mounted

<script>
export default {
  name: 'news-post',
  resource: 'NewsPost',
  props: ['id'],
  data: () => ({
    post: [],
    isLoading: false
  }),
  created () {
    this.getPost(this.id)
  },
  methods: {
    async getPost (id) {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.news.posts_resource + id)
      this.isLoading = false
      this.posts = data
    },
    getImageURL (path) {
      return (this.$configs.frontend_url + path)
    }
  }
}
</script>

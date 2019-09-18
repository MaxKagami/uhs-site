<template>
  <div class="box">
    <b-container>
      <b-row>
        <b-col cols="9">
          <b-img :src="getImageURL(post.image)"/>
          <h1>{{ post.title }}</h1>
          <span v-html="post.text"></span>
        </b-col>
        <b-col cols="3">
          <div class="more-content">
            <h2>Последние новости</h2>
            <div class="text-decoration-none"
                 v-for="post in posts"
                 :key="post.id">
              <span>{{ post.date }}</span>
              <router-link :to="{ name: 'post', params: { id: post.id } }">
                {{ post.title }}
              </router-link>
            </div>
          </div>
        </b-col>
        <router-link :to="{ name: 'news' }">Назад</router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'post',
  resource: 'Post',
  props: ['id'],
  data: () => ({
    post: [],
    posts: [],
    isLoading: false
  }),
  created () {
    this.getPost(this.id)
    this.getAllPosts()
  },
  methods: {
    async getPost (id) {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.news.posts_resource + id)
      this.isLoading = false
      this.post = data
    },
    async getAllPosts () {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.news.posts_resource)
      this.isLoading = false
      this.posts = data
    },
    getImageURL (path) {
      return (this.$configs.frontendUrl + path)
    }
  }
}
</script>

<style lang="scss">
  @import "styles";
</style>

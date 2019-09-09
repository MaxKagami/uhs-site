<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.news.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <router-link
          v-for="post in posts"
          :key="post.id"
          active-class="is-active"
          class="link"
          :to="{ name: 'news-post', params: { id: post.id } }">
          <b-card no-body
                  class="overflow-hidden news-card">
            <b-row>
              <b-col md="4">
                <b-card-img :src="getImageURL(post.image)" class=""></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="post.title" :sub-title="post.data">
                  <b-card-text>{{ getFragment(post.text) }}<span class="bold">{{ $constants.news.more_text }}</span></b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </router-link>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-feed',
  resource: 'NewsFeed',
  data: () => ({
    posts: [],
    errors: [],
    isLoading: false
  }),
  created () {
    this.getPosts()
  },
  computed: {
  },
  methods: {
    async getPosts () {
      this.isLoading = true
      const { data } = await this.$axios(this.$configs.news.posts_resource)
      this.isLoading = false
      this.posts = data
    },
    getImageURL (path) {
      return (this.$configs.frontend_url + path)
    },
    getFragment (text) {
      return (text.replace(/<[^>]+>/g, ' ').slice(0, 150) + ' ... ')
    }
  }
}
</script>

<style>
.news-card {
  max-width: 1000px;
  max-height: 300px;
  margin-bottom: 15px;
  border-radius: 0;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
}
.card-img {
  height: 100%;
  border-radius: 0;
}
.card-title {
  font-size: 1em;
  font-weight: bold;
  color: black;
}
.card-text {
  font-size: 1em;
  color: #40403e;
}
.bold  {
  font-weight: bold;
}
</style>

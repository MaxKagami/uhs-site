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
          class="text-decoration-none"
          :to="{ name: 'news-post', params: { id: post.id } }">
          <b-card no-body
                  class="overflow-hidden news-card">
            <b-row>
              <b-col md="4">
                <b-card-img :src="getImageURL(post.image)"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <b-card-sub-title>{{ post.date }}</b-card-sub-title>
                  <b-card-title>{{ post.title }}</b-card-title>
                  <b-card-text>
                    {{ getFragment(post.text) }}
                    <span>{{ $constants.news.more_text }}</span>
                  </b-card-text>
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

<style lang="scss">
@import "../../assets/style";
.default-banner {
  background: url("../../assets/sm.jpg");
}
.news-card {
  max-width: 1000px;
  height: 200px;
  margin-bottom: 15px;
  border-radius: 0;
  box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
  &:hover .card-title, &:hover .card-text span {
    color: $green;
}
.card-img {
  height: 100%;
  border-radius: 0;
}
.card-title {
  font-size: 1em;
  font-weight: bold;
  color: $dark-blue;
  }
}
.card-text {
  font-size: 1em;
  color: #40403e;
  & span {
    color: $dark-blue;
  }
}
.bold  {
  font-weight: bold;
}
</style>

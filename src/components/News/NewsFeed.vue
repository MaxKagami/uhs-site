<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $news.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
          <b-card v-for="post in posts"
                  :key="post.id"
                  overlay
                  style=""
                  :img-src="getImageURL(post.image)"
                  img-alt="Card Image"
                  text-variant="white"
                  :title="post.title"
                  sub-title="Subtitle">
            <b-card-text>Some text</b-card-text>
          </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'news-feed',
  resource: 'NewsFeed',
  data: () => ({
    posts: [],
    errors: []
  }),
  created () {
    this.getPosts()
  },
  computed: {
  },
  methods: {
    getPosts () {
      Axios.get('http://localhost:3000/api/v1/news_posts')
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    },
    getImageURL (path) {
      return (`http://localhost:3000/regop-komi-ru/${path}`)
    }
  }
}
</script>

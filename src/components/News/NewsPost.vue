<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $news.name }}</span></h1>
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
import Axios from 'axios'
export default {
  name: 'news-post',
  resource: 'NewsPost',
  props: ['id'],
  data: () => ({
    post: []
  }),
  created () {
    this.getPost(this.id)
  },
  methods: {
    getPost (id) {
      Axios.get('http://localhost:3000/api/v1/news_posts/' + id)
        .then(response => {
          this.post = response.data
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

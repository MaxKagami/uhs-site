<template>
  <div>
    <div class="img_wrap"><b-img :src="background" fluid class="img_opacity"/></div>
    <div class="card-carousel-wrapper">
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
            <div class="card-carousel--card" v-for="post in posts" :key="post.id" >
              <img :src="buildImageUrl(post.image)"/>
              <div class="card-carousel--card--footer">
                <p>{{ post.date}}</p>
                <p>{{ post.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'news-feed',
  resource: 'NewsFeed',
  data () {
    return {
      background: require('@/assets/bg.jpg'),
      posts: [],
      errors: [],
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220
    }
  },
  created () {
    this.getPosts()
  },
  computed: {
    atEndOfList () {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.posts.length - this.windowSize)
    },
    atHeadOfList () {
      return this.currentOffset === 0
    }
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
    buildImageUrl (name) {
      return (`http://localhost:3000/regop-komi-ru/news_images/${name}`)
    },
    moveCarousel (direction) {
    // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    }
  }
}
</script>
<style>
</style>

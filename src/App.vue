<template>
  <main>
    <navigation/>
    <home/>
    <footer/>
    <router-view id="app"/>
  </main>
</template>

<script>
import Home from './components/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NewsFeed from './components/NewsFeed'
import NewsPost from './components/NewsPost'
export default {
  name: 'app',
  components: { Home, Navigation, Footer, NewsFeed, NewsPost }
}
</script>

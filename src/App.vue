<template>
  <main>
    <navigation/>
    <router-view id="app"/>
    <Footer/>
  </main>
</template>

<script>
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: { Home, Navigation, Footer },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

<template>
  <main>
    <navigation/>
    <router-view id="app"/>
    <Footer/>
  </main>
</template>

<script>
import Navigation from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  name: 'app',
  components: { Navigation, Footer },
  data () {
    return {
    }
  }
}
</script>

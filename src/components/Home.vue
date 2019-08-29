<template>
  <div>
    <b-jumbotron class="home-banner">
      <b-container>
        <h1><span>{{ $home.subhead }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <span v-html="$home.content"></span>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  resource: 'Home',
  data: () => ({
  })
}
</script>

<style>
.home-banner {
  background: url("../assets/bg.jpg") no-repeat center;
  padding-top: 260px;
  padding-bottom: 60px;
}
</style>

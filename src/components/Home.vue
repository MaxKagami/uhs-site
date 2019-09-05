<template>
  <div>
    <b-jumbotron class="home-banner">
      <b-container>
        <h1><span>{{ $constants.home.subhead }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <span v-html="$contents.home.text"></span>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  resource: 'Home'
}
</script>

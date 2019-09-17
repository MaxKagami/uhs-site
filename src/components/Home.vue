<template>
  <div>
    <b-jumbotron class="home-banner">
      <b-container>
        <h1><span>{{ $constants.home.subhead }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <span v-html="$contents.home.text.p1"/>
        <b-button block
                  squared
                  type="submit"
                  variant="outline-success">{{ $constants.home.button }}
        </b-button>
        <br>
        <span v-html="$contents.home.text.p2"/>
        <span v-html="$contents.home.text.p3"/>
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

<style lang="scss">
  .home-banner {
    background: url("../assets/bg.jpg") no-repeat center;
    padding-top: 260px;
    padding-bottom: 60px;
  }
</style>

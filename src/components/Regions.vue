<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.regions.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container></b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regions',
  resource: 'Regions',
  data: () => ({
  })
}
</script>

<style lang="scss">
  .default-banner {
    background: url("../assets/sm.jpg");
  }
</style>

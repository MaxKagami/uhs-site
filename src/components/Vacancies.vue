<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.vacancies.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container></b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vacancies',
  resource: 'Vacancies'
}
</script>

<style lang="scss">
  .default-banner {
    background: url("../assets/sm.jpg");
    padding-top: 60px;
    padding-bottom: 20px;
  }
</style>

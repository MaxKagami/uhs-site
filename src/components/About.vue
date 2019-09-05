<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.about.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <div><span v-html="$contents.about.text"></span></div>
        <div></div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  resource: 'About'
}
</script>

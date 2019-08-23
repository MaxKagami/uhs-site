<template>
  <div>
    <div class="img_wrapper">
      <b-img :src="background" fluid class="img_opacity"/>
      <div class="caption">
        <h1>{{ $about.name }}</h1>
        <p>{{ $about.subhead  }}</p>
      </div>
    </div>
    <b-card>
      <b-card-title>{{ $about.block.caption }}</b-card-title>
      <b-card-text>{{ $about.block.text }}</b-card-text>
      <b-card-text>{{ $about.block.link }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'about',
  resource: 'About',
  data () {
    return {
      background: require('@/assets/bg.jpg')
    }
  }
}
</script>

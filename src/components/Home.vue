<template>
  <div>
    <b-jumbotron>
      <b-container>
        <h1><span>{{ $about.subhead }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <h1>Региональный оператор по обращению с твердыми коммунальными отходами (ТКО)</h1>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  resource: 'Home',
  data () {
    return {
      background: require('@/assets/bg.jpg')
    }
  }
}
</script>

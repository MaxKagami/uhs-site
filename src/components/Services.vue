<template>
  <div>
    <b-img :src="background" fluid/>
  </div>
</template>

<script>
export default {
  name: 'services',
  resource: 'Services',
  data () {
    return {
      background: require('@/assets/bg_coop.jpg')
    }
  }
}
</script>

<template>
  <div>
    <div class="img_wrap"><b-img :src="background" fluid class="img_opacity"/></div>
    <b-card>
      <b-card-title>{{ about_title }}</b-card-title>
      <b-card-text>{{ about_text }}</b-card-text>
      <b-card-text>{{ about_link }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'about',
  resource: 'About',
  data () {
    return {
      background: require('@/assets/bg.jpg'),
      about_title: 'ОПЕРАТОР ПО ОБРАЩЕНИЮ С ТКО',
      about_text: 'С ноября 2018 года ООО «Ухтажилфонд» осуществляет деятельность по сбору и размещению ТКО в двадцати муниципальных образованиях республики Коми.',
      about_link: 'География присутствия >'
    }
  }
}
</script>

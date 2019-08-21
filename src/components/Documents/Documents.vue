<template>
  <div>
    <div class="img_wrapper">
      <b-img :src="background" fluid class="img_opacity"/>
      <div class="caption">
        <h1>Документы</h1>
      </div>
    </div>
    <b-tabs content-class="mt-3" tabs align="center">
      <b-tab title="Учредительные документы"><constituent-documents/></b-tab>
      <b-tab title="Нормативно-правовые акты"></b-tab>
      <b-tab title="Раскрытие информации"></b-tab>
      <b-tab title="Охрана труда"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ConstituentDocuments from './ConstituentDocuments'
export default {
  name: 'documents',
  components: { ConstituentDocuments },
  resource: 'Documents',
  data () {
    return {
      background: require('@/assets/bg.jpg')
    }
  }
}
</script>

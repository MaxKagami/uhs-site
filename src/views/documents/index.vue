<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.documents.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <b-tabs content-class="mt-3" tabs align="left">
          <b-tab title="Учредительные документы" @click="getDocuments(constituent_id)"><constituent-documents :documents="documents"/></b-tab>
          <b-tab title="Нормативно-правовые акты" @click="getDocuments(general_id)"><general-documents :documents="documents"/></b-tab>
          <b-tab title="Раскрытие информации" @click="getDocuments(disclosure_id)"><disclosure/></b-tab>
          <b-tab title="Охрана труда" @click="getDocuments(protection_id)"><labour-protection/></b-tab>
        </b-tabs>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from '@/helpers/axios.js'
import ConstituentDocuments from './components/constituent'
import LabourProtection from './components/protection'
import GeneralDocuments from './components/general'
import Disclosure from './components/disclosure'
export default {
  name: 'documents',
  resource: 'documents',
  components: { Disclosure, GeneralDocuments, LabourProtection, ConstituentDocuments },
  data () {
    return {
      documents: [],
      constituent_id: '1',
      general_id: '2',
      disclosure_id: '3',
      protection_id: '4',
      isLoading: false
    }
  },
  mounted () {
    this.getDocuments(this.constituent_id)
  },
  methods: {
    async getDocuments (id) {
      this.isLoading = true
      const { data } = await axios(this.$configs.documents.group_resource + id)
      this.isLoading = false
      this.documents = data
    }
  }
}
</script>

<style lang="scss">
  @import "styles";
</style>

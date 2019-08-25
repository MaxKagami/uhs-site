<template>
  <div>
    <div class="img_wrapper">
      <b-img :src="background" fluid class="img_opacity"/>
      <div class="caption">
        <h1>Документы</h1>
      </div>
    </div>
    <b-tabs content-class="mt-3" tabs align="center">
      <b-tab title="Учредительные документы" @click="getDocuments(constituent_id)"><constituent-documents :documents="documents"/></b-tab>
      <b-tab title="Нормативно-правовые акты" @click="getDocuments(general_id)"><general-documents :documents="documents"/></b-tab>
      <b-tab title="Раскрытие информации" @click="getDocuments(disclosure_id)"><disclosure/></b-tab>
      <b-tab title="Охрана труда" @click="getDocuments(protection_id)"><labour-protection/></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Axios from 'axios'
import ConstituentDocuments from './ConstituentDocuments'
import LabourProtection from './LabourProtection'
import GeneralDocuments from './GeneralDocuments'
import Disclosure from './Disclosure'
export default {
  name: 'documents',
  resource: 'Documents',
  components: { Disclosure, GeneralDocuments, LabourProtection, ConstituentDocuments },
  data () {
    return {
      background: require('@/assets/bg.jpg'),
      documents: [],
      constituent_id: '1',
      general_id: '2',
      disclosure_id: '3',
      protection_id: '4'
    }
  },
  created () {
    this.getDocuments(this.constituent_id)
  },
  methods: {
    getDocuments (number) {
      Axios.get('http://localhost:3000/api/v1/documents?document_group_id=' + number)
        .then(response => {
          this.documents = response.data
        })
        .catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>

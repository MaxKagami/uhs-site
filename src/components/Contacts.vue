<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $contacts.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <p>{{ $contacts.subhead }}</p>
        <b-row>
          <b-col>
            <div>
              {{ $contacts.main.telephone_name }}
              <br>
              {{ $contacts.main.telephone }}
            </div>
          </b-col>
          <b-col>
            <div>
              {{ $contacts.main.email_name }}
              <br>
              {{ $contacts.main.email }}
            </div>
            <div>

            </div>
          </b-col>
          <b-col>
            <div>
              {{ $contacts.main.address }}
              <br>
              {{ $contacts.map.link }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <yandex-map :coords="coords"
                zoom="16.68"
                style="width: auto; height: 30em;"
                :controls="['fullscreenControl', 'geolocationControl', 'zoomControl', 'rulerControl', 'trafficControl']"
                :placemarks="placemarks">
      <ymap-marker :coords="coords"
                   marker-type="placemark"
                   hint-content="ул. Гоголя, 35В"
                   :balloon="{header: 'ООО «УХТАЖИЛФОНД»'}"
                   :icon="{color: 'darkblue'}"
                   cluster-name="1">
      </ymap-marker>
    </yandex-map>
    <div class="box shdw">
      <b-container>
        <b-form @submit="onSubmit" v-if="$config.contacts.callback_form">
          <h4 class="text-center">{{ $contacts.callback.title }}</h4>
          <div class="callback-form">
            <b-row>
              <b-col class="padding-right">
                <b-form-input class="input-1 squared margin-bottom"
                              v-model="callback.telephone"
                              :placeholder="$contacts.callback.telephone"
                              type="tel"
                              required></b-form-input>
              </b-col>
              <b-col class="padding-left">
                <b-form-input class="input-2 squared margin-bottom"
                              v-model="callback.name"
                              :placeholder="$contacts.callback.name"
                              required></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-textarea class="input-3 squared margin-bottom"
                                 v-model="callback.massage"
                                 :placeholder="$contacts.callback.message"
                                 required></b-form-textarea>
              </b-col>
            </b-row>
            <b-button block
                      squared
                      type="submit"
                      variant="outline-primary">
              {{ $contacts.callback.button }}
            </b-button>
          </div>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: 'contacts',
  resource: 'Contacts',
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [63.558194, 53.670527],
    callback: {
      telephone: '',
      name: '',
      massage: ''
    },
    show: true
  }),
  methods: {
  }
}
</script>

<style>
.squared {
  border-radius: 0 !important;
}
.callback-form {
  margin: auto;
}
.margin-bottom {
  margin-bottom: 10px;
}
.padding-right {
  padding-right: 5px;
}
.padding-left {
  padding-left: 5px;
}
</style>

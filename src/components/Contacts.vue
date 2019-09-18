<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $constants.contacts.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <div class="box shdw">
      <b-container>
        <p>{{ $constants.contacts.subhead }}</p>
        <b-row>
          <b-col>
            <div>
              {{ $constants.contact_info.telephone_name }}
              <br>
              {{ $constants.contact_info.telephone }}
            </div>
          </b-col>
          <b-col>
            <div>
              {{ $constants.contact_info.email_name }}
              <br>
              {{ $constants.contact_info.email }}
            </div>
            <div>

            </div>
          </b-col>
          <b-col>
            <div>
              {{ $constants.contact_info.address }}
              <br>
              {{ $constants.contacts.map.link }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <yandex-map :coords="coords"
                zoom="16.68"
                style="width: auto; height: 30em;"
                :controls="['fullscreenControl', 'geolocationControl', 'zoomControl', 'rulerControl', 'trafficControl']">
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
        <b-form @submit="onSubmit" v-if="$configs.contacts.callback_form">
          <h4 class="text-center">{{ $constants.contacts.callback.title }}</h4>
          <div class="callback-form">
            <b-row>
              <b-col class="padding-right">
                <b-form-input class="input-1 squared margin-bottom"
                              v-model="callback.telephone"
                              :placeholder="$constants.contacts.callback.telephone"
                              type="tel"
                              required></b-form-input>
              </b-col>
              <b-col class="padding-left">
                <b-form-input class="input-2 squared margin-bottom"
                              v-model="callback.name"
                              :placeholder="$constants.contacts.callback.name"
                              required></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-textarea class="input-3 squared margin-bottom"
                                 v-model="callback.massage"
                                 :placeholder="$constants.contacts.callback.message"
                                 required></b-form-textarea>
              </b-col>
            </b-row>
            <b-button block
                      squared
                      type="submit"
                      variant="outline-primary">
              {{ $constants.contacts.callback.button }}
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

<style lang="scss">
.default-banner {
  background: url("../assets/sm.jpg");
}
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

<template>
  <div>
    <b-jumbotron class="default-banner">
      <b-container>
        <h1><span>{{ $contacts.name }}</span></h1>
      </b-container>
    </b-jumbotron>
    <b-container>
      <p>{{ $contacts.subhead }}</p>
      <b-row>
        <b-col>
          <div>
            <p>{{ $contacts.main.telephone_name }}</p>
            <p>{{ $contacts.main.telephone }}</p>
          </div>
        </b-col>
        <b-col>
          <div>
            <p>{{ $contacts.main.email_name }}</p>
            <p>{{ $contacts.main.email }}</p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </b-col>
        <b-col>
          <div>
            <p>{{ $contacts.main.address }}</p>
            <p>{{ $contacts.map.link }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: 'contacts',
  resource: 'Contacts',
  components: { yandexMap, ymapMarker },
  data: () => ({
    background: require('@/assets/bg.jpg'),
    coords: [63.558194, 53.670527]
  }),
  methods: {
    onClick (e) {
      this.coords = e.get('coords')
    }
  }
}
</script>

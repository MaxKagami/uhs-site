<template>
  <div>
    <div class="img_wrapper">
      <b-img :src="background" fluid class="img_opacity"/>
      <div class="caption">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами по контактам ниже или отправьте сообщение</p>
      </div>
    </div>
    <b-container>
      <p>8 800 350 39 62</p>
      <p>mail@regop-komi.ru</p>
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

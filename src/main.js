import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import constants from './constants'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

Vue.prototype.$images = constants.images
Vue.prototype.$about = constants.about
Vue.prototype.$contacts = constants.contacts
Vue.prototype.$site_info = constants.site_info

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  securedAxiosInstance,
  plainAxiosInstance,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import constants from './constants'
import config from './config'
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

Vue.prototype.$config = config
Vue.prototype.$images = constants.images
Vue.prototype.$about = constants.about
Vue.prototype.$contacts = constants.contacts
Vue.prototype.$site_info = constants.site_info
Vue.prototype.$answers = constants.answers
Vue.prototype.$documents = constants.documents
Vue.prototype.$services = constants.services
Vue.prototype.$vacancies = constants.vacancies
Vue.prototype.$news = constants.news
Vue.prototype.$regions = constants.regions
Vue.prototype.$home = constants.home

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

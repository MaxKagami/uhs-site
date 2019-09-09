import Vue from 'vue'
import App from './App'
import router from './router'
import constants from './constants'
import contents from './contents'
import configs from './configs'
import axios from './helpers/axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.prototype.$configs = configs
Vue.prototype.$constants = constants
Vue.prototype.$contents = contents
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

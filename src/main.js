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
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Button from '@/components/CollapseButton'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('v-icon', Icon)
Vue.component('Button', Button)

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

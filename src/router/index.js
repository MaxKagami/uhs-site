import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '../components/NewsFeed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/news',
      name: 'newsFeed',
      component: NewsFeed
    }
  ]
})

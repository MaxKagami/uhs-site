import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/about'
import Answers from '@/views/answers'
import Contacts from '@/views/contacts'
import Documents from '@/views/documents'
import Home from '@/views/home'
import News from '@/views/news'
import Post from '@/views/news/show'
import Regions from '@/views/regions'
import Services from '@/views/services'
import Vacancies from '@/views/vacancies'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/about', name: 'about', component: About },
    { path: '/answers', name: 'answers', component: Answers },
    { path: '/contacts', name: 'contacts', component: Contacts },
    { path: '/documents', name: 'documents', component: Documents },
    { path: '/', name: 'home', component: Home },
    { path: '/news', name: 'news', component: News },
    { path: '/post/:id', name: 'post', component: Post, props: true },
    { path: '/regions', name: 'regions', component: Regions },
    { path: '/services', name: 'services', component: Services },
    { path: '/vacancies', name: 'vacancies', component: Vacancies }
  ]
})

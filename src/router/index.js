import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '@/components/News/NewsFeed'
import Contacts from '@/components/Contacts'
import About from '@/components/About'
import Services from '@/components/Services'
import Answers from '@/components/Answers'
import Documents from '@/components/Documents/Documents'
import Home from '@/components/Home'
import Vacancies from '@/components/Vacancies'
import NewsPost from '@/components/News/NewsPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/services', name: 'services', component: Services },
    { path: '/documents', name: 'documents', component: Documents },
    { path: '/news', name: 'news-feed', component: NewsFeed },
    { path: '/post/:id', name: 'news-post', component: NewsPost, props: true },
    { path: '/answers', name: 'answers', component: Answers },
    { path: '/vacancies', name: 'vacancies', component: Vacancies },
    { path: '/contacts', name: 'contacts', component: Contacts }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/ads/Ad'
import AdList from '@/components/ads/AdList'
import NewAd from '@/components/ads/NewAd'
import Search from '@/components/ads/Search'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: Ad,
    props: true,
  },
  {
    path: '/list',
    name: 'list',
    component: AdList,
  },
  {
    path: '/new',
    name: 'new',
    component: NewAd,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration,
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
 
})

export default router

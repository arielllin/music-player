import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './modules/home'
import Album from './modules/album'
import Track from './modules/track'

Vue.use(VueRouter)

const routes = []

routes.push(Home)
routes.push(Album)
routes.push(Track)

routes.push({
  path: '*',
  redirect: '/'
})

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

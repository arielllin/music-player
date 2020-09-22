import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './modules/home'
import Album from './modules/album'

Vue.use(VueRouter)

const routes = []

routes.push(Home)
routes.push(Album)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

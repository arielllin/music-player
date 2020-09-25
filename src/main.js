import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import CSSPlugin from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSRulePlugin, CSSPlugin)

// import './permission' // permission control
import './assets/icons/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n



import '@/styles/index.scss' // global css

import echarts from 'echarts'
import App from './App'
import store from './store'
import router from './router'
import i18n from './lang' // Internationalization
import '@/icons' // icon
import '@/permission' // permission control

/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
import '../mock' // simulation data

Vue.use(Element, 
  { 
    i18n: (key, value) => i18n.t(key, value) },
  
  )

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

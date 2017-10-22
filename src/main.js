// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
var VueMaterial = require('vue-material')
import '../node_modules/vue-material/dist/vue-material.css'
// import ECharts from 'vue-echarts/components/ECharts.vue'
Vue.use(VueMaterial)
// Vue.use(ECharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$user = {
  cardID: '',
  name: ''
}
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

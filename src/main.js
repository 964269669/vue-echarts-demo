import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import * as Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

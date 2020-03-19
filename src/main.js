import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import axios from 'axios';
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] ='application/json';
// axios.defaults.baseURL = 'http://www.jiandaohealth.com/DHT/mobile'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

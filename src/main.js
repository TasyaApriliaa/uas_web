import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './routes/'
import store from './store/'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import Auth from '@/common/auth.js'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueHead from 'vue-head'
Vue.use(VueHead)

Vue.config.productionTip = false
Vue.use(Auth)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

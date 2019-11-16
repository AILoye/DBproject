import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@common/components"
import VueTouch from 'vue-touch'
import "./lib/loading/index.js"


　
// import address from 'address'

Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});

new Vue({
  router,
  store,
  // address,
  render: h => h(App)
}).$mount('#app')

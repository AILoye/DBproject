import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import "@common/components"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';　　
// import address from 'address'

Vue.use(MintUI);
Vue.config.productionTip = false
// Vue.use(VueTouch,{name:"v-touch"});

new Vue({
  router,
  store,
  // address,
  render: h => h(App)
}).$mount('#app')

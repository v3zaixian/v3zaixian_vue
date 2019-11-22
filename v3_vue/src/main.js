import Vue from 'vue'
import App from './App.vue'

// 适配
import 'lib-flexible/flexible'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

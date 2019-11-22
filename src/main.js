import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'

import router from './router'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
new Vue({
  components: {App},
  template: '<App />',
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import * as API from './api'

import router from './router'
import store from './store'
Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.component(Button.name, Button)

new Vue({
  components: {App},
  template: '<App />',
  router,
  store
}).$mount('#app')

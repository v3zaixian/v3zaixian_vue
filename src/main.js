import Vue from 'vue'
import App from './App.vue'

// 适配
import 'lib-flexible/flexible'
import router from './router'
// 表单验证
import './veeValidate'
import store from './store'

import {Button} from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
Vue.config.productionTip = false
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(Button.name, Button)
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

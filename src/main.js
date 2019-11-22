import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);

Vue.component(TabContainerItem.name, TabContainerItem);
import router from './router'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
new Vue({
  components: {App},
  template: '<App />',
  router
}).$mount('#app')

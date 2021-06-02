import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


if (!process.env.IS_WEB) { Vue.use(require('vue-electron')) }
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini' })

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')

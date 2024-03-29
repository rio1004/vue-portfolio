import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { register } from 'swiper/element/bundle';
register();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

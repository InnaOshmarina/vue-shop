import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  BootstrapVue,
  store,
  render: h => h(App)
  
});

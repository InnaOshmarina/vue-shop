import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  BootstrapVue,
  render: h => h(App)
});

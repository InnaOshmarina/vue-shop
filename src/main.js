import './firebase';
import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(VueFire);


new Vue({
  el: '#app',
  // VueFire,
  router,
  BootstrapVue,
  store,
  render: h => h(App)
});

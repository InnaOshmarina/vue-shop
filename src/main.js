import Vue from 'vue';
import App from './App.vue';
import './api/firebase';
import VueFire from 'vuefire';
import VuePaginate from 'vue-paginate';
import VeeValidate from 'vee-validate';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(VueFire);
Vue.use(VuePaginate);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  // VueFire,
  router,
  BootstrapVue,
  store,
  render: h => h(App)
});

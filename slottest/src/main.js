import Vue from 'vue'
import App from './App.vue'
import AppNamed from './AppNamed.vue'
import AppScoped from './AppScoped.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(AppScoped)
});

import Vue from 'vue'
// import App from './App.vue'
import TodoList from './components/TodoList.vue';
import store from './store';

new Vue({
  store,
  el: '#app',
  render: h => h(TodoList)
});

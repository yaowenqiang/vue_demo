import Vue from 'vue'
import App from './App.vue'
import Home from "./home";

export const eventBus = new Vue();

Vue.component('app-servers',Home)

new Vue({
  el: '#app',
  render: h => h(App)
})


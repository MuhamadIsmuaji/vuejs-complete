import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
	routes, // ES6 equal routes: routes
	mode: 'history', //default hash
});

new Vue({
	el: '#app',
	router, //ES6 equal router: router
	render: h => h(App)
})
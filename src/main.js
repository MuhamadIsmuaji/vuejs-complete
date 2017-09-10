import Vue from 'vue'
import App from './App.vue'

// Global filters
Vue.filter('to-lowercase', function(value){
	return value.toLowerCase();
});

// Global mixin
Vue.mixin({
	created() {
		console.log('Global mixin created');
	}
});

/**
 * Global mixin lifecycle
 * new Vue
 * App.vue
 * List.vue
 */

new Vue({
	el: '#app',
	render: h => h(App)
})

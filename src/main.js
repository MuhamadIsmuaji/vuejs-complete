import Vue from 'vue'

// learn about dynamic components
import Applearn2 from './Applearn2.vue'

new Vue({
	el: '#app',
	render: h => h(Applearn2)
})
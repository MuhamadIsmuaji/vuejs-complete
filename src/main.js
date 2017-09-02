import Vue from 'vue'

// learn about slots
// import Applearn1 from './Applearn1.vue'

// learn about dynamic components
import Applearn2 from './Applearn2.vue'

// learn about quote project
import App from './App.vue'

// new Vue({
// 	el: '#app',
// 	render: h => h(Applearn2)
// })

// new Vue({
// 	el: '#app',
// 	render: h => h(Applearn1)
// })

new Vue({
	el: '#app',
	render: h => h(App)
})

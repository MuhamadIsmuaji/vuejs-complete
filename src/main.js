import Vue from 'vue'

// learn about directive
import Learndirective from './Learndirective.vue'

/*
Learn directive notes

Directive hooks

bind(el, binding, vnode) => once directive is attached
inserted(el, binding, vnode) => inserted in parent node
updated(el, binding, vnode, oldVnode) => Once component is updated (without children)
componentUpdated(el, binding, vnode, oldVnode) => Once component is updated (with children)
unbind(el, binding, vnode) => once directive is removed 

el => refers to directive element attach on
binding => refers to way directive setup, which argument may pass it, which modifier may pass to it
vnode => node to virtual dom
oldVnode => old node in virtual dom
 */

// simple custom directive
Vue.directive('highlight', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = 'green';
	}
})

// custom directive with argument
Vue.directive('highlight2', {
	bind(el, binding, vnode) {
		if (binding.arg == 'background') {
			el.style.backgroundColor = binding.value;	
		} else {
			el.style.color = binding.value;
		}
	}
});

// custom directive with modifier
Vue.directive('highlight3', {
	bind(el, binding, vnode) {
		var delay = 0;

		if (binding.modifiers['delayed']) {
			delay = 3000;
		}

		setTimeout(() => { // ES6
			if (binding.arg == 'background') {
				el.style.backgroundColor = binding.value;	
			} else {
				el.style.color = binding.value;
			}
		}, delay);
	}
});

/*
// binding.value is value after uquation mark
		// el.style.backgroundColor = binding.value;
		
		// custom directive with argument
		if (binding.arg == 'background') {
			el.style.backgroundColor = binding.value;	
		} else {
			el.style.color = binding.value;
		}
 */

new Vue({
	el: '#app',
	render: h => h(Learndirective)
})

// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })

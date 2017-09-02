<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="text-center">Built in Directive</h1>
				<!-- Built in directive is prefix with v- (v-if, v-for, v-text, v-src, v-html, etc) -->
				<p v-text="'Some Text'"></p>
				<p v-html="'<strong>Some strong text</strong>'"></p>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-md-12">
				<h1 class="text-center">Custome Directive</h1>
				<!-- simple custom directive -->
				<p v-highlight>Simple custom directive</p>

				<!-- custom directive with argument -->
				<p v-highlight2="'red'">Custom directive with argument</p>
				<p v-highlight2:background="'red'">Custom directive with argument</p>
				
				<!-- custom directive with modifier -->
				<p v-highlight3.delayed="'blue'">Custom directive with modifier</p>
				<p v-highlight3:background.delayed="'blue'">Custom directive with modifier</p>
				<!-- <p v-highlight3:background.delayed.modifier1.modifier2="'blue'">Custom directive with argument</p> -->

				<!-- local custom directive -->
				<p v-local-highlight>This is local custom directive</p>

				<!-- multiple modifier -->
				<p v-multiple-modifier:background.delayed.blink="'blue'">Multiple modifier</p>

				<!-- complex value directive -->
				<p v-complex-value:background.delayed.blink="{mainColor: 'green', secondColor: 'red', delay: 500}">Complex value directive</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		directives: {
			'local-highlight': {
				bind(el, binding, vnode) {
					el.style.backgroundColor = 'yellow';
				}
			},
			'multiple-modifier': {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers['delayed']) {
						delay = 3000;
					}

					if (binding.modifiers['blink']) {
						let mainColor = binding.value; // ES6 define variable
						let secondColor = 'red';
						let currentColor = mainColor;

						setTimeout(() => {
							setInterval(() => {
								currentColor = currentColor == secondColor ? mainColor : secondColor;
								if (binding.arg == 'background') {
									el.style.backgroundColor = currentColor;	
								} else {
									el.style.color = currentColor;
								}

							}, 1000);
						}, delay);
					} else {
						setTimeout(() => { // ES6
							if (binding.arg == 'background') {
								el.style.backgroundColor = binding.value;	
							} else {
								el.style.color = binding.value;
							}
						}, delay);
					}
				}
			},
			'complex-value': {
				bind(el, binding, vnode) {
					var delay = 0;

					if (binding.modifiers['delayed']) {
						delay = 3000;
					}

					if (binding.modifiers['blink']) {
						let mainColor = binding.value.mainColor; // ES6 define variable
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;

						setTimeout(() => {
							setInterval(() => {
								currentColor = currentColor == secondColor ? mainColor : secondColor;
								if (binding.arg == 'background') {
									el.style.backgroundColor = currentColor;	
								} else {
									el.style.color = currentColor;
								}

							}, binding.value.delay);
						}, delay);
					} else {
						setTimeout(() => { // ES6
							if (binding.arg == 'background') {
								el.style.backgroundColor = binding.value.mainColor;	
							} else {
								el.style.color = binding.value.mainColor;
							}
						}, delay);
					}
				}
			},
		}
	}
</script>
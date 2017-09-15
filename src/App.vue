<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">VUEX</h2>
				<hr>
				<!-- <app-result :counter="counter"></app-result> -->
				<app-result></app-result>
				<app-another-result></app-another-result>
				<hr>
				<app-counter></app-counter>
				<app-another-counter></app-another-counter>
				<hr>
				<!-- work when computed properties set on value -->
				<!-- <input type="text" :value="value"> -->
				<!-- not work when computed properties set as v-model (computed only return as a value) -->
				<input type="text" v-model="value">
				<!-- <input type="text" :value="value" @input="updateValue"> -->
				<p>{{ value }}</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Counter from './components/Counter.vue'
	import AnotherCounter from './components/AnotherCounter.vue'
	import Result from './components/Result.vue'
	import AnotherResult from './components/AnotherResult.vue'

	export default {
		// data() {
		// 	return {
		// 		counter: 0,
		// 	}
		// },
		computed: {
			// value() {
			// 	return this.$store.getters.value;
			// }
			value: {
				get() {
					return this.$store.getters.value;	
				},
				set(value) {
					this.$store.dispatch('updateValue', value);
				}
			}
		},
		methods: {
			updateValue(event) {
				this.$store.dispatch('updateValue', event.target.value);
			}
		},
		components: {
			appCounter: Counter,
			appAnotherCounter: AnotherCounter,
			appResult: Result,
			appAnotherResult: AnotherResult,
		}
	}
</script>

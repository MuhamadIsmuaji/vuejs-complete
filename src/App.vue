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
		components: {
			appCounter: Counter,
			appAnotherCounter: AnotherCounter,
			appResult: Result,
			appAnotherResult: AnotherResult,
		}
	}
</script>

<template>
	<div>
		<button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
		<button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">Decrement</button>
	</div>
</template>

<script type="text/javascript">
	// import { mapMutations } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		// methods: {
		// 	increment() {
		// 		// this.$emit('updated', 1);
		// 		this.$store.state.counter++;
		// 	},
		// 	decrement() {
		// 		// this.$emit('updated', -1);
		// 		this.$store.state.counter--;
		// 	}
		// }
		// methods: {
		// 	...mapMutations([
		// 		'increment',
		// 		'decrement'
		// 	])
		// }
		methods: {
			...mapActions([
				'asyncIncrement',
				'asyncDecrement'
			]),
		}
	}
</script>
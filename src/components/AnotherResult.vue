<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ stringCounter }}</p>
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import * as types from '../store/types'

	export default {
		// props: ['counter'],
		// computed: {
		// 	counter() {
		// 		// return this.$store.state.counter * 2;
		// 		return this.$store.getters.doubleCounter;
		// 	},
		// 	clicks() {
		// 		return this.$store.getters.stringCounter;
		// 	}
		// }
		// computed: mapGetters([
		// 	'doubleCounter', // or can use propertyName: doubleCounter
		// 	'stringCounter',
		// ]),
		// computed: {
		// 	...mapGetters([ // to combine with our own computed properties
		// 		'doubleCounter',
		// 		'stringCounter',
		// 	])
		// },
		computed: {
			...mapGetters({ // to combine with our own computed properties
				doubleCounter: types.DOUBLE_COUNTER,
				stringCounter: types.CLICK_COUNTER
			})
		},
	}
</script>
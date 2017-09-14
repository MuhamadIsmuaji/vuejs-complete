<template>
	<p>Counter is: {{ counter }}</p>
</template>

<script type="text/javascript">
	export default {
		// props: ['counter'],
		computed: {
			counter() {
				// return this.$store.state.counter * 2;
				return this.$store.getters.doubleCounter;
			}
		}
	}
</script>
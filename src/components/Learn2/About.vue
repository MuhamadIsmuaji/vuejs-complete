<template>
	<div>
		<h1>About</h1>
		<p>Counter : {{ counter }}</p>
		<hr>
		<button class="btn btn-success" @click="counter++">Increase!</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				counter: 0,
			}
		},
		destroyed() {
			console.log('destroyed!')
		},
		activated() {
			console.log('activated!')
		},
		deactivated() {
			console.log('deactivated!')
		}
	}
</script>
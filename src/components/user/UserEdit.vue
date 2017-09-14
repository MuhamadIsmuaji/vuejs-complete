<template>
	<div>
		<h3>Edit The User</h3>
		<hr>
		<p>Locale: {{ $route.query.locale }}</p>
		<p>Analytics: {{ $route.query.q }}</p>
		<hr>
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		<div style="height: 800px;"></div>
		<p id="data">Some extra</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				confirmed: false,
			}
		},
		beforeRouteLeave(to, from, next) {
			if (this.confirmed) {
				next();
			} else {
				if (confirm('Are you sure ?')) {
					next();
				} else {
					next(false);
				}
			}
		},
	}
</script>
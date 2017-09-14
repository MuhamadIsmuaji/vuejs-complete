<template>
	<div>
		<h3>Some User Detail</h3>
		<hr>
		<p>Loaded User ID: {{ $route.params.id }}</p>
		<!-- <router-link tag="button" :to="'/user/' + $route.params.id +'/edit'" class="btn btn-success">Edit User</router-link> -->
		<!-- <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }" class="btn btn-success">Edit User</router-link> -->
		<router-link tag="button" :to="link" class="btn btn-success">Edit User</router-link>

	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				link: {
					name: 'userEdit',
					params: {
						id: this.$route.params.id,
					},
					query: {
						locale: 'en',
						q: 100
					},
					hash: '#data',
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			if (true) {
				next();
			} else {
				next(false);
			}
		}
	}
</script>
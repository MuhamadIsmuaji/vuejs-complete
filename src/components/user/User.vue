<template>
	<div>
		<h3>The User Page</h3>
		<hr>
		<button class="btn btn-info" @click="goToHomePage">Go To Homepage</button>
		<hr>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods: {
			goToHomePage() {
				// this.$router.push('/');
				// this.$router.push({path: '/'});
				this.$router.push({ name: 'home' })
			}
		}
	}
</script>
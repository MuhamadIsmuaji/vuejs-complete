<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">Routing</h2>
				<hr>
				<app-header></app-header>
				<router-view></router-view>
			</div>			
		</div>
	</div>
</template>

<script type="text/javascript">
	import Header from './components/Header.vue'

	export default {
		components: {
			appHeader: Header,
		}
	}
</script>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">Routing</h2>
				<hr>
				<router-view name="header-top"></router-view>
				<br>
				<router-view></router-view>
				<br>
				<router-view name="header-bottom"></router-view>
			</div>			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	}
</script>
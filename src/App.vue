<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">Routing</h2>
				<hr>
				<router-view name="header-top"></router-view>
				<br>
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
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

<style type="text/css">
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 0.5s;
	}

	.fade-leave {

	}

	.fade-leave-active {
		transition: opacity 0.5s;
		opacity: 0;
	}
</style>
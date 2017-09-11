<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-12">
				<h1 class="text-center">Animations</h1>
				<hr>
				<button class="btn btn-info" @click="show = !show">Show Alert</button> <br><br>
				<transition name="fade" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info">This is some info</div>
					<div class="alert alert-warning" v-else key="warning">This is some warning</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				show: true,
			}
		}
	}
</script>

<style type="text/css">
	/**
	 * *-enter 
	 * *-enter-active => opacity default 1 
	 * *-leave => opacity default 1
	 * *-leave-active =>
	 */
	
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {

	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		/*transform: translateY(20px);*/
	}

	.slide-enter-active {
		/*slide in refering on key frame*/
		/*forwards mean stay in finishing position, not stay back in start position*/
		animation: slide-in 1s ease-out forwards;
	}

	.slide-leave {

	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
	}

	.slide2-enter {
		opacity: 0;
	}

	.slide2-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity 0.5s;
	}

	.slide2-leave {

	}

	.slide2-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 3s;
		opacity: 0;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}

		to {
			/*default position of the element*/
			transform: translateY(0); 
		}
	}

	@keyframes slide-out {
		from {
			/*default position of the element*/
			transform: translateY(0);
		}

		to {
			transform: translateY(20px);
		}
	}
</style>
<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-12">
				
				<h1 class="text-center">Animations</h1>
				<hr>
				<button class="btn btn-info" @click="show = !show">Show Alert</button> <br><br>
				<transition name="fade">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<transition name="slide">
					<div class="alert alert-info" v-show="show">This is some info</div>
				</transition>
				
				<h1 class="text-center">Mixin Transition and Animation Properies</h1>
				<hr>
				<!-- type use which animation/transition time used -->
				<!-- Jika waktu animasti telah habis, sisa waktu transisi tidak akan dijalankan -->
				<transition name="slide2" type="animation">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				
				<h1 class="text-center">Initial load</h1>
				<hr>
				<transition name="slide2" type="animation" appear>
					<div class="alert alert-info" v-if="show2">This is some info</div>
				</transition>

				<h1 class="text-center">Using Different CSS Class Name</h1>
				<hr>
				<!-- appear will not effected on custom class name -->
				<!-- don't leave blank class name if not used, example enter-class="", leave-class="" -->
				<transition name="slide2" enter-active-class="animated bounce" leave-active-class="animated shake">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>

				<h1 class="text-center">Using Dynamic Names and Attributes</h1>
				<hr>
				<select class="form-control" v-model="alertAnimation">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>	
				</select>
				<br><br>
				<transition :name="alertAnimation">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				show: false,
				show2: true,
				alertAnimation: 'fade',
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
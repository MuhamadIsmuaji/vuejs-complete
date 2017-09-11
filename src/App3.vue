<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-12">
				<h2 class="text-center">Javascript Animations</h2>
				<hr>
				<button class="btn btn-info" @click="load = !load">Load / Remove Element</button> <br><br>
				<!-- :css false -> excluding css -->
				<transition
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter"
					@enter-canceled="enterCanceled"

					@before-leave="beforeLeave"
					@leave="leave"
					@after-leave="afterLeave"
					@leave-canceled="leaveCanceled"
					:css="false"
				>
					<div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
				</transition>
			</div>		
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				load: true,
				elementWidth: 100,
			}
		},
		methods: {
			beforeEnter(el) {
				console.log('Before enter');
				this.elementWidth = 100;
				el.style.width = this.elementWidth + 'px';
			},
			enter(el, done) {
				console.log('Enter');

				let round = 1;
				const interval = setInterval(() => {
					el.style.width = (this.elementWidth + round * 10) + 'px';
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();
					}
				});
				// If in javascript animation, done() function must be call
				// done();
			},
			afterEnter(el) {
				console.log('After enter');
			},
			enterCanceled(el) {
				console.log('Enter canceled');
			},
			beforeLeave(el) {
				console.log('Before leave');
				this.elementWidth = 300;
				el.style.width = this.elementWidth + 'px';
			},
			leave(el, done) {
				console.log('Leave');

				let round = 1;
				const interval = setInterval(() => {
					el.style.width = (this.elementWidth - round * 10) + 'px';
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();
					}
				});
			},
			afterLeave(el) {
				console.log('After leave');
			},
			leaveCanceled(el) {
				console.log('Leave canceled');
			},
		}
	}
</script>
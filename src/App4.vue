<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">Animating Components</h2>
				<hr>
				<button class="btn btn-info" @click="toggleComponent">Toggle Component</button> <br><br>
				<transition name="fade" mode="out-in">
					<component :is="selectedComponent"></component>
				</transition>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import SuccessAlert from './components/SuccessAlert.vue'
	import DangerAlert from './components/DangerAlert.vue'


	export default {
		data() {
			return {
				selectedComponent: 'app-success-alert',
			} 
		},
		methods: {
			toggleComponent() {
				this.selectedComponent = this.selectedComponent == 'app-success-alert' ? 'app-danger-alert' : 'app-success-alert';
			}
		},
		components: {
			appSuccessAlert: SuccessAlert,
			appDangerAlert: DangerAlert,
		}
	}
</script>

<style type="text/css">
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
</style>
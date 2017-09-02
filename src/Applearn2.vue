<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<button class="btn btn-primary" @click="selectedComponent = 'appMain'">Main</button>
					<button class="btn btn-primary" @click="selectedComponent = 'appAbout'">About</button>
					<button class="btn btn-primary" @click="selectedComponent = 'appOther'">Other</button>
					<hr>
					<p>Selected components: {{ selectedComponent }}</p>
				</div>
				<hr>
				<div class="row">
					<!-- will destroyed when change the component -->
					<!-- <component :is="selectedComponent"></component> -->
					
					<!-- will activated and deactivated when change the component -->
					<keep-alive>
						<component :is="selectedComponent"></component>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Main from './components/Learn2/Main.vue'
	import About from './components/Learn2/About.vue'
	import Other from './components/Learn2/Other.vue'

	export default {
		data: function() {
			return {
				selectedComponent: 'appMain',
			}
		},
		components: {
			appMain: Main,
			appAbout: About,
			appOther: Other,
		}
	}
</script>
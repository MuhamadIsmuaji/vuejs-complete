<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-12">
				<h1 class="text-center">Filters</h1>
				<p>{{ text | to-uppercase }}</p>
				<p>{{ text | revText }}</p>
				<p>{{ text | to-lowercase }}</p>
				<h1 class="text-center">Chain Filters</h1>
				<!-- text -> revText -> to-uppercase -->
				<p>{{ text | revText | to-uppercase }}</p>
				<hr>
				<h1 class="text-center">Filters Computed Properties</h1>
				<!-- data properties in mixin is fresh replicated in each component that use it -->
				<button @click="fruits.push('new item')">Add item</button>
				<input type="text" v-model="filterText">
				<ul>
					<li v-for="fruit in filterFruit">{{ fruit }}</li>
				</ul>
			</div>
		</div>
		<app-list></app-list>
	</div>
</template>

<script type="text/javascript">
	import List from './List.vue';
	import { fruitMixin } from './fruitMixin';

	// Filter use to transform some data in the template (only transform the output, not the data property)
	export default {
		data() {
			return {
				text : 'Hello there!',
			}
		},
		filters: {
			// Local filters
			'to-uppercase': function(value) {
				return value.toUpperCase();
			},
			revText(value) {
				return value.split('').reverse().join('');
			}
		},
		components: {
			appList: List,
		},
		mixins: [fruitMixin],
	}
</script>
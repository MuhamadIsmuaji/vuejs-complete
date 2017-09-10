<template>
	<div class="row row-justify">
		<div class="col-md-12">
			<h1 class="text-center">Filters Computed Properties</h1>
			<input type="text" v-model="filterText">
			<ul>
				<li v-for="fruit in filterFruit">{{ fruit }}</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { fruitMixin } from './fruitMixin';

	export default {
		mixins: [fruitMixin],
		created() {
			console.log('List created');
		}
	}
</script>
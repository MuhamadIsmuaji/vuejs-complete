<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<app-quote>
					<h2 slot="title">{{ quoteTitle }}</h2>
					<p>A wonderful quote</p>
				</app-quote>
			</div>		
		</div>
	</div>
</template>

<script type="text/javascript">
import Quote from './components/Learn1/Quote.vue'

export default {
	data: function() {
		return {
			quoteTitle: 'The Quote !',
		};
	},
	components: {
		appQuote: Quote, 
	}
}
</script>

<style type="text/css" scoped>

</style>
<template>
	<div class="container">
		<app-header-quote :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header-quote>
		<app-new-quote @quoteAdded="quoteAdd"></app-new-quote>
		<app-quote-grid :quotes="quotes" @quoteDeleted="quoteDelete"></app-quote-grid>
		<div class="row">
			<div class="col-md-12">
				<div class="alert alert-info">
					<p class="text-center">Click quote to delete it.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import QuoteGrid from './components/Quote/QuoteGrid.vue'
	import NewQuote from './components/Quote/NewQuote.vue'
	import HeaderQuote from './components/Quote/HeaderQuote.vue'

	export default {
		data: function() {
			return {
				quotes: [
					'The first quotes',
				],
				maxQuotes: 10,
			}
		},
		methods: {
			quoteAdd(quote) {
				if (this.quotes.length >= this.maxQuotes) {
					return alert('Delete quote first!')
				}
				this.quotes.push(quote);
			},
			quoteDelete(index) {
				this.quotes.splice(index, 1);
			}
		},
		components: {
			appQuoteGrid: QuoteGrid,
			appNewQuote: NewQuote,
			appHeaderQuote: HeaderQuote,
		}
	}
</script>

<style type="text/css">
	.row {
		margin-top: 15px;
	}
</style>
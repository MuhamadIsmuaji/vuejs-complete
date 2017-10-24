<template>
	<div class="row">
		<div class="col-md-12">
			<form>
				<div class="form-group">
					<label>Quote</label>
					<textarea class="form-control" rows="3" v-model="quote"></textarea>
				</div>
				<div class="form-group">
					<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data: function() {
		return {
			quote: '',
		}
	},
	methods: {
		createNew() {
			this.$emit('quoteAdded', this.quote);
			this.quote = '';
		}
	}
}
</script>
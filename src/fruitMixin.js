export const fruitMixin = {
	data() {
		return {
			fruits: ['Apple', 'Banana', 'Manggo', 'Melon'],
			filterText: '',
		}
	},
	computed: {
		filterFruit() {
			return this.fruits.filter((element) => {
				return element.match(this.filterText);
			});
		}
	},
	created() {
		console.log('fruitMixin created');
	}
}
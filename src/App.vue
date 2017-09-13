<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-8">
				<h2 class="text-center">Connecting To Server Via HTTP With Vue Resource</h2>
				<hr>
				<div class="form-group">
					<label>Username</label>
					<input class="form-control" type="text" v-model="user.username">
				</div>
				<div class="form-group">
					<label>Email</label>
					<input class="form-control" type="text" v-model="user.email">
				</div>
				<button class="btn btn-info" @click="submit">Submit</button>
				<hr>
				<input class="form-control" type="text" v-model="node"> <br>
				<button class="btn btn-info" @click="fetch">Get Data</button>
				<hr>
				<ul class="list-group">
					<li class="list-group-item" v-for="u in users">
						{{ u.username }} - {{ u.email }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				user: {
					username: '',
					email: '',
				},
				users: [],
				resource: {},
				node: 'data',
			}
		},
		methods: {
			submit() {
				// console.log(this.user);
				// this.$http.post('data.json', this.user)
				// 	.then(response => {
				// 		console.log(response);
				// 	}, error => {
				// 		console.log(error);
				// 	});
				
				// this.resource.save({},this.user);
				
				// custom resource
				this.resource.saveAlt(this.user);
			},
			fetch() {
				// this.$http.get('data.json')
				// 	.then(response => {
				// 		// console.log(response.json());
				// 		return response.json();
				// 	})
				// 	.then(data => {
				// 		// console.log(data)
				// 		const resArray = [];

				// 		for (let key in data) {
				// 			// console.log(data[key]);
				// 			resArray.push(data[key])
				// 		}

				// 		this.users = resArray;

				// 	});
				
				// custom resource
				this.resource.getData({node: this.node})
					.then(response => {
						// console.log(response.json());
						return response.json();
					})
					.then(data => {
						// console.log(data)
						const resArray = [];

						for (let key in data) {
							// console.log(data[key]);
							resArray.push(data[key])
						}

						this.users = resArray;

					});
				// this.resource.getData({node: this.node, another: this.another});
			}
		},
		created() {
			// console.log('created');
			
			const customAction = {
				saveAlt: {method: 'POST', url: 'alternative.json'},
				getData: {method: 'GET'}
			};

			// $ sign indicated come from root resource
			// this.resource = this.$resource('data.json');
			
			// custom resource
			// this.resource = this.$resource('data.json', {}, customAction);
			this.resource = this.$resource('{node}.json', {}, customAction);
			// this.resource = this.$resource('{node}/{another}.json', {}, customAction);
		}
	}
</script>
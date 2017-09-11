<template>
	<div class="container">
		<div class="row row-justify">
			<div class="col-md-12">
				<h1 class="text-center">Animating List With Transition-Group</h1>
				<hr>
				<button class="btn btn-primary" @click="addItem">Add Item</button> <br><br>
				<ul class="list-group">
					<transition-group name="slide" >
						<li class="list-group-item" v-for="(number, index) in numbers" style="cursor: pointer;" @click="removeItem(index)" :key="number">{{ number }}</li>
					</transition-group>
				</ul>
			</div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				numbers: [1, 2, 3, 4, 5],
			}
		},
		methods: {
			addItem() {
				const pos = Math.floor(Math.random() * this.numbers.length);
				this.numbers.splice(pos, 0, this.numbers.length + 1);
			},
			removeItem(index) {
				this.numbers.splice(index, 1);
			}
		}
	}
</script>

<style type="text/css">
	.slide-enter {
		/*transform: translateY(20px);*/
	}

	.slide-enter-active {
		/*slide in refering on key frame*/
		/*forwards mean stay in finishing position, not stay back in start position*/
		animation: slide-in 1s ease-out forwards;
	}

	.slide-leave {

	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 1s;
		opacity: 0;
		position: absolute;
	}

	.slide2-enter {
		opacity: 0;
	}

	.slide-move {
		transition: transform 1s;
	}
</style>
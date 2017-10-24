<template>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-md-12">
					<h1>File a Complaint</h1>
					<hr>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="text" id="email" class="form-control" :value="userData.email" @input="userData.email = $event.target.value">
						<!-- .lazy, .number, etc is input modifier -->
						<!-- <input type="text" id="email" class="form-control" v-model.lazy="userData.email"> -->
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" id="password" class="form-control" v-model="userData.password">
					</div>
					<div class="form-group">
						<label for="age">Age</label>
						<input type="number" id="number" class="form-control" v-model="userData.age">
					</div>
					<div class="form-group">
						<label for="message">Message</label>
						<textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
					</div>
					<div class="form-check">
						<label for="sendmail" class="form-check-label">
							<input type="checkbox" id="sendmail" value="SendMail" class="form-check-input" v-model="sendMail"> Send Mail
						</label>
						<label for="sendInfomail" class="form-check-label">
							<input type="checkbox" id="sendInfomail" value="SendInfoMail" class="form-check-input" v-model="sendMail"> Send Infomail
						</label>
					</div>
					<div class="form-check">
						<label for="male" class="form-check-label">
							<input type="radio" id="radio" value="Male" class="form-check-input" v-model="gender"> Male
						</label>
						<label for="female" class="form-check-label">
							<input type="radio" id="radio" value="Female" class="form-check-input" v-model="gender"> Female
						</label>
					</div>
					<div class="form-group">
						<label for="priority">Priority</label>
						<select class="form-control" id="priority" v-model="selectedPrior">
							<option v-for="priority in priorities">{{ priority }}</option>
						</select>
					</div>
					<div class="form-group">
						<app-switch v-model="dataSwitch"></app-switch>
					</div>
					<hr>
					<div class="form-group">
						<button class="btn btn-primary" @click.prevent="submited">Submit</button>
					</div>
					<hr>		
				</div>
			</div>
		</form>

		<div class="row" v-if="isSubmited">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header"><h4>Your Data</h4></div>
					<div class="card-body">
						<p>Mail: {{ userData.email }}</p>
						<p>Password: {{ userData.password }}</p>
						<p>Age: {{ userData.age }}</p>
						<p style="white-space: pre;">Message: {{ message }}</p>
						<p><strong>Send Mail?</strong></p>
						<ul>
							<li v-for="send in sendMail">{{ send }}</li>
						</ul>
						<p>Gender: {{ gender }}</p>
						<p>Priority: {{ selectedPrior }}</p>
						<p>Switched: {{ dataSwitch }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Switch from './components/Learnform/Switch.vue'

export default {
	data() {
		return {
			userData: {
				email: '',
				password: '',
				age: 27,
			},
			message: 'New message here',
			sendMail: [],
			gender: 'Male',
			selectedPrior: 'Medium',
			priorities: ['High', 'Medium', 'Low'],
			dataSwitch: true,
			isSubmited: false,
		};
	},
	methods: {
		submited() {
			this.isSubmited = true;
		}
	},
	components: {
		appSwitch: Switch,
	}
}
</script>
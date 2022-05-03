<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
			registering: false
		}
	},
	computed: {
		...mapGetters([
			'isAuthenticating',
		])
	},
	methods: {
		onRegister(e) {
			// prevent default behavior
			e.preventDefault();

			// register code

		}
	}
}
</script>

<template>
<article class="register-form">
	<form>
		<input type="username" id="username" name="username" placeholder="Username" required v-model="username">
		<input type="email" id="email" name="email" placeholder="Email address" required v-model="email" >
		<input type="password" id="password" name="password" placeholder="Password" required v-model="password">
		<button type="submit" @click="onRegister($event)" :aria-busy="registering" :class="{secondary: registering}">Register</button>
	</form>
	<router-link to="/login" :aria-disabled="registering">Login</router-link>
</article>
</template>

<style scoped>
.register-form {
	width: 500px;
}
</style>

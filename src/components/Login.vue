<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
		}
	},
	computed: {
		...mapGetters([
			'isAuthenticating',
		])
	},
	methods: {
		onLogin(e) {
			// prevent default behavior
			e.preventDefault();

			// login code
			
		}
	}
}
</script>

<template>
<article class="login-form">
	<form>
		<input type="email" id="email" name="email" placeholder="Email address" required>
		<input type="password" id="password" name="password" placeholder="Password" required>
		<button type="submit" @click="onLogin($event)" :aria-busy="isAuthenticating" :class="{secondary: isAuthenticating}">Login</button>
	</form>

	<router-link to="/register" :aria-disabled="isAuthenticating">Register</router-link>
</article>
</template>

<style scoped>
.login-form {
	width: 500px;
}
</style>

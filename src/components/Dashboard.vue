<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
      'user'
		])
	},
	mounted () {
		console.log(this.user);
	}
}
</script>

<template>
<h1> Welcome {{user.displayName}} to your dashboard!</h1>
</template>

<style scoped>
</style>

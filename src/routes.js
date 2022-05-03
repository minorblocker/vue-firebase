import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Landing from './components/Landing.vue'
import store from './store';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Main',
			component: () => {
				if (store.state.authState === 'Authenticated') {
					return Dashboard
				} else {
					return Landing
				}
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
	]
});

router.beforeEach((to, from, next) => {
	const isLoginRegisterPage= ['Login', 'Register'].includes(to.name);
	const isAuthenticated = store.state.authState === 'Authenticated';
	console.log(store);
	if (isAuthenticated && isLoginRegisterPage) {
		next({ name: 'Main' })
	} else if (to.path !== '/' && !isLoginRegisterPage) {
		next({ name: 'Login' })
	} else {
		next()
	}
});

export default router;

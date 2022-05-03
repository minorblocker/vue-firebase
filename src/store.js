import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
	state() {
		return {
			user: null,
			authState: 'Unknown' // Unknown, Authenticating, Authenticated
		}
	},
	getters: {
		user: (state) => state.user,
		isAuthenticated: (state) => state.authState === 'Authenticated' && !!state.user,
		isAuthenticating: (state) => !!state.authState === 'Authenticating',
		authState: (state) => state.authState,
	},
	mutations: {
		SET_USER(state, { user }) {
			state.user = user;
		},
		SET_AUTH_STATE(state, { authState }) {
			state.authState = authState;
		}
	},
	actions: {
		setUser({ commit }, { user }) {
			commit('SET_USER', { user })
		},
		setAuthState({ commit }, { authState }) {
			commit('SET_AUTH_STATE', { authState })
		}
	}
})

export default store;

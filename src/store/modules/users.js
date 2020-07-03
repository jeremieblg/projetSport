export default {
	state: {
		user: null
	},
	getters: {
		user: (state) => {
			return state.user;
		}
	},
	mutations: {
		updateUser(state, payload) {
			state.user = payload;
		}
	},
	actions: {
		updateUser({ commit }, payload) {
			commit('updateUser', payload);
		}
	}
};

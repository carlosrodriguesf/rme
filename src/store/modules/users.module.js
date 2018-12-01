export const SET_USER = 'setUser'

const mutations = {
  [SET_USER](state, user) {
    state.user = user

    return state
  }
}

const getters = {
  user(state) {
    return state.user
  }
}

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations,
  getters
}

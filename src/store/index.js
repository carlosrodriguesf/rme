import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import posts from './modules/posts'

Vue.use(Vuex)

export const SET_BOOTED = 'setBooted'

export default new Vuex.Store({
  state: {
    booted: false
  },
  mutations: {
    [SET_BOOTED](state, value) {
      state.booted = value
    }
  },
  modules: {
    users,
    posts
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users.module'

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
    users
  }
})

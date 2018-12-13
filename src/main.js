import './plugins/fontawesome'

import './plugins/vuetify'
import './plugins/vue-croppa'

import './initFirebase'
import './registerServiceWorker'

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store, { SET_BOOTED } from './store'
import { addUserStateListener } from '@/common/libs/api/accounts'
import { SET_USER } from '@/store/modules/users'
import { savePost } from '@/common/libs/api/posts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

addUserStateListener((user) => {
  store.commit(`users/${SET_USER}`, user)
  store.commit(SET_BOOTED, true)

  router.push(user ? '/posts' : '/')
})

window.addPost = savePost

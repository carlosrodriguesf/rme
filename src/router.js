import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Posts from '@/views/Posts'
import Register from '@/views/Register'
import { isAuthenticated, waitLoad } from '@/common/libs/api/accounts'

Vue.use(Router)

const ONLY_AUTHENTICATED = 'only-authenticated'
const ONLY_NOT_AUTHENTICATED = 'only-not-authenticated'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        authentication: ONLY_NOT_AUTHENTICATED
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        authentication: ONLY_NOT_AUTHENTICATED
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      meta: {
        authentication: ONLY_AUTHENTICATED
      }
    },
    {
      path: '/example',
      name: 'posts',
      component: Posts
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  await waitLoad()

  const { authentication } = to.meta

  if (ONLY_AUTHENTICATED === authentication && !isAuthenticated()) {
    return next({
      path: '/'
    })
  }

  if (ONLY_NOT_AUTHENTICATED === authentication && isAuthenticated()) {
    return next({
      path: '/posts'
    })
  }

  return next()
})

export default router

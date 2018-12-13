import { loadPosts } from '@/common/libs/api/posts'

export const LOAD_POSTS = 'posts/loadPosts'

const SET_POSTS = 'setPosts'

const getters = {
  posts(state) {
    return state.posts
  }
}

const mutations = {
  [SET_POSTS](state, posts) {
    state.posts = posts
  }
}

const actions = {
  [LOAD_POSTS](context) {
    loadPosts().then(posts => context.commit(SET_POSTS, posts))
  }
}

export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations,
  getters,
  actions
}

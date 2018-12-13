<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <SidebarContent/>
    </v-navigation-drawer>

    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Posts</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <PostCardList :posts="posts"/>
    </v-content>
  </v-app>
</template>

<script>
import SidebarContent from '../components/SidebarContent'
import PostCard from '../components/PostCard'
import PostCardList from '../components/PostCardList'
import { mapGetters } from 'vuex'
import { LOAD_POSTS } from '@/store/modules/posts'

export default {
  name: 'Posts',
  components: {
    PostCardList,
    PostCard,
    SidebarContent
  },
  data: () => ({
    drawer: null,
    source: 'ss'
  }),
  computed: {
    ...mapGetters('posts', ['posts'])
  },
  mounted() {
    this.$store.dispatch(`posts/${LOAD_POSTS}`)
  }
}
</script>

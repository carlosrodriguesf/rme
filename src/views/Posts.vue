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
import posts from '../0_examples/posts'
import PostCard from '../components/PostCard'
import PostCardList from '../components/PostCardList'

export default {
  name: 'Posts',
  components: {
    PostCardList,
    PostCard,
    SidebarContent
  },
  data: () => ({
    drawer: null,
    source: 'ss',
    posts,
    cards: [
      {
        title: 'Pre-fab homes',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12
      },
      {
        title: 'Favorite road trips',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6
      },
      {
        title: 'Best airlines',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 6
      }
    ]
  })
}
</script>

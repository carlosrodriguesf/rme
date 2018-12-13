<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="post in posts" xs-12 :key="post.id">
        <PostCard :post="post"/>
      </v-flex>
      <v-flex v-if="0 === posts.length">
        Nenhum post encontrado.
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'PostCardList',
  components: { PostCard },
  props: {
    posts: Array
  }
}
</script>

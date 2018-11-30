<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{post.title}}
        </div>
        <div>
          {{post.content}}
        </div>
      </div>
    </v-card-title>

    <v-divider/>

    <UserList title="Solicitantes" :users="post.from"/>

    <v-divider/>

    <UserList title="Responsáveis" :users="post.to"/>

    <v-divider/>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserList from './UserList'

export default {
  name: 'PostCard',
  components: { UserList },
  props: {
    post: Object
  }
}
</script>

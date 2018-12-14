<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{post.title}}
        </div>
        <div>
          {{post.content.substring(0, 100)}}

          <span v-if="post.content.length > 100">...</span>
        </div>
      </div>
    </v-card-title>

    <v-divider/>

    <UserList title="By:" :users="post.from"/>

    <v-divider/>

    <UserList title="To:" :users="post.to"/>

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

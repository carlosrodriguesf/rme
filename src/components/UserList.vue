<template>
  <v-list subheader>
    <v-subheader>{{title}}</v-subheader>
    <v-list-tile v-for="user in users" :key="user.id" avatar>
      <v-list-tile-avatar>
        <img :src="user.avatar" :alt="`${user.name} Avatar`">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="user.name"/>
        <v-list-tile-sub-title v-html="user.username"/>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon color="primary">delete</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    title: String,
    users: Array
  }
}
</script>

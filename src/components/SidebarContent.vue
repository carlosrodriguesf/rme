<template>
  <v-list dense>
    <v-list-tile @click="alert('click')">
      <v-list-tile-action>
        <v-icon>add</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Novo Post</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="alert('click')">
      <v-list-tile-action>
        <v-icon>contact_mail</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Posts</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="signOut">
      <v-list-tile-action>
        <v-icon>exit_to_app</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Sair</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { signOut } from '@/common/services/accounts.service'

export default {
  name: 'SidebarContent',
  methods: {
    signOut() {
      signOut()
    },
    alert(msg) {
      console.log(msg)
    }
  }
}
</script>

<template>
  <v-toolbar color="primary" dark fixed app>
    <v-toolbar-side-icon @click="$router.push('/')">
      <v-icon>arrow_back</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title>Cadastrar</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'RegisterToolbar'
}
</script>

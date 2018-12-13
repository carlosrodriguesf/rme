<template>
  <div>
    <v-subheader>{{title}}</v-subheader>
    <v-flex>
      <v-avatar size="26" v-for="user in users" :key="user.id">
        <img :src="user.avatar" :alt="`${user.name} Avatar`">
      </v-avatar>
    </v-flex>
  </div>
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

<style scoped lang="scss">
  .v-avatar {
    margin: {
      bottom: 10px;
      right: 10px;
    }

    &:first-child {
      margin-left: 10px;
    }
  }
</style>

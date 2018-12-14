<template>
  <v-layout row>
    <v-flex xs1>
      <div class="center">
        <v-label>{{title}}</v-label>
      </div>
    </v-flex>
    <v-flex>
      <v-avatar size="26" v-for="user in users" :key="user.id">
        <img :src="user.avatar" :alt="`${user.name} Avatar`">
      </v-avatar>
    </v-flex>
  </v-layout>
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
      top: 10px;
      bottom: 10px;
      right: 10px;
    }

    &:first-child {
      margin-left: 10px;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .v-label {
    padding-left: 20px;
  }
</style>

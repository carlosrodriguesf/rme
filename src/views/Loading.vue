<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-progress-circular :size="150"
                               color="primary"
                               indeterminate/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>

</style>

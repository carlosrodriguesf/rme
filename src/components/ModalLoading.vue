<template>
  <v-dialog :value="open"
            hide-overlay
            persistent
            width="300">

    <v-card color="white">
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout row>
            <v-flex text-xs-center>
              <v-progress-circular :size="50"
                                   color="primary"
                                   indeterminate/>
            </v-flex>
            <v-layout align-center justify-start v-if="!!message">
              {{message}}
            </v-layout>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalLoading',
  props: {
    open: Boolean,
    message: {
      type: String,
      required: false
    }
  }
}
</script>

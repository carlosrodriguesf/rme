<template>
  <div>
    <v-dialog :value="show" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('change', false)">
            <v-icon>close</v-icon>
          </v-btn>

          <v-toolbar-title>Enviar Foto</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn dark flat @click="save">
              Salvar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-subheader>Selecione uma foto</v-subheader>

        <v-layout align-center justify-center>
          <croppa v-model="croppa"
                  :show-remove-button="false"
                  :prevent-white-space="true"
                  :width="width"
                  :height="width"
                  @file-choose="editing = true"
                  @image-remove="editing = false"/>
        </v-layout>

        <v-flex text-xs-center v-if="editing">
          <v-btn color="primary" @click="croppa.remove()">
            Limpar
          </v-btn>
        </v-flex>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'InputImage',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean
  },
  data() {
    return {
      croppa: null,
      editing: false
    }
  },
  computed: {
    width() {
      return window.screen.width - 20
    }
  },
  methods: {
    save() {
      const base64 = this.croppa.generateDataUrl('image/jpeg', 0.5)

      this.$emit('save', base64)
      this.$emit('change', false)
    }
  }
}
</script>

<style>
  .croppa-container {
    background-color: whitesmoke;
    border: 1px solid lightgray;
    border-radius: 8px;
    overflow: hidden;
  }

  .croppa-container:hover {
    opacity: 1;
    background-color: #8ac9ef;
  }
</style>

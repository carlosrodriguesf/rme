<template>
  <v-app id="inspire">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click="$router.push('/')">
        <v-icon>arrow_back</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Cadastrar</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <InputImage v-model="showInputImage" @save="setAvatar"/>

      <v-form>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex text-xs-center xs12>
              <v-avatar size="7em" @click="showInputImage = true">
                <img :src="currentAvatar" alt="Avatar">
              </v-avatar>
            </v-flex>

            <v-flex text-xs-center>
              <v-text-field v-model="name"
                            label="Seu nome"
                            prepend-inner-icon="alternate_email"
                            required/>
            </v-flex>

            <v-flex>
              <v-text-field v-model="email"
                            prepend-inner-icon="alternate_email"
                            label="Seu e-mail"
                            required/>
            </v-flex>

            <v-flex>
              <v-text-field v-model="phone"
                            prepend-inner-icon="alternate_email"
                            label="Seu celular"
                            required/>
            </v-flex>

            <v-flex>
              <v-text-field v-model="password"
                            type="password"
                            prepend-inner-icon="alternate_email"
                            label="Sua senha"
                            required/>
            </v-flex>

            <v-flex>
              <v-text-field v-model="passwordConfirm"
                            type="password"
                            prepend-inner-icon="alternate_email"
                            label="Confirme a sua senha"
                            required/>
            </v-flex>

            <v-flex text-xs-center>
              <v-btn @click="register" color="primary">
                Cadastrar
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-content>
  </v-app>
</template>

<script>
import defaultAvatar from '@/assets/user.png'
import InputImage from '@/components/InputImage'
import { createAccount } from '@/common/services/accounts.service'
import base64 from '@/0_examples/base64'

export default {
  name: 'Register',
  components: { InputImage },
  data() {
    return {
      showInputImage: false,
      avatar: base64,
      name: 'Carlos Rodrigues',
      email: 'carlosrodriguesf96@gmail.com',
      phone: '+5527999010796',
      password: 'AAAbbb12345',
      passwordConfirm: 'AAAbbb12345'
    }
  },
  methods: {
    setAvatar(avatar) {
      this.avatar = avatar
    },
    async register() {
      const {
        avatar, name, email, phone, password
      } = this

      const user = await createAccount({
        avatar,
        name,
        email,
        phone,
        password
      })

      console.log(user)
    }
  },
  computed: {
    currentAvatar() {
      return this.avatar || defaultAvatar
    }
  }
}
</script>

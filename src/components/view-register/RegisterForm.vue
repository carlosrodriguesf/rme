<template>
  <v-form ref="form" v-model="formValid">
    <InputImage v-model="showInputImage" @save="setAvatar"/>

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
                        prepend-inner-icon="person"
                        required
                        :rules="rules.name"/>
        </v-flex>

        <v-flex>
          <v-text-field v-model="email"
                        prepend-inner-icon="alternate_email"
                        label="Seu e-mail"
                        required
                        :rules="rules.email"/>
        </v-flex>

        <v-flex>
          <v-text-field v-model="phone"
                        prepend-inner-icon="phone"
                        label="Seu celular"
                        required
                        :rules="rules.phone"/>
        </v-flex>

        <v-flex>
          <v-text-field v-model="password"
                        type="password"
                        prepend-inner-icon="vpn_key"
                        label="Sua senha"
                        required
                        :rules="rules.password"/>
        </v-flex>

        <v-flex>
          <v-text-field v-model="passwordConfirm"
                        type="password"
                        prepend-inner-icon="vpn_key"
                        label="Confirme a sua senha"
                        required
                        :rules="rules.passwordConfirm"/>
        </v-flex>

        <v-flex text-xs-center>
          <v-btn @click="register" color="primary">
            Cadastrar
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import defaultAvatar from '@/assets/user.png'
import InputImage from '@/components/InputImage'

export default {
  name: 'RegisterForm',
  components: { InputImage },
  data() {
    return {
      showInputImage: false,
      formValid: false,
      avatar: null,
      name: null,
      email: null,
      phone: null,
      password: null,
      passwordConfirm: null,
      rules: {
        name: [
          v => !!v || 'Informe o seu nome'
        ],
        email: [
          v => !!v || 'Informe o seu e-mail',
          v => /.+@.+/.test(v) || 'Este e-mail é inválido'
        ],
        phone: [
          v => !!v || 'Informe o seu celular'
        ],
        password: [
          v => !!v || 'Informe uma senha'
        ],
        passwordConfirm: [
          v => !!v || 'Confirme sua senha',
          v => (v === this.password) || 'As senhas não são iguais'
        ]
      }
    }
  },
  methods: {
    setAvatar(avatar) {
      this.avatar = avatar
    },
    register() {
      if (!this.$refs.form.validate()) {
        return
      }

      const {
        avatar, name, email, phone, password
      } = this

      this.$emit('register', {
        avatar,
        name,
        email,
        phone,
        password
      })
    }
  },
  computed: {
    currentAvatar() {
      return this.avatar || defaultAvatar
    }
  }
}
</script>

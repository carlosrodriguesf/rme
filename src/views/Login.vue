<template>
  <v-app id="login">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <ModalLoading :open="loading" message="Entrando..."/>
      <v-container fluid fill-height>
        <v-layout justify-center align-start>
          <v-flex text-xs-center>
            <v-icon size="10em">supervised_user_circle</v-icon>

            <v-form ref="form">
              <v-text-field v-model="email"
                            prepend-inner-icon="alternate_email"
                            label="E-mail"
                            required/>

              <v-text-field v-model="password"
                            prepend-inner-icon="vpn_key"
                            label="Senha"
                            type="password"
                            required/>

              <br/>

              <v-layout justify-start align-center>
                <v-flex text-xs-left>
                  <a href="javascript:void(0)" @click="$router.push('/example')">
                    <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
                  </a>
                  &nbsp;
                  <a href="javascript:void(0)">
                    <font-awesome-icon :icon="['fab', 'google']" size="2x"/>
                  </a>
                  &nbsp;
                  <a href="javascript:void(0)">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                  </a>
                </v-flex>

                <v-flex text-xs-right>
                  <v-btn @click="login" color="primary">
                    Entrar
                  </v-btn>
                </v-flex>
              </v-layout>

              <br/>

              <v-layout justify-center align-center>
                <router-link to="/register">
                  Ainda não tem uma conta? cadastre-se
                </router-link>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { login } from '../common/services/accounts.service'
import { ERROR_AUTH_WRONG_PASSWORD, ERROR_AUTH_INVALID_EMAIL } from '@/common/constants'
import ModalLoading from '@/components/ModalLoading'

export default {
  name: 'Login',
  components: { ModalLoading },
  data() {
    return {
      loading: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      this.loading = true

      const { email, password } = this

      try {
        await login(email, password)

        // this.loading = false
      } catch (e) {
        // this.loading = false
        if (e.code === ERROR_AUTH_WRONG_PASSWORD) {
          alert('E-mail ou senha inválidos.')

          return
        }

        if (e.code === ERROR_AUTH_INVALID_EMAIL) {
          alert('E-mail inválido.')

          return
        }

        throw e
      }
    }
  }
}
</script>

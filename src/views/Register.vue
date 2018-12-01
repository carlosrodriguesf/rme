<template>
  <v-app id="inspire">
    <RegisterToolbar/>

    <v-content>
      <RegisterForm @register="register"/>
    </v-content>
  </v-app>
</template>

<script>
import InputImage from '@/components/InputImage'
import { createUser } from '@/common/services/accounts.service'
import { ERROR_AUTH_USER_ALREADY_IN_USE } from '@/common/constants'
import RegisterToolbar from '@/components/view-register/RegisterToolbar'
import RegisterForm from '@/components/view-register/RegisterForm'

function burnError(e) {
  if (e.code === ERROR_AUTH_USER_ALREADY_IN_USE) {
    alert('Esse usuário não está disponível')
  }

  throw e
}

export default {
  name: 'Register',
  components: {
    RegisterForm,
    RegisterToolbar,
    InputImage
  },
  methods: {
    async register(user) {
      try {
        await createUser(user)
      } catch (e) {
        burnError(e)
      }
    }
  }
}
</script>

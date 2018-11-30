<template>
  <router-view/>
</template>

<script>
import Login from './views/Login'
import Register from '@/views/Register'

export default {
  name: 'App',
  components: {
    Register,
    Login
  },
  data: () => ({
    drawer: null,
    source: 'source__source'
  })
}
</script>

<style>
  /*.fade-enter-active, .fade-leave-active {*/
  /*transition: opacity .5s;*/
  /*}*/

  /*.fade-enter, .fade-leave-to !* .fade-leave-active em versões anteriores a 2.1.8 *!*/
  /*{*/
  /*opacity: 0;*/
  /*}*/
</style>

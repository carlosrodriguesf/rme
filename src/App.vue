<template>
  <transition v-if="booted" name="fade">
    <router-view/>
  </transition>

  <Loading v-else/>
</template>

<script>
import Login from '@/views/Login'
import Register from '@/views/Register'

import Loading from '@/views/Loading'

export default {
  name: 'App',
  components: {
    Loading,
    Register,
    Login
  },
  computed: {
    booted() {
      return this.$store.state.booted
    }
  }
}
</script>

<style lang="scss">
  $time: .25s;

  .fade-enter {
    opacity: 0;
    transform: scale(.9);
  }

  .fade-enter-active {
    transition: all $time;
    transition-delay: $time;
  }

  .fade-leave-to {
    opacity: 0;
    transform: scale(.9);
  }

  .fade-leave-active {
    transition: all $time;
  }
</style>

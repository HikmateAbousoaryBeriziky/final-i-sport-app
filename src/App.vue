<template>
  <router-view>
    
  </router-view>
</template>

<script>
import Home from './components/home.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'

export default {
  name: 'App',
  components: {
      Home, Login,Register
  }
}
</script>

<style>

</style>

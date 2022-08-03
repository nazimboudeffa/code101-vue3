<template>
  <header>
    <NavBar />
  </header>  
  <router-view />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    NavBar
}
}
</script>
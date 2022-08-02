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
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 18px; */
  }
  body {
    background-color: #141414;
    color: #fff
  }
</style>
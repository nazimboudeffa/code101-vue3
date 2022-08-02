<template>

    <router-link to="/">Accueil</router-link>
    <router-link to="course">Cours</router-link>
    <router-link to="price">Prix</router-link>

    <router-view />

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MonacoEditor from './components/MonacoEditor.vue'
//import NavBar from './components/NavBar.vue'

export default {
  name: 'App',

  components: {
    //MonacoEditor,
    //NavBar
  },

  data: () => ({
    
      appTitle: 'Code 101',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/' },
          { title: 'Prix', path: '/prices' },
     ]
    
  })
}
</script>

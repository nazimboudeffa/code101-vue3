<template>
  <header>
    <nav>
      <div class="logo">CODE101</div>
      <div class="onglets">
        <a><router-link to="/">Accueil</router-link></a>
        <a><router-link to="courses">Cours</router-link></a>
        <a><router-link to="price">Prix</router-link></a>
      </div>
      <div class="buttons">
        <span>Login</span>
        <button class="menubtn">Register</button>
      </div>
    </nav>
  </header>
  
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
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    background-color: #141414;
    color: #fff
  }
  nav {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
  .logo{
    font-weight:700;
    font-size:1.4rem;
  }
  .onglets a {
    margin-right:20px;
    cursor:pointer;
    color: white;
    text-decoration: none;
  }
  .menubtn{
    background:white;
    color:black;
    padding: 0 24px;
    border-radius:24px;
    height:32px;
    margin-left:10px;
  }
</style>
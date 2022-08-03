<template>
    <nav>
      <div class="logo">Code<span class="oneoone">101</span></div>
      <div class="onglets">
        <a><router-link to="/">Accueil</router-link></a>
        <a><router-link to="courses">Cours</router-link></a>
        <a><router-link to="pricing">Tarifs</router-link></a>
      </div>
      <div class="buttons">
        <span class="login">Connexion</span>
        <a href="https://fr.tipeee.com/nazimboudeffa/news/147467" target="_blank" class="menubtn">S'inscrire</a>
      </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar',
    data: () => ({

        appTitle: 'Code 101',
        sidebar: false,
        menuItems: [
            { title: 'Home', path: '/' },
            { title: 'Cours', path: '/courses' },
            { title: 'Prix', path: '/prices' }
        ]
    })
}
</script>

<style scoped>
  nav {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding: 10px;
    background-color: black;
  }
  .logo{
    font-weight:700;
    font-size:1.4rem;
    color: white;
  }
  .oneoone{
    font-weight:700;
    font-size:1.4rem;
    color: white;
    border: solid 2px;
    padding-left: 2px;
    padding-right: 2px;
    margin-left: 4px;
  }
  .onglets a {
    margin-right:20px;
    cursor:pointer;
    color: white;
    text-decoration: none;
    padding-left: 10px;
  }
  .onglets a:hover{
    margin-right:20px;
    cursor:pointer;
    color: black;
    background-color: white;
    text-decoration: none;
  }
  .login {
    color: white;
    font-size: 1rem;
  }
  .menubtn{
    background:white;
    color:black;
    padding: 0 24px;
    border-radius:24px;
    height:32px;
    margin-left:10px;
    font-size: 1rem;
    text-decoration: none;
    padding-top: 2px;
    padding-bottom: 2px;
  }
</style>
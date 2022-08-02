<template>
    <nav>
      <div class="logo">Code101</div>
      <div class="onglets">
        <a><router-link to="/">Accueil</router-link></a>
        <a><router-link to="courses">Cours</router-link></a>
        <a><router-link to="price">Prix</router-link></a>
      </div>
      <div class="buttons">
        <span class="login">Login</span>
        <button class="menubtn">Register</button>
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
  }
</style>
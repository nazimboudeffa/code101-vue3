<template>
    <div id="hero">
    <div class="hero-text">
        <h1>Apprenez à coder en ligne</h1>
        <p>Apprendre à coder n'a jamais été aussi facile</p>
        <a href="/editor" class="btn">Tester l'Editeur</a>
    </div>
    </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 18px;
}

#hero{
  background-image: url('https://raw.githubusercontent.com/nazimboudeffa/assets2/main/pics/unsplash/christin-hume-mfB1B1s4sMc-unsplash.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
}

.hero-text{
  margin-left: 50px;
}

.hero-text h1{
  font-size: 3rem;
}

.hero-text p{
  font-size: 1.5rem;
}

.btn {
  text-decoration: none;
  color: orange;
  background-color: black;
  border-color: orange;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  display: inline-block;
  padding: 10px 30px;
  margin-top: 20px;
}

.btn:hover{
  color: black;
  background-color: orange;
  border-color: black;
}

@media screen and (max-width: 600px) {
  * {
    font-size: 13px;
  }
}
</style>
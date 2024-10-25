<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBarVue from './components/NavBar.vue';

</script>

<template>

<div class="app-container" >
  <header>
    <NavBarVue />
  </header>

  <main>
    <RouterView />
  </main>
  
  <footer>
    <Footer />
  </footer>
</div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: "Itim", cursive;
  font-weight: 400;
  font-style: normal
  
}


body {
  background-image: url('assets/rickback.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  flex: 1; 
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
  min-height: calc(100vh - 180px - 100px);

  
}

footer {
  height: 180px; 
  background-color: #000000;
  border-top: 4px solid #111;
  color: #32cd32;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}




</style>

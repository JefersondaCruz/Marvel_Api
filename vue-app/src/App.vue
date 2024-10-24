<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBarVue from './components/NavBar.vue';

</script>

<template>

<div>
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
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;

  
}



</style>

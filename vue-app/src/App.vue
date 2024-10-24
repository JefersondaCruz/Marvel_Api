<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/Favorite">Favorites</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
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

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.nav-button {
  --1: #ff6200;
  --2: #f0dfdf;
  cursor: pointer;
  width: 184px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125em;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  background: var(--1);
  border: 2px solid var(--1);
  border-radius: .75rem;
  box-shadow: 0 8px 0 var(--2);
  text-decoration: none;
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

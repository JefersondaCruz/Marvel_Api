<template>
    
<div id="Nav-bar">
    <img src="../assets/rickandmorty.png" alt="rickandmorty" class="logo">
        <div class="wrapper">
                <nav class="btn-style" >
                    <RouterLink to="/" class="nav-button">Characters</RouterLink>
                    <RouterLink to="/Favorite" class="nav-button" > Favorites</RouterLink>
                </nav>
        </div>
</div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: "NavBar"
}
</script>
<style scoped>
    #Nav-bar {  
        height: 100px;
        background-color: #000000;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
    }

    .btn-style {
        display: flex;
        gap: 20px;
    }

    .nav-button {
        --1: #32cd32;
        --2: #;
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
        color: black;
        background: var(--1);
        border: 2px solid var(--1);
        border-radius: .75rem;
        box-shadow: 0 8px 0 var(--2);
        text-decoration: none;
        margin-right: 0 10px;
}

.nav-button:hover {
    transform: scale(1.2);
}

.wrapper {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    flex-direction: row;
}

.logo {
    width: 160px; 
    height: auto; 
    margin-right: 20px;
}



</style>
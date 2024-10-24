<template>
    <div>
        <h2> Favoritos </h2>
        <div v-for="character in getFavoritedCharacters" :key="character.id" >
            <p>{{ character.name }}</p>
            <img :src="character.images" :alt="character.images">
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Favorites",
    computed: {
        ...mapGetters(["getFavoritedCharacters"])
    }
}
</script>

<style>
    
</style>
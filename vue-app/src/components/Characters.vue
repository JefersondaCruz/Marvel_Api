<template>
    <div class="characters-container">
        <div class="card-characters" v-for="character in charactersData" :key="character.id">
            <img :src="character.image" alt="character.name">
            <h3>{{ character.name }}</h3>
            <ul class="list-style" >
                <li>- {{ character.status }}</li>
                <li>- {{ character.species }}</li>
                <li>- {{ character.gender }}</li>
            </ul>

        </div>
    </div>
</template>
    
<script>
import { ShowCharacters } from '@/services/HttpService';

export default {
    name: 'Characters',

    data() {
        return {
            charactersData: []
        }
    },
    created() {
        this.getCharactersData();
    },
    methods: {
        async getCharactersData() {
            const res = await ShowCharacters();
            this.charactersData = res.data.results;
        },
        toggleFavorite(character) {
        this.$store.commit('toggleFavorite', character);
    }
    }
}

</script>

<style scoped>
    .characters-container {
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        max-width: 60em;
        margin: auto;
    }

    .card-characters {
        background-color: rgb(10, 9, 9);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 200px;
        margin: 10px;
        padding: 2px;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.479);
        text-align: center;
        border-radius: 2px;
        color: #32cd32;
    }

    .card-characters:hover {
        transform: scale(1.10);
        animation: fire-animation 0.8s infinite alternate ease-in-out;
    }

    @keyframes fire-animation {
    0% {
        box-shadow: 0 0 10px green, 0 0 20px limegreen, 0 0 30px limegreen, 0 0 40px green;
    }
    50% {
        box-shadow: 0 0 20px limegreen, 0 0 30px limegreen, 0 0 40px limegreen, 0 0 50px green;
    }
    100% {
        box-shadow: 0 0 30px limegreen, 0 0 40px green, 0 0 50px limegreen, 0 0 60px limegreen;
    }
}

    .card-characters img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
        margin: 0;
    }

    .card-characters h3 {
        align-items: row;
    }

    .list-style {
        list-style: none;
        text-align: left;
    }

    .card-characters h3 {
    position: relative;
    color: #32cd32;
    animation: glow-text 3s infinite;
}

@keyframes glow-text {
    0% {
        text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime;
    }
    50% {
        text-shadow: 0 0 15px lime, 0 0 25px lime, 0 0 35px lime;
    }
    100% {
        text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime;
    }
}
    
</style>

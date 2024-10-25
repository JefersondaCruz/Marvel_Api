import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCharacters: [],
    favoritedCharacters: JSON.parse(localStorage.getItem('favoritedCharacters')) || []
  },
  getters: {
    getSelectedCharacters(state) {
      return state.selectedCharacters;
    },
    getFavoritedCharacters(state) {
      return state.favoritedCharacters;
    }
  },
  mutations: {
    addSelectedCharacter(state, newCharacter) {
      state.selectedCharacters.push(newCharacter);
    },
    toggleFavorite(state, character) {
      state.favoritedCharacters.push(character); 
      localStorage.setItem('favoritedCharacters', JSON.stringify(state.favoritedCharacters));
    },

    deleteFavorited(state, characterId){
      const index = state.favoritedCharacters.findIndex(character => character.id === characterId);
      if (index !== -1) {
        state.favoritedCharacters.splice(index, 1);
        localStorage.setItem('favoritedCharacters', JSON.stringify(state.favoritedCharacters));
      }
    }

  },
  actions: {
    removeFavorited({ commit }, characterId) {
      commit('deleteFavorited', characterId);
    }
  },
  modules: {},
});

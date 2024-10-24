import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCharacters: [],
    favoritedCharacters: JSON.parse(localStorage.getItem('favoritedCharacters'))
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
    }

  },
  actions: {},
  modules: {},
});

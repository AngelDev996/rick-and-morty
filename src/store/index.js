import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacter(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacter({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})

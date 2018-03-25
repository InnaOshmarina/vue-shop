import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  // в этом свойстве будут храниться все наши данные:
  state: {
    user: {
      email: '',
      signComplete: false,
      uid: ''
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }  
  },
  mutations: {   
    signIn(state, payload) {
      state.user = payload;      
    }    
  },
  actions: {
    
  }

})

export default store

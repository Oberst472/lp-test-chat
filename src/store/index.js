import Vue from 'vue'
import Vuex from 'vuex'
import dialogs from './modules/dialogs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isUserAuthorized: false
  },
  mutations: {
      setIsUserAuthorized(state) {
          localStorage.getItem('name') ? state.isUserAuthorized = true : state.isUserAuthorized = false
      }
  },
  actions: {
      checkAuthorization({commit}) {
          commit('setIsUserAuthorized')
      }

  },
  modules: {
      dialogs
  }
})

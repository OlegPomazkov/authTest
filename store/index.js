import Vue from 'vue';
import Vuex from 'vuex';

import mockApi from '@/utils/mockApi'

Vue.use(Vuex);

const store = () => (new Vuex.Store({
  state: {
    authToken: '',
    userData: null
  },

  getters: {
    isAuthorized: state => !!state.authToken,
    userData: state => {
      if(state.userData) {
        return Object.assign({}, state.userData)
      } else {
        return null
      }
    }
  },

  mutations: {
    UPDATE_AUTH_TOKEN(state, str) {
      state.authToken = str
    },
    UPDATE_USER_DATA(state, user) {
      state.userData = user
    }
  },

  actions: {
    async checkToken({ commit, dispatch }, newToken){
      let token = newToken? newToken: window.localStorage.getItem('auth_token')

      try{
        if( token ){
          let user = await mockApi({
            method: 'checkAuth',
            token: token
          })

          if(user){
            commit('UPDATE_AUTH_TOKEN', token)
            commit('UPDATE_USER_DATA', user)
            window.localStorage.setItem('auth_token', token)  
          } else {
            commit('UPDATE_AUTH_TOKEN', '')
            commit('UPDATE_USER_DATA', user)
            window.localStorage.removeItem('auth_token')
          }
        } else {
          commit('UPDATE_AUTH_TOKEN', '')
          commit('UPDATE_USER_DATA', null)
        }  
      } catch(err){        
        console.error('From checkToken ---> ', err.message? err.message: '')
        throw err
      }
    }
  }
}))

export default store

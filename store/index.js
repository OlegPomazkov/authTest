import Vue from 'vue';
import Vuex from 'vuex';

import mockApi from '@/utils/mockApi'

Vue.use(Vuex);

const store = () => (new Vuex.Store({
  state: {
    guestMode: true,
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
    CHANGE_GUEST_MODE(state, mode) {
      state.guestMode = mode
    },
    UPDATE_AUTH_TOKEN(state, str) {
      state.authToken = str
    },
    UPDATE_USER_DATA(state, user) {
      state.userData = user
    }
  },

  actions: {
    changeGuestMode({ commit }, mode) {
      commit('CHANGE_GUEST_MODE', mode)
    },
    async checkToken({ commit, state }, newToken){
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
            if( !state.guestMode ) {
              window.localStorage.setItem('auth_token', token)
            } else {
              window.localStorage.removeItem('auth_token')
            }
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

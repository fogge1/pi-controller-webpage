import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  connect: false,
  loglimit: 10,
  user: {
    name: "isak.fogelberg@abbindustrigymnasium.se",
    password: "apaapa",
    port: 8883,
    adress: "maqiatto.com"
  },
  useSliders: false, 
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setUseSliders: (state, value) => {
    state.useSliders = value
  },
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  setUseSliders: ({commit}, value) => {
    commit('setUseSliders', value)
  },
}

// getters are functions
const getters = {
  connected: state => state.connect,
  GetUser: state => state.user,
  useSliders: state => state.useSliders
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
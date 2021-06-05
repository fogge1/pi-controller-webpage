import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  // connect: false,
  user: {
    name: "isak.fogelberg@abbindustrigymnasium.se",
    password: "apaapa",
    port: 8883,
    adress: "maqiatto.com"
  },
  useSliders: false,
  isConnected: false,
  latestPub: 'No publish made yet',
  speed: 0,
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
  setConnected: (state, value) => {
    state.isConnected = value
  },
  setLatestPub: (state, value) => {
    state.latestPub = value
  },
  setSpeed: (state, value) => {
    state.speed = value
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  setUseSliders: ({commit}, value) => {
    commit('setUseSliders', value)
  },
  setConnected: ({commit}, value) => {
    commit('setConnected', value)
  },
  setLatestPub: ({commit}, value) => {
    commit('setLatestPub', value)
  },
  setSpeed: ({commit}, value) => {
    commit('setSpeed', value)
  }
}

// getters are functions
const getters = {
  // connected: state => state.connect,
  GetUser: state => state.user,
  useSliders: state => state.useSliders,
  isConnected: state => state.isConnected,
  getLatestPub: state => state.latestPub,
  getSpeed: state => state.speed
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {},
  state,
  getters,
  actions,
  mutations
})

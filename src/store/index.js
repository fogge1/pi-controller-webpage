import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wantedSpeed: 0,
    xValues: [],
    yValues: [],
    wantedArray: []
  },
  mutations: {
    addSpeed: (state, value) => {
      state.xValues.push(state.xValues.length);
      state.yValues.push(value);
      state.wantedArray.push(state.wantedSpeed)
    },
    setWanted: (state, value) => {
      state.wantedSpeed = value
    }
  },
  actions: {
    addSpeed: ({commit}, value ) => {
      commit('addSpeed', value)
    },
    setWanted: ({commit}, value) => {
      commit('setWanted', value)
    }
  },
  getters: {
    getXValues: state => state.xValues,
    getYValues: state => state.yValues
  },
  modules: {
  }
})

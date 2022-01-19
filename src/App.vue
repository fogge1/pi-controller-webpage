<template>
  <div id="app">
    <button @click="publish('drive', 'f')">FRAM</button>
    <button @click="publish('drive', 's')">STOPP</button>
    <h2>{{test}}</h2>
  </div>
</template>

<script>

import client from './client/client.js'

export default {
  name: 'Home',
  components: {
    
  },
  data: () => {
    return {
      test: 'hej'
    }
  },
  methods: {
    publish: function(topic, val) {
      client.publish("isak.fogelberg@abbgymnasiet.se/" + topic, val)
    }
  },
  created() {
    // When created call connect function in client.js
    client.connect();
    client.subscribe('isak.fogelberg@abbgymnasiet.se/speed')
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

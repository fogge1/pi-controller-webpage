<template>
  <div id="app">
    <ShowDirections />
    <PauseButton />
    <ClientComponent />
    
    <SliderComponent />
    
    <Checkbox v-if="width > 375 || height > 812" ></Checkbox>
  </div>
</template>

<script>

import client from './client/client.js'
import SliderComponent from './components/SliderComponent'
import Checkbox from './components/Checkbox'
import ClientComponent from './components/ClientComponent'
import PauseButton from './components/PauseButton'
import ShowDirections from './components/ShowDirections'

export default {
  name: 'Home',
  components: {
    SliderComponent,
    Checkbox,
    ClientComponent,
    PauseButton,
    ShowDirections,
  },
  data: () => {
    return {
      width: window.innerWidth, // Width of user's screen
      height: window.innerHeight // Height of user's screen
    }
  },
  created() {
    // When created call connect function in client.js
    client.connect();
  }
}
</script>

<style>
body {
  background: darkgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: darkgray;
}
</style>

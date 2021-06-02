<template>
  <div id="app">
    <SliderComponent />
    <hr>
    <Checkbox v-if="width > 375 || height > 812" ></Checkbox>
  </div>
</template>

<script>

import client from './client/client.js'
// @ is an alias to /src
import SliderComponent from './components/SliderComponent'
import Checkbox from './components/Checkbox'

export default {
  name: 'Home',
  components: {
    SliderComponent,
    Checkbox,
  },
  data: () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  created() {
    client.connect();
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
  margin-top: 60px;
}
</style>

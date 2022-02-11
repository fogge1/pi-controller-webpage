<template>
  <div id="app">
    <Chart class="chart" :chart-data="datacollection" />
    
    <div class="container" >
      <div class="btnContainer">
        <button @click="publish('drive', 'f')" class="item green">FRAM</button>
        <button @click="publish('drive', 's')" class="item red">STOPP</button>
      </div>
      <div class="btnContainer">
        <input type="text" v-model="wantedSpeed" placeholder="bör hastighet" class="item">
        <button @click="setWanted" class="item green" >Publish bör hastighet</button>
      </div>
      <div class="btnContainer">
        <input type="text" v-model="Kp" placeholder="Kp värde" class="item">
        <button @click="publish('kp', Kp)" class="item green">Publish kp värde</button>
      </div>
      <div class="btnContainer">
        <input type="text" v-model="Ki" placeholder="Ki värde" class="item">
        <button @click="publish('ki', Ki)"  class="item green">Publish ki värde</button>
      </div>
    </div>
  </div>
</template>

<script>

import client from './client/client.js'
import Chart from './components/Chart.vue'

export default {
  name: 'Home',
  components: {
    Chart
  },
  data: () => {
    return {
      datacollection: {},
      wantedSpeed: 0,
      Kp: 0,
      Ki: 0
    }
  },
  methods: {
    publish: function(topic, val) {
      client.publish("isak.fogelberg@abbgymnasiet.se/" + topic, val)
    },
    setWanted: function() {
      this.publish('wantedspeed', this.wantedSpeed)
      this.$store.state.wantedSpeed = this.wantedSpeed;
    },
    fillData: function () {
      this.datacollection = {
        labels: this.$store.state.xValues,
        datasets: [
          {
            label: 'Actual speed',
            backgroundColor: '#f87979',
            data: this.$store.state.yValues,
            fill: false,
            borderColor: '#f87979',
          },
          {
            label:'Wanted speed',
            backgroundColor: 'rgb(75, 192, 192)',
            data: this.$store.state.wantedArray,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
          } 
        ]
      }
    },
  },
  watch: {
    '$store.state.yValues': function() {
      this.fillData()
    }
  },
  created() {
    // When created call connect function in client.js
    client.connect();
    client.subscribe('isak.fogelberg@abbgymnasiet.se/speed')
  },
  mounted() {
    this.fillData()
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
  display: flex;
  justify-content: center;
}

.chart {
  width: 900px;
}

.container {
  display: block;
}

.btnContainer {
  display: inline-block;
  margin: 50% 10px 10px 10px;
}

.item {
  display: block;
  margin: 10px;
  width: 100%;
}

.red {
  background-color: red;
  color: white;
}

.green {
  background-color: green;
  color: white;
}

</style>

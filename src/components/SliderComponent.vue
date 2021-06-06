<template>
  <div class="slider-container">
      <input v-model="steerValue" type="range" min="-80" max="80" value="0" class="slider" :disabled="!this.$store.getters.isConnected || this.$store.getters.useSliders || this.$store.getters.getPaused" />
      <input v-model="speedValue" type="range" min="-1023" max="1023" class="slider slider-vertical" orient="vertical" :disabled="!this.$store.getters.isConnected || this.$store.getters.useSliders || this.$store.getters.getPaused" />
      <Keys v-if="!this.$store.getters.getPaused" @updateSpeed="updateSpeed" @updateSteer="updateSteer" :speedValue="speedValue" />
  </div>
</template>

<script>
import Keys from './Keys'
import client from '../client/client.js'

export default {
  components: {
    Keys
  },
  data () {
    return {
      speedValue: 0, // initial speed value
      steerValue: 0, // inital steer value
      disableSliders: this.$store.getters.useSliders // get if sliders should be disabled
    }
  },
  methods: {
    Send(value) {
      client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", value)
      this.$store.dispatch("setLatestPub", value)
      this.$store.dispatch("setSpeed", this.speedValue);
    },
    updateSpeed(valueFromChild) {
      this.speedValue = valueFromChild
    },
    updateSteer(valueFromChild) {
      console.log("test")
      this.steerValue = valueFromChild
    }
  },
  watch: {
    speedValue : function () {
      let dir = 'f'
      let updatedValue = this.speedValue
       if ( this.speedValue > 0 ) {
         dir = 'f'
       }
       else if ( this.speedValue < 0) {
         dir = 'b'
         updatedValue = this.speedValue * -1
       }
      this.Send(dir + updatedValue)
    },
    steerValue : function () {
      let dir = 'r'
      let steerAngle = this.steerValue;
      if ( this.steerValue > 0 ) {
        dir = 'r'
      }

      else if ( this.steerValue < 0) {
        dir = 'l'
        steerAngle = this.steerValue * -1
      }
      this.Send(dir + steerAngle)
    }
  },
  
}
  

</script>

<style scoped>

.slider-container {
  border: 1px solid black;
  border-radius: 6px;
}

.slider-vertical {
  -webkit-appearance: slider-vertical;
}
.slider-vertical::-webkit-slider-thumb {
  -webkit-appearance: slider-vertical;
}

.slider {
  width: 40%;
  height: 30vh;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  display: inline;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 23px;
  height: 24px;
  border: 0;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 23px;
  height: 24px;
  border: 0;
  cursor: pointer;
}
</style>
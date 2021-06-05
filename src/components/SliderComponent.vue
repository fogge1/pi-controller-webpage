<template>
  <div class="slider-container">
      <input v-model="steerValue" type="range" min="-80" max="80" value="0" class="slider" :disabled="!this.$store.getters.isConnected || this.$store.getters.useSliders ? true : false" />
      <input v-model="speedValue" type="range" min="-1023" max="1023" class="slider slider-vertical" orient="vertical" :disabled="!this.$store.getters.isConnected || this.$store.getters.useSliders ? true : false" />
  </div>
</template>

<script>

import client from '../client/client.js'

export default {
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
      console.log(value)
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
  created () {
    addEventListener("keydown", (event) => {  
      if (event.keyCode == 37) { // Left key
        this.Send("l80")
        
      }
      else if (event.keyCode == 38) { // Up key
        this.Send("f1023")
        this.speedValue = 1023
      }
      else if (event.keyCode == 39) { // Right key
        this.Send("r80")
       
      }
      else if (event.keyCode == 40) { // Down key
        this.Send("b1023")
        this.speedValue = -1023
      }
      else if (event.keyCode == 32) {
        this.Send("f0")
      }
    }),
   addEventListener("keyup", (event) => {
    if (event.keyCode == 37 || event.isComposing ) { // release left
      this.Send("r0")
    }
    else if (event.keyCode == 39 || event.isComposing) { // release right
      this.Send("r0")
    }
   })
  }
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
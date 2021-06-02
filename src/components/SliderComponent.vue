<template>
  <div>
      <input v-model="steerValue" type="range" min="-80" max="80" value="0" class="slider" :disabled="this.$store.getters.useSliders" />
      <input v-model="speedValue" type="range" min="-1023" max="1023" class="slider slider-vertical" orient="vertical" :disabled="this.$store.getters.useSliders"/>
  </div>
</template>

<script>

import client from '../client/client.js'

export default {
  data () {
    return {
      speedValue: 0, // initial speed value
      steerValue: 0, // inital steer value
      disableSliders: this.$store.getters.useSliders
    }
  },
  methods: {
    Send(value) {
      client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", value)
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
    document.onkeydown = function (event) {
      switch (event.keyCode) {
         case 37:
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "l80")
            console.log("Left key is pressed.");
            break;
         case 38:
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "b1023")
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "l0")
            console.log("Up key is pressed.");
            break;
         case 39:
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "r80")
            console.log("Right key is pressed.");
            break;
         case 40:
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "f1023")
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "l0")
            console.log("Down key is pressed.");
            break;
          case 32:
            client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "f0")
            
      }
   }
  },
  mounted () {
    
  }
}
</script>

<style scoped>

.slider-vertical {
  -webkit-appearance: slider-vertical;
}
.slider-vertical::-webkit-slider-thumb {
  -webkit-appearance: slider-vertical;
}

.slider {
  width: 30%;
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
  /* background: url('https://i.pinimg.com/originals/ec/58/6a/ec586ac26f29bf6d186f0a738acdb056.jpg'); */
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 23px;
  height: 24px;
  border: 0;
  /* background: url('https://i.pinimg.com/originals/ec/58/6a/ec586ac26f29bf6d186f0a738acdb056.jpg'); */
  cursor: pointer;
}
</style>
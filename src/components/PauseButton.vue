<template>
    <div>
        <button @click="pauseCar" class="pause-btn"><i v-if="!isPaused" class="fas fa-pause"></i><i v-if="isPaused" class="fas fa-pause-circle"></i></button>   
    </div>
</template>

<script>

import client from '../client/client.js'

export default {
    data () {
        return {
            isPaused: false,
        }
    },
    methods: {
        pauseCar() {
            // Set isPaused to opposite value
            this.isPaused = !this.isPaused
            // Set message
            this.$store.dispatch("setLatestPub", this.isPaused ? 'Bilen är pausad' : 'Bilen är inte längre pausad')
            if (this.isPaused) {
                this.$store.dispatch("setSpeed", 0)
                this.$store.dispatch("setSteer", 0)
                client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "f0")
                client.publish("isak.fogelberg@abbindustrigymnasium.se/drive", "r0")
                this.$store.dispatch("setPaused", true)
            }
            else {
                this.$store.dispatch("setPaused", false)
            }
        }
    },
    created() {
        addEventListener("keydown", (event) => {
            if (event.keyCode == 32) {
                // Call pausedCar function if space is pressed
                this.pauseCar();
            }
        });
      }
    }

</script>

<style>

.pause-btn {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

</style>
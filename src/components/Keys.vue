<template>
  <div>

  </div>
</template>

<script>

export default {
    props: ['speedValue'],
    created () {
  
    addEventListener("keydown", (event) => {  
      if (event.keyCode == 37) { // Left key
        this.$emit('updateSteer', -80)
        
      }
      else if (event.keyCode == 38) { // Up key
        this.$emit('updateSpeed', 1023)
        if (this.speedValue == 1023 && !this.$store.getters.getPaused) {
            this.$parent.Send('f1023')
        }
      }
      else if (event.keyCode == 39) { // Right key
        this.$emit('updateSteer', 80)
      }
      else if (event.keyCode == 40) { // Down key
        this.$emit('updateSpeed', -1023)
        if (this.speedValue == -1023 && !this.$store.getters.getPaused) {
            this.$parent.Send('b1023')
        }
      }
    }),
   addEventListener("keyup", (event) => {
    if (event.keyCode == 37 || event.isComposing ) { // release left
      this.$emit('updateSteer', 0)
    }
    else if (event.keyCode == 39 || event.isComposing) { // release right
      this.$emit('updateSteer', 0)
    }
    else if (event.keyCode == 38 || event.isComposing) { // release up
      this.$emit('updateSpeed', 0)
    }
    else if (event.keyCode == 40 || event.isComposing) { // release down
      this.$emit('updateSpeed', 0)
    }
   })
  }
}
</script>

<style>

</style>
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
      // Emit -80 to SliderComponent
        this.$emit('updateSteer', -80)
        
      }
      else if (event.keyCode == 38) { // Up key
      // Emit 1023 to SliderComponent
        this.$emit('updateSpeed', 1023)
      }
      else if (event.keyCode == 39) { // Right key
      // Emit 80 to SliderComponent
        this.$emit('updateSteer', 80)
      }
      else if (event.keyCode == 40) { // Down key
        // Emit -1023 to SliderComponent
        this.$emit('updateSpeed', -1023)
      }
    }),
   addEventListener("keyup", (event) => {
    if (event.keyCode == 37 || event.isComposing ) { // release left key
      this.$emit('updateSteer', 0)
    }
    else if (event.keyCode == 39 || event.isComposing) { // release right key
      this.$emit('updateSteer', 0)
    }
    else if (event.keyCode == 38 || event.isComposing) { // release up key 
      this.$emit('updateSpeed', 0)
    }
    else if (event.keyCode == 40 || event.isComposing) { // release down key
      this.$emit('updateSpeed', 0)
    }
   })
  }
}
</script>

<style>

</style>
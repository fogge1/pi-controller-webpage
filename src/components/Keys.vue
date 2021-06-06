<template>
  <div>
      
  </div>
</template>

<script>
export default {
    created () {
  
    addEventListener("keydown", (event) => {  
      if (event.keyCode == 37) { // Left key
        this.$emit('updateSteer', -80)
        
      }
      else if (event.keyCode == 38) { // Up key
        this.$emit('updateSpeed', 1023)
      }
      else if (event.keyCode == 39) { // Right key
        this.$emit('updateSteer', 80)
      }
      else if (event.keyCode == 40) { // Down key
        this.$emit('updateSpeed', -1023)
      }
    }),
   addEventListener("keyup", (event) => {
    if (event.keyCode == 37 || event.isComposing ) { // release left
      this.$emit('updateSteer', 0)
    }
    else if (event.keyCode == 39 || event.isComposing) { // release right
      this.$emit('updateSteer', 0)
    }
   })
  }
}
</script>

<style>

</style>
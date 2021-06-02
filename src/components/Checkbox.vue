<template>
  <div>
    <label for="checkbox-sliders">Use Sliders   </label>
    <input type="checkbox" class="checkbox-sliders" id="checkbox-sliders" @click="updateCheckSlider($event)" checked/>
    
  </div>
</template>

<script>
export default {
    data : () => {
        return {
            
        }
    },
    methods: {
        updateCheckSlider (e)  {
            if (e.target.checked) {
                this.$store.dispatch("setUseSliders", false)
            }
            else {
                this.$store.dispatch("setUseSliders", true)
            }
        }
    }
}
</script>

<style scoped>


</style>
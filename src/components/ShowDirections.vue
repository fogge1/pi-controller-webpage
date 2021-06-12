<template>
  <div class="arrow-container">
      <div class="arr" :class="{'using' : this.$store.getters.getSteer < 0}" ><i class="fas fa-arrow-left"></i></div>
      <div class="arr" :class="{'using' : this.$store.getters.getSpeed > 0}"><i class="fas fa-arrow-up"></i></div>
      <div class="arr" :class="{'using' : this.$store.getters.getSpeed < 0}" ><i class="fas fa-arrow-down"></i></div>
      <div class="arr " :class="{'using' : this.$store.getters.getSteer > 0}" ><i class="fas fa-arrow-right"></i></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.using {
    color: green;
}

.arrow-container {
    height: 10vh;
}

.arr {
    font-size: 50px;
    display: inline-block;
}

</style>
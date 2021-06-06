<template>
  <div>
      <div class="arr" v-if="this.$store.getters.getSteer < 0"><i class="fas fa-arrow-left"></i></div>
      <div class="arr" v-if="this.$store.getters.getSpeed > 0"><i class="fas fa-arrow-up"></i></div>
      <div class="arr" v-if="this.$store.getters.getSpeed < 0"><i class="fas fa-arrow-down"></i></div>
      <div class="arr" v-if="this.$store.getters.getSteer > 0"><i class="fas fa-arrow-right"></i></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.arr {
    display: inline-block;
}

</style>
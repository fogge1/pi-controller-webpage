<template>
  <div>
      <p class="connectedTo" v-if="$store.getters.isConnected" >Ansluten till: {{$store.getters.GetUser.name}}</p>
      <p class="conntectedTo error" v-if="!$store.getters.isConnected">Error while connecting to: {{$store.getters.GetUser.name}}</p>
      <p>Speed: {{this.$store.getters.getSpeed}}</p>
      <p class="latest-pub"> Latest publish to arduino: {{this.$store.getters.getLatestPub}} </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

.connectedTo {
  font-weight: bold;
}

.error {
  color: red;
}

</style>
<template>
  <v-container style="background-color: white; min-height: 700px" class="rounded-lg gradient">
    <v-row>
      <v-col cols="12" md="2">
        <v-banner color="purple" dark shaped height="50px" width="140px">
          <h2>PATRONS</h2>
        </v-banner>
      </v-col>
    </v-row>
    <br><br><br>
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <img :src="require('../assets/ieee.png')" style="height: 50px">
      </v-col>
      <v-col cols="12" md="3">
        <img :src="require('../assets/patrons/_1.png')" style="height: 50px">
      </v-col>
      <v-col cols="12" md="3" align="center">
        <img :src="require('../assets/patrons/_2.png')" style="height: 50px">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Patrons"
}
</script>

<style scoped>

</style>

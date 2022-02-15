<template>
  <v-app>
    <v-container fluid id="container">
      <nav-bar></nav-bar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-container>
    <!--    <bottom></bottom>-->
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar";

export default {
  name: 'App',

  components: {NavBar},

  data: () => ({}),
};
</script>

<style>
#container {
  width: 1200px;
  align-self: center;
  height: 100%;
}

#app {
  background-image: linear-gradient(#9b9b9b, #ffffff);
}

</style>

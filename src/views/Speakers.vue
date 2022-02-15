<template>
  <v-container style="background-color: white;min-height: 700px" class="rounded-lg gradient">
    <v-row>
      <v-col cols="12" md="2">
        <v-banner color="purple" dark shaped height="50px" width="300px">
          <h2>KEYNOTE SPEAKERS</h2>
        </v-banner>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <profile
            name="Prof. Raymond Yeung"
            org="The Chinese University of Hong Kong"
            pos=""
            :photo="require('../assets/Committees/speakers/Yeung.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col cols="12" md="3">
        <profile
            name="Prof. Vincent Lau"
            org="The Hong Kong University of Science and Technology"
            pos=""
            :photo="require('../assets/Committees/speakers/Lau.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="3">
        <profile
            name="Prof. Zhu Han"
            org="University of Houston"
            pos=""
            :photo="require('../assets/Committees/speakers/Han.jpg')"
        ></profile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from "@/components/Committees/Profile";

export default {
  name: "Speakers",
  components: {Profile}
}
</script>

<style scoped>
img {
  background: rgb(143, 131, 120);
  object-fit: cover;
  width: 200px;
  height: 250px;
}
</style>

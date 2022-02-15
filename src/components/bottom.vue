<template>
  <v-card color="#ffffff" width="100%" id="bottom">
    <v-container fluid style="text-align: center">
      <v-row>
        <v-col cols="12" md="6" align="center">
          <v-img :src="require('../assets/cuhksz.png')" max-width="200"></v-img>
          <h2>The Chinese Univ. of Hong Kong, Shenzhen</h2>
          <ul style="text-align: left; max-width: 80%">
            <li>Founded by CUHK and the Shenzhen Government in 2014</li>
            <li>To provide top-quality higher education that features an integration of the East and the West</li>
            <li>400+ faculty members, all with teaching or research experiences overseas,</li>
            <li>8,000+ students including 3000 Master/PhD students</li>
            <li>7 Schools and 4 Colleges</li>
          </ul>
        </v-col>
        <v-col cols="12" md="6" align="center">
          <v-img :src="require('../assets/sust.png')" max-width="350"></v-img>
          <h2>The Southern Univ. of Science & Technology</h2>
          <ul style="text-align: left; max-width: 80%">
            <li>Founded by the Shenzhen Government in 2012</li>
            <li>To explore and develop a modern university system with Chinese characteristics to serve as a model for cultivating innovative talents</li>
            <li>1200+ faculty members, 90% with teaching or research experiences overseas,</li>
            <li>7,500 students including 3000+ Master/PhD students</li>
            <li>8 Schools and 6 Colleges</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "bottom"
}
</script>

<style scoped>
#bottom {
  font-family: 'Times New Roman', serif;
  font-size: smaller;
}
</style>

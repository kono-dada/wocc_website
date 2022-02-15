<template>
  <v-container style="background-color: white;min-height: 700px" class="rounded-lg gradient">
    <v-row>
      <v-col cols="12" md="2">
        <v-banner color="purple" dark shaped height="50px" width="220px">
          <h2>HOTEL/TRAVEL</h2>
        </v-banner>
      </v-col>
    </v-row>
    <v-container class="mx-10">
      <h2>Conference Venue:</h2>
      <span>The COLI Hotel Shenzhen (168 Dayun
Rd, Shenzhen, Guangdong, China)</span>
      <br>
      <u style="color: red">Due to COVID-19 pandemic, WOCC 2022
will be held in hybrid form.</u>
    </v-container>
    <v-row class="mx-5">
      <v-col cols="12" md="4" class="mx-5">
        <p>
          The Coli Hotel is located at the area of Universiade Sports Stadium, Longgang District, Shenzhen.
          It is invested, constructed and managed by China Overseas Property Co.,Ltd. As a five-star hotel,
          The Coli Hotel is Spanish-themed, elegant and perfect business style. The Coli Hotel aims to be a leading
          hotel in Longgang district and Shenzhen City.
        </p>
      </v-col>
      <v-col>
        <v-img :src="require('../assets/hotel/1.jpg')" max-width="400"></v-img>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <br>
    <v-row class="mx-5">
      <v-col cols="12" md="5" align="right">
        <v-img :src="require('../assets/hotel/2.jpg')" max-width="400"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>
          With a total of 26 floors, The Coli Hotel has 418 rooms, Chinese restaurant, full-time western restaurant,
          French restaurant, lobby bar, executive lounge and other dining facilities. The Hotel has also a 1,
          500-square-meter grand ballroom, several meeting rooms, and fitness centre, business centre, shopping arcade,
          flower shop, wedding garden, SPA centre, parking lot and other facilities which ensure you will enjoy
          your stay here.
        </p>
      </v-col>
    </v-row>
    <br>
    <v-card class="mx-15" color="#E9D91955" elevation="3" outlined>
      <p>Website：<a>www.thecolihotelsz.com</a></p>
      <p>WeChat official account：thecolihotelsz</p>
      <p>COLI Hotel Number：（+86 755）89899888</p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Hotel"
}
</script>

<style scoped>

</style>

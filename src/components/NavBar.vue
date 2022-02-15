<template>
  <v-container style="text-align: center">
    <v-card color="#110033" class="rounded-lg">

      <v-row justify="center" align="center">
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="8" >
          <v-img :src="require('../assets/banner.png')" width="700"></v-img>
        </v-col>
        <v-col md="3" align="center" >
          <v-container class="rounded-lg">
            <v-row>
              <img :src="require('../assets/ieee.png')" width="140" style="filter: invert(100%)" alt="ieee">
              <img :src="require('../assets/patrons/_1.png')" width="150" class="my-5" alt="GGE">
              <img :src="require('../assets/patrons/_2_dark.png')" width="140" alt="mizarvision">
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-container>
        <v-btn
            style="font-size: 13px; font-weight: 500;"
            text
            :color="active===bar.url?'#58B2F2':'white'"
            v-for="bar in bars"
            @click="active=bar.url; jumpTo(bar.url)"
            :key="bar.name"
            dark
        >{{ bar.name }}
        </v-btn>
      </v-container>
    </v-card>
  </v-container>


</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    show: false,
    active: '',
    bars: [
      {
        name: 'HOME',
        url: '/',
      },
      // {
      //   name: 'ABOUT',
      //   url: '/about',
      // },
      {
        name: 'COMMITTEES',
        url: '/committees',
      },
      {
        name: 'AUTHORS',
        url: '/authors',
      },
      {
        name: 'SPEAKERS',
        url: '/speakers'
      }
      ,
      {
        name: 'PROGRAM',
        url: '/program',
      },
      {
        name: 'REGISTRATION',
        url: '/registration'
      },
      {
        name: 'HOTEL/TRAVEL',
        url: '/hotel',
      },
      {
        name: 'PATRONS/EXHIBITORS',
        url: '/patrons'
      }
    ],
  }),
  created() {
    this.active = this.$route.path
    // console.log(this.active)
    // console.log(this.$route.path)
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>

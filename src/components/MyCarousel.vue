<template>
  <v-carousel
      v-model="model"
      height="300px"
      hide-delimiter-background
      :show-arrows="false"
  >
    <v-carousel-item
        v-for="(slide, i) in images"
        :key="i"
    >
      <v-img :src="slide" ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MyCarousel",

  data: () => ({
    model: 0,
    images: [
      require('../assets/carousels/slide_2.jpg'),
      require('../assets/carousels/slide_1.png'),
    ]
  })
}
</script>

<style scoped>

</style>

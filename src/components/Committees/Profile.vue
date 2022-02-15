<template>
  <div style="text-align: center;width: 200px;">
    <span class="pos">{{pos}}</span>
    <br>
    <img :src=photo alt="" style="align-self: center">
<!--    <div style="width: 150px; height: 200px">-->
<!--      <img :src=photo alt="">-->
<!--    </div>-->
    <br>
    <span style="font-weight: 600">{{ name }}</span>
    <br>
    <span class="org">{{ org }}</span>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    pos: String,
    org: String,
    name: String,
    photo: String
  }
}
</script>

<style scoped>
img {
  background: rgb(143, 131, 120);
  object-fit: cover;
  width: 120px;
  height: 180px;
}
.pos {
  color: darkred;
}

.org {
  font-size: 10px;
}
</style>

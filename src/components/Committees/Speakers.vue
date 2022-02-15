<template>
<v-container>
  <v-banner color="purple" style="text-align: center" dark shaped>
    <v-container><h1>Keynote Speakers</h1></v-container>
  </v-banner>

  <br>
  <v-card tile outlined>
    <v-card-title><h2>杨伟豪教授 (Prof. Raymond Yeung)</h2></v-card-title>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="3">
          <v-img :src="require('../../assets/Committees/speakers/Yeung.jpg')"></v-img>
        </v-col>
        <v-col
            cols="12"
            md="9"
        >
          <ul>
            <li>香港中文大学卓敏信息工程学讲座教授</li>
            <li>2022年香农奖获奖者，该奖项为信息论领域的最高荣誉。他将于2022年在芬兰埃斯波举行的IEEE信息理论国际研讨会上发表“香农演讲”。</li>
            <li>电气与电子工程师协会会士、香港工程科学院院士</li>
            <li>香港中文大学网络编码研究所联席所长</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card>
    <v-card-title><h2>刘坚能教授 (Prof. Vincent Lau)</h2></v-card-title>
    <v-container>
      <v-row justify="end">
        <v-col
            cols="12"
            md="3">
          <v-img :src="require('../../assets/Committees/speakers/Lau.jpg')"></v-img>
        </v-col>
        <v-col
            cols="12"
            md="9"
        >
          <ul>
            <li>香港中文大学卓敏信息工程学讲座教授</li>
            <li>2022年香农奖获奖者，该奖项为信息论领域的最高荣誉。他将于2022年在芬兰埃斯波举行的IEEE信息理论国际研讨会上发表“香农演讲”。</li>
            <li>电气与电子工程师协会会士、香港工程科学院院士</li>
            <li>香港中文大学网络编码研究所联席所长</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <br>
  <v-banner color="purple" style="text-align: center" dark shaped>
    <v-container><h1>Invited Speakers</h1></v-container>
  </v-banner>
  <v-card height="600px"></v-card>
</v-container>
</template>

<script>
export default {
  name: "Speakers"
}
</script>

<style scoped>

</style>

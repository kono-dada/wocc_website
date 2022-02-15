<template>
<v-container>
  <v-banner color="#aa3333" style="text-align: center" dark shaped>
    <v-container><h1>WOCC 2022 会议共同主席</h1></v-container>
  </v-banner>

  <br>
  <v-card tile outlined>
    <v-card-title><h2>潘文安教授 (Prof. Simon Pun)</h2></v-card-title>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="3">
          <v-img :src="require('../../assets/Committees/presidents/pun.png')"></v-img>
        </v-col>
        <v-col
            cols="12"
            md="9"
        >
          <ul>
            <li>Associate Professor, The Chinese Univ. of Hong Kong, Shenzhen (CUHKSZ)</li>
            <li>PhD, University of Southern California (USC) in 2006</li>
            <li>Industry Experience : Huawei (US), MERL (Boston), Sony (Tokyo)</li>
            <li>Machine learning for communications and remote sensing and IoT</li>
            <li>Best paper awards from IEEE VTC'06 Fall, IEEE ICC'08 and IEEE Infocom'09</li>
            <li>Associate Editor, IEEE Trans. Wireless Comm. (2011 – 2014), WC Symposium co-chairs for ICC 2010 &
              2021
            </li>
            <li>Chapter Chair, IEEE Joint SPS-ComSoc Chapter, Shenzhen</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-card tile outlined>
    <v-card-title><h2>王锐教授 (Prof. Rui Wang)</h2></v-card-title>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="3">
          <v-img :src="require('../../assets/Committees/presidents/wang.png')"></v-img>
        </v-col>
        <v-col
            cols="12"
            md="9"
        >
          <ul>
            <li>Associate Professor, The Southern University of Science & Technology (SUSTech)</li>
            <li>PhD, Hong Kong Univ. of Science and Technology (HKUST) in 2008</li>
            <li>Industry Experience: Huawei</li>
            <li>Stochastic optimization, Distributive algorithm Design, Massive MIMO, Visible light communication,
              Millimeter wave communication
            </li>
            <li>IEEE WCL 2020 Exemplary Editors</li>
            <li>Editorial Board: IEEE WCL, IEEE OJCOMS, JCIN</li>
            <li>Vice Chapter Chair, IEEE Joint SPS-ComSoc Chapter, Shenzhen</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "Presidents"
}
</script>

<style scoped>

</style>

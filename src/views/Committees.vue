<template>
  <v-container style="background-color: white;min-height: 700px" class="rounded-lg gradient">
    <v-row>
      <v-col cols="12" md="2">
        <v-banner color="purple" dark shaped height="50px" width="200px">
          <h2>COMMITTEES</h2>
        </v-banner>
      </v-col>
    </v-row>
    <br><br><br>
    <!----------------------------------------------------------------------->
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <profile
            pos="General Co-Chairs"
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Simon Pun"
            :photo="require('../assets/Committees/presidents/pun.png')"
        ></profile>
      </v-col>
      <v-col cols="12" md="2"></v-col>
      <v-col md="3">
        <profile
            pos="General Co-Chairs"
            org="The Southern Univ. of Science & Technology"
            name="Rui Wang"
            :photo="require('../assets/Committees/presidents/wang.png')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <!---------------------------------------------------------------------------->
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <profile
            pos="General Vice Chairs"
            org="Shenzhen University"
            name="Suzhi Bi"
            :photo="require('../assets/Committees/Suzhi Bi.jpg')"
        ></profile>
      </v-col>
      <v-col cols="12" md="2"></v-col>
      <v-col md="3">
        <profile
            pos='General Vice Chairs'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Shenghao Yang"
            :photo="require('../assets/Committees/yang_sheng_hao__0.jpg')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <!------------------------------------------------------------------->
    <v-row justify="center" align="center">
      <v-col md="3">
        <profile
            pos='Technical Program Chairs'
            org="Tongji University"
            name="Kai Yang"
            :photo="require('../assets/Committees/YangKai.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="3">
        <profile
            pos='Technical Program Chairs'
            org="Shenzhen University"
            name="Yejun He"
            :photo="require('../assets/Committees/Yejun He.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="3">
        <profile
            pos='Technical Program Chairs'
            org="Shenzhen University"
            name="Xiaoxiao Wu"
            :photo="require('../assets/Committees/Xiaoxiao Wu.jpg')"
        ></profile>
      </v-col>
    </v-row>
    <!--------------------------------------------------------------->
    <v-row justify="center">
      <v-col md="3">
        <profile
            pos='Technical Program Chairs'
            org="Nokia, China"
            name="Yu Zhan"
            :photo="require('../assets/Committees/Zhan_Yu.jpg')"
        ></profile>
      </v-col>
      <v-col md="2"></v-col>
      <v-col md="3">
        <profile
            pos='Technical Program Chairs'
            org="MizarVision"
            name="Ming Liu"
            :photo="require('../assets/Committees/liu_ming.jpg')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <!---------------------------------------------------------------->
    <v-row justify="center">
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Junting Chen"
            :photo="require('../assets/Committees/junting_chen.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="The Southern Univ. of Science & Technology"
            name="Shuai Wang"
            :photo="require('../assets/Committees/Shuai Wang.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="Shenzhen University"
            name="Yatao Yang"
            :photo="require('../assets/Committees/yatao_yang.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="Tsinghua University"
            name="Hongyan Fu"
            :photo="require('../assets/Committees/Hongyan Fu.jpg')"
        ></profile>
      </v-col>
    </v-row>
    <!---------------------------------------------------------------->
    <v-row justify="center">
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="Shenzhen University"
            name="Taotao Wang"
            :photo="require('../assets/Committees/Taotao Wang.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Fangxin Wang"
            :photo="require('../assets/Committees/Fangxin Wang.jpg')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Yi Chen"
            :photo="require('../assets/Committees/CHEN Yi.png')"
        ></profile>
      </v-col>
      <v-col md="1"></v-col>
      <v-col md="2">
        <profile
            pos='Symposia Chairs'
            org="Shenzhen University"
            name="Shuoyao Wang"
            :photo="require('../assets/Committees/Shuoyao Wang.jpg')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <!------------------------------------------------------------------------>
    <v-row justify="center">
      <v-col md="3">
        <profile
            pos='Publication Chair'
            org="Huazhong Univ. of Science and Technology"
            name="Yi Zhong"
            :photo="require('../assets/Committees/Zhong_Yi.jpg')"
        ></profile>
      </v-col>
      <v-col md="2"></v-col>
      <v-col md="3">
        <profile
            pos='Registration & Finance Chair'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Xiaoying Tang"
            :photo="require('../assets/Committees/Xiaoying Tang.png')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <!--------------------------------------------------------------------->
    <br>
    <div style="width: 100%;text-align: center;">
      <span style="color: darkred;  width: 100%">Website & Local Arrangement Chairs</span>
    </div>
    <v-row justify="center">
      <v-col md="3">
        <profile
            pos=''
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Xiaokang Zhang"
            :photo="require('../assets/Committees/zhangxiaokang.jpg')"
        ></profile>
      </v-col>
      <v-col md="2"></v-col>
      <v-col md="3">
        <profile
            pos=''
            org="Huawei"
            name="Guanchong Niu"
            :photo="require('../assets/Committees/NiuGuanchong.png')"
        ></profile>
      </v-col>
    </v-row>
    <br><v-divider></v-divider><br>
    <v-row justify="center">
      <v-col md="3">
        <profile
            pos='Publicity Chair'
            org="The Chinese Univ. of Hong Kong, Shenzhen"
            name="Sheng Guo"
            :photo="require('../assets/Committees/GuoSheng.png')"
        ></profile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from "@/components/Committees/Profile";

export default {
  name: "Committees",
  components: {Profile}
}
</script>

<style scoped>
</style>

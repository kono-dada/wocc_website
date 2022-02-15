<template>
  <v-container id="home" class="rounded-lg gradient" style="min-height: 700px">
    <!--    <MyCarousel></MyCarousel>-->
    <v-container>
      <v-row no-gutters justify="end">
        <v-col
            cols="12"
            md="3"
        >
          <v-card outlined color="#F1F4F8" class="rounded-lg ma-3">
            <h2 style="text-align: center; color: #333333;" class="my-1">Important Dates</h2>
            <v-timeline
                dense
            >
              <v-timeline-item fill-dot>
                <strong>Mar. 31, 2022</strong>
                <div class="text-caption">
                  Paper submission
                </div>
              </v-timeline-item>
              <v-timeline-item fill-dot>
                <strong>May 31, 2022</strong>
                <div class="text-caption">
                  Notification
                </div>
              </v-timeline-item>
              <v-timeline-item fill-dot>
                <strong>Jun. 30, 2022</strong>
                <div class="text-caption">
                  Camera-Ready
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>

        <v-col
            cols="12"
            md="9"
        >
          <v-card class="ma-3 px-6" height="100%" elevation="0" style="background: transparent">
            <h1 class="my-3">News</h1>
            <p v-for="item in news" :key="item">
              <span v-html="item"></span>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>


//import axios from "axios";

export default {
  name: "Home",
  // components: {MyCarousel},
  data: () => ({
    // eslint-disable-next-line no-undef
    news: news
  }),
  // created() {
  //   axios.request({
  //     url: '/news.json',//直接填写json文件在public下的路径即可
  //     method: 'get',
  //     headers: {
  //       'Cache-Control': 'no-cache'
  //     }
  //   }).then(res => {
  //     console.log(res.data)
  //     this.news = res.data.news
  //   })
  // }
}
</script>

<style scoped>
#home {
  background-color: #ffffff;
  font-family: SourceHanSansCN-Regular, system-ui;
}

p {
  font-family: SourceHanSansCN-Regular;
  font-size: 17px;
  color: #444444;
  letter-spacing: 0;
  line-height: 28px;
  font-weight: 400;
  border-left: 5px solid #58B2F2;
  padding-left: 10px;
}

</style>

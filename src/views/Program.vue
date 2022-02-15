<template>
  <v-container id="program" style="min-height: 700px; background-color: white" class="rounded-lg gradient">
    <v-row>
      <v-col cols="12" md="2">
        <v-banner color="purple" dark shaped height="50px" width="180px">
          <h2>PROGRAM</h2>
        </v-banner>
      </v-col>
    </v-row>
    <p>Coming soon!</p>
    <v-row v-if="false" class="pa-4">
      <v-col sm="6" cols="12">
        <h2>8/11</h2>
        <v-timeline align-top dense>
          <v-timeline-item fill-dot>
            <v-row style="">
              <v-col cols="6">
                <strong>8:45-9:00</strong>
              </v-col>
              <v-col>
                Check In
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>9:00-9:20</strong>
              </v-col>
              <v-col>
                Opening Ceremony
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>9:35-10:05</strong>
              </v-col>
              <v-col>
                Keynote I
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>10:10-10:40</strong>
              </v-col>
              <v-col>
                Keynote II
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>11:00-12:15</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>1, <span style="color: red">W</span>1, <span
                  style="color: #006699">B</span>1
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>12:30-14:00</strong>
              </v-col>
              <v-col>
                Lunch
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>14:15-15:45</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>2, <span style="color: red">W</span>2, <span
                  style="color: #006699">B</span>2
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>16:00-17:30</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>3, <span style="color: red">W</span>2, <span
                  style="color: #006699">B</span>3
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>

      <v-divider vertical inset></v-divider>

      <v-col cols="12" sm="6">
        <h2>8/12</h2>
        <v-timeline align-top dense>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>9:00-9:30</strong>
              </v-col>
              <v-col>
                Keynote III
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>9:35-10:05</strong>
              </v-col>
              <v-col>
                Keynote IV
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>10:10-11:45</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>4, <span style="color: red">W</span>4, <span
                  style="color: #006699">B</span>4
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>12:00-14:00</strong>
              </v-col>
              <v-col>
                Lunch
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>14:15-15:30</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>5, <span style="color: red">W</span>5, <span
                  style="color: #aa8800">F</span>1
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>15:45-17:00</strong>
              </v-col>
              <v-col>
                <span style="color: green">O</span>6, <span style="color: red">W</span>6, <span
                  style="color: #aa8800">F</span>2
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item fill-dot>
            <v-row>
              <v-col cols="6">
                <strong>17:10-17:30</strong>
              </v-col>
              <v-col>
                Closing Ceremony
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-card v-if="false" class="px-10 py-4" outlined shaped>
      <v-row>
        <v-col cols="12" md="6">
          <p>
            <span style="color: red">W</span>: Wireless Communications and Networking Symposium
          </p>
          <p>
            <span style="color: green">O</span>: Optical Communications and Photonics Symposium:
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <p>
            <span style="color: #aa8800">F</span>: Emerging Networks and Future Internet Symposium
          </p>
          <p>
            <span style="color: #006699">B</span> : Big Data and Machine Learning Symposium
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Program"
}
</script>

<style scoped>
#program {
  background-color: #ffffff;
  /*font-family: 'Times New Roman', serif;*/
}
</style>

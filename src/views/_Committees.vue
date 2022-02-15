<template>
  <v-container id="committees" style="min-height: 400px">
    <v-tabs
        v-model="tab"
        center-active
        centered
        grow
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item><presidents></presidents></v-tab-item>
        <v-tab-item><organizing-committees></organizing-committees></v-tab-item>
        <v-tab-item><speakers></speakers></v-tab-item>
        <v-tab-item><TPCMembers></TPCMembers></v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-container>
</template>

<script>
import Presidents from "@/components/Committees/Presidents";
import Speakers from "@/components/Committees/Speakers";
import OrganizingCommittees from "@/components/Committees/OrganizingCommittees";
import TPCMembers from "@/components/Committees/TPCMembers";

export default {
  name: "Committees",
  components: {OrganizingCommittees, Speakers, Presidents, TPCMembers},
  data: () => ({
    tab: null,
    items: ['Presidents', 'Organizing Committees','Speakers', 'TPC Members']
  })
}
</script>

<style scoped>
#committees {
  background-color: #ffffff;
  font-family: 'Times New Roman', serif;
}
</style>

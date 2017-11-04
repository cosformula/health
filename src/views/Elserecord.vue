<template>
  <div >
    <v-tabs dark fixed centered>
      <v-tabs-bar class="cyan">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item href="'#tab-4">就诊记录</v-tabs-item>
        <v-tabs-item href="'#tab-5">病假记录</v-tabs-item>
        <v-tabs-item href="'#tab-6">转诊记录</v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content id="'tab-4"><docvis></docvis></v-tabs-content>
        <v-tabs-content id="'tab-5"><sickleave></sickleave></v-tabs-content>
        <v-tabs-content id="'tab-6"><tranvis></tranvis></v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>


<script>

import Doctorvisit from './Doctorvisit.vue'
import SickLeave from './SickLeave.vue'
import TransferVisit from './TransferVisit.vue'
export default {
  components: {
    'docvis': Doctorvisit,
    'sickleave': SickLeave,
    'tranvis': TransferVisit
  }
}
</script>


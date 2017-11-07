<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" enable-resize-watcher right app>
      <v-list two-line>
        <v-list-tile style="border-bottom: 1px solid #ddd">
          <v-list-tile-avatar>
            <img src="http://139.224.135.121/Public/image/mikasa.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>{{info_list.FullName}}</v-list-tile-content>
          <v-list-tile-content>{{info_list.UserName}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar v-for="item in history " v-bind:key="item.title" @click="goAnchor('#' + item.to)">
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="pink">iconfont {{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" fixed  app>
      <v-toolbar-title class="white--text">学生健康档案平台</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid class="px-0">
          <div class="ml-4">
            <h4 id="l1">体测记录</h4>
          </div>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 md4 class="ma-4">
              <phytest></phytest>
            </v-flex>
            <v-flex xs12 md7 class="ma-4">
              <linechart></linechart>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid class="px-0">
          <div class="ml-4" id="l2">
            <h4>体检记录</h4>
          </div>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 md12 class="ma-4">
              <phyexam></phyexam>
            </v-flex>
          </v-layout>
          <div class="ml-4">
            <h4 id="l3">疾病记录</h4>
          </div>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 md12 class="ma-4">
              <history></history>
            </v-flex>
          </v-layout>
          <div class="ml-4">
            <h4>其他记录</h4>
          </div>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 md12 class="pa-4">
              <elserecord></elserecord>
            </v-flex>
          </v-layout>
          <!-- <v-layout row wrap class="topboder">
                  <v-flex xs12 md7 class="ma-1">
                    <report></report>
                  </v-flex>
                  <v-flex xs12 md4 class="ma-3">
                  </v-flex>
                </v-layout> -->
        </v-container>
      </v-content>
    </main>
    </v-container>
  </v-app>
</template>

<script>
import Phytest from './Phytest.vue'
import LineChart from './LineChart.vue'
import Report from './Report.vue'
import Myinfo from './Myinfo.vue'
import Phyexam from './PhyExam.vue'
import Doctorvisit from './Doctorvisit.vue'
import History from './History.vue'
import Elserecord from './Elserecord.vue'
export default {
  components: {
    phytest: Phytest,
    linechart: LineChart,
    report: Report,
    myinfo: Myinfo,
    phyexam: Phyexam,
    docvis: Doctorvisit,
    history: History,
    elserecord: Elserecord
  },
  data: () => ({
    info_list: {
      Gender: '男',
      College: '外国语学院',
      FullName: '丁红彬',
      UserName: '09124406'
    },
    history: [
      {
        icon: 'icon-8311',
        text: '体测记录',
        num: '2',
        to: 'l1'
      },
      {
        icon: 'icon-tijian',
        text: '体检记录',
        num: '1',
        to: 'l2'
      },
      {
        icon: 'icon-jibing_illness',
        text: '疾病记录',
        num: '3',
        to: 'l3'
      },
      {
        icon: 'icon-fengxian',
        text: '献血记录',
        num: '2',
        to: 'l4'
      },
      {
        icon: 'icon-weibiaoti2',
        text: '就诊记录',
        num: '4',
        to: 'l5'
      },
      {
        icon: 'icon-baoxiao',
        text: '报销记录',
        num: '4',
        to: 'l6'
      },
      {
        icon: 'icon-zhenxian',
        text: '疫苗记录',
        num: '2',
        to: 'l7'
      },
      {
        icon: 'icon-zhuanzhenjilu',
        text: '转诊记录',
        num: '0',
        to: 'l8'
      },
      {
        icon: 'icon-qingjia',
        text: '病假记录',
        num: '2',
        to: 'l9'
      }
    ],
    drawer: false,
    movie: 'godfather',
    country: '',
    font: ''
  }),
  methods: {
    setPulpFiction() {
      this.movie = 'pulp_fiction'
    },
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector)
      document.body.scrollTop = anchor.offsetTop
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.topboder {
  border-top: 1px solid #ddd;
}
</style>

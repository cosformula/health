<template>
  <v-app>
    <v-dialog v-model="dialog9">
      <v-card>
        <myinfo></myinfo>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog9 = false">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-navigation-drawer temporary v-model="drawer" enable-resize-watcher right app>
      <v-list two-line>
        <v-list-tile style="border-bottom: 1px solid #ddd" @click="dialog9 = true">
          <v-list-tile-avatar>
            <img src="http://139.224.135.121/Public/image/mikasa.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>{{info_list.FullName}}</v-list-tile-content>
          <v-list-tile-content>{{info_list.UserName}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar v-for="(item,i) in history " :key="i" @click="goAnchor(i)">
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="pink">iconfont {{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar @click="dialog11 = true">
          <v-list-tile-action>
            <v-icon color="pink"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>糖尿病风险预测</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed style="background-color:rgba(50, 100, 100, 0.5);" app>
      <v-toolbar-title>我的健康档案</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <main style="height:100%;overflow-y:scroll;">
      <v-content>
        <v-container fluid class="pa-0 ma-0 ">
          <v-card flat hover>
            <v-card-title>
              <div class="headline">体测记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12 md12 lg4 class="ma-4">
                <phytest></phytest>
              </v-flex>
              <v-flex xs12 md12 lg7 class="ma-4">
                <linechart></linechart>
              </v-flex>
            </v-layout>
          </v-card>
          <v-card flat class="my-2 py-3" style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline">体检记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <phyexam></phyexam>
          </v-card>
          <v-card>
            <v-card-title>
              <div class="headline">献血记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <blooddonation></blooddonation>
            </v-card-text>
          </v-card>
          <v-layout row wrap>
            <v-flex xs12 md12 class="ma-4">
              <history></history>
            </v-flex>
          </v-layout>
          <div class="ml-4">
            <h4 id="l4">其他记录</h4>
          </div>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 md12 class="pa-4">
              <elserecord></elserecord>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    </v-container>
    <v-dialog v-model="dialog10">
      <v-card>
        <v-card-text>{{dialogtext10}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog10 = false">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog11" max-width="600px">
      <v-card>
        <risk></risk>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog11 = false">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Blooddonation from './Blooddonation.vue'
import Phytest from './Phytest.vue'
import LineChart from './LineChart.vue'
import Report from './Report.vue'
import Myinfo from './Myinfo.vue'
import Phyexam from './PhyExam.vue'
import History from './History.vue'
import Elserecord from './Elserecord.vue'
import Risk from './Risk.vue'
export default {
  components: {
    phytest: Phytest,
    linechart: LineChart,
    report: Report,
    myinfo: Myinfo,
    phyexam: Phyexam,
    history: History,
    elserecord: Elserecord,
    risk: Risk,
    Blooddonation
  },
  data: () => ({
    dialog9: false,
    dialog10: false,
    dialog11: false,
    dialogtext10: '',
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
        num: '0',
        to: 'l6'
      },
      {
        icon: 'icon-weibiaoti2',
        text: '就诊记录',
        num: '4',
        to: 'l4'
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
        to: 'l4'
      },
      {
        icon: 'icon-qingjia',
        text: '病假记录',
        num: '2',
        to: 'l4'
      }
    ],
    drawer: false,
    movie: 'godfather',
    country: '',
    font: ''
  }),
  mounted () {
    this.getHistory()
  },
  methods: {
    setPulpFiction() {
      this.movie = 'pulp_fiction'
    },
    goAnchor(i) {
      let tvm = this
      if (this.history[i].num === 0) {
        tvm.dialogtext10 = '您尚未有过' + tvm.history[i].text + '的记录哦!'
        tvm.dialog10 = true
      } else {
        document.getElementById(tvm.history[i].to).scrollIntoView()
        this.drawer = false
      }
    },
    getHistory () {
      let tvm = this
      this.$http.get('/api/v1/getHistory.php')
        .then((response) => {
          tvm.history[2].num = response.data.Chronic + response.data.Contagion + response.data.Serious
          tvm.history[3].num = response.data.BloodDonate
          tvm.history[4].num = response.data.Doctor_visit
          tvm.history[5].num = response.data.Reimbursement
          tvm.history[6].num = response.data.Vaccine
          tvm.history[7].num = response.data.TransferVisit
          tvm.history[8].num = response.data.SickLeave
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.topboder {
  border-top: 1px solid #ddd;
}
</style>

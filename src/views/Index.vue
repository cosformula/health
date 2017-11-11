<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" enable-resize-watcher right app>
      <v-list two-line>
        <v-list-tile style="border-bottom: 1px solid #ddd">
          <v-list-tile-avatar>
            <img src="http://139.224.135.121/Public/image/mikasa.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{$user.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{$user.cardID}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <sidebar></sidebar>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed color="light-blue" app>
      <v-toolbar-title>我的健康档案</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <main style="height:100%;overflow-y:scroll;" class="light-blue lighten-5">
      <v-content>
        <v-container fluid class="pa-0 ma-0 ">
          <v-card flat hover style="background-color:rgba(0,0,0,0)">
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-gerenxinxi</v-icon>体测记录</div>
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
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-tijian</v-icon>体检记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <phyexam></phyexam>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-fengxian</v-icon>献血记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <blooddonation :data="record.BloodDonate"></blooddonation>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-zhenxian</v-icon>疫苗记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <vaccine :data="record.Record_Vaccine"></vaccine>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-jibing_illness</v-icon>疾病记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <disease :data="record.Disease" :length="1"></disease>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-weibiaoti2</v-icon>就诊记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <docvis :data="record.DoctorVisit"></docvis>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-zhuanzhenjilu</v-icon>转诊记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <transvis :data="record.TransferVisit"></transvis>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-qingjia</v-icon>病假记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <sickleave :data="record.SickLeave"></sickleave>
          </v-card>
          <v-card flat class="my-2 pb-3 " style="background-color:rgba(0,0,0,0)" hover>
            <v-card-title>
              <div class="headline light-blue--text text--darken-4">
                <v-icon>iconfont-baoxiao</v-icon>报销记录</div>
            </v-card-title>
            <v-divider></v-divider>
            <reimbursement :data="record.Reimbursement"></reimbursement>
          </v-card>
          <!-- <others/> -->
        </v-container>
      </v-content>
    </main>
    </v-container>
    <v-dialog v-model="dialog10">
      <v-card>
        <v-card-text>{{dialogtext10}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click.native="dialog10 = false">确认</v-btn>
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
import Phyexam from './PhyExam.vue'
import History from './History.vue'
import Risk from './Risk.vue'
import Others from './Others.vue'
import Sidebar from './Sidebar.vue'
import Disease from './Disease.vue'
import Vaccine from './Vaccine.vue'
import Docvis from './Doctorvisit.vue'
import Transvis from './Transfervisit.vue'
import SickLeave from './SickLeave.vue'
import Reimbursement from './Reimbursement.vue'
export default {
  components: {
    phytest: Phytest,
    linechart: LineChart,
    report: Report,
    phyexam: Phyexam,
    history: History,
    risk: Risk,
    Others,
    Blooddonation,
    sidebar: Sidebar,
    sickleave: SickLeave,
    Disease,
    Vaccine,
    Docvis,
    Transvis,
    Reimbursement
  },
  data: () => ({
    dialog10: false,
    dialogtext10: '',
    info_list: {
      Gender: '男',
      College: '外国语学院',
      FullName: '丁红彬',
      UserName: '09124406'
    },
    record: {},
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
  mounted() {
    this.getHistory()
    this.getUserInfo()
    this.getRecord()
  },
  methods: {
    getRecord() {
      this.$http.get('/api/v1/allrecord.php').then(response => {
        this.record = response.data
      })
    },
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
    getHistory() {
      let tvm = this
      this.$http
        .get('/api/v1/getHistory.php')
        .then(response => {
          tvm.history[2].num =
            response.data.Chronic +
            response.data.Contagion +
            response.data.Serious
          tvm.history[3].num = response.data.BloodDonate
          tvm.history[4].num = response.data.Doctor_visit
          tvm.history[5].num = response.data.Reimbursement
          tvm.history[6].num = response.data.Vaccine
          tvm.history[7].num = response.data.TransferVisit
          tvm.history[8].num = response.data.SickLeave
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUserInfo() {
      this.info_list.UserName = this.$user.cardID
    }
  }
}
</script>

<style scoped>
.topboder {
  border-top: 1px solid #ddd;
}
</style>

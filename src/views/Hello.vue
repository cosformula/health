<template>
  <div>
    <v-navigation-drawer
    temporary
    v-model="drawer"
    enable-resize-watcher
    right
  >
      <drawbar></drawbar>
    </v-navigation-drawer>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">学生健康档案平台</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-container>
      <div class="ml-4"><h4>体测记录</h4></div>
        <v-layout row wrap class="topboder">
          <v-flex xs12 md4 class="ma-4">
            <phytest></phytest>
          </v-flex>
          <v-flex xs12 md7 class="ma-4">
            <linechart></linechart>
          </v-flex>
        </v-layout>
        <v-container>
        <v-layout row wrap class="topboder">
          <v-flex xs12 md12 class="ma-4">
            <phyexam></phyexam>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="topboder">
          <v-flex xs12 md12 class="ma-4">
            <phyexam></phyexam>
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
    </v-container>
  </div>
</template>

<script>
import Phytest from './Phytest.vue'
import LineChart from './LineChart.vue'
import Report from './Report.vue'
import Myinfo from './Myinfo.vue'
import Drawbar from './Drawbar.vue'
import Phyexam from './Phyexam.vue'
export default {
  components: {
    'phytest': Phytest,
    'linechart': LineChart,
    'report': Report,
    'myinfo': Myinfo,
    'drawbar': Drawbar,
    'phyexam': Phyexam
  },
  data: () => ({
    drawer: true,
    movie: 'godfather',
    country: '',
    font: '',
    functions: {
      fre: [{
        text: '基本信息',
        icon: 'icon-gerenxinxi',
        link: '/myinfo'
      }, {
        text: '体检记录',
        icon: 'icon-tijian',
        link: '/phyexam'
      }, {
        text: '体测记录',
        icon: 'icon-8311',
        link: '/phytest'
      }, {
        text: '献血记录',
        icon: 'icon-fengxian',
        link: '/blooddonation'
      }, {
        text: '就诊记录',
        icon: 'icon-weibiaoti2',
        link: '/dcvisit'
      }, {
        text: '疾病记录',
        icon: 'icon-jibing_illness',
        link: '/history'
      }, {
        text: '报销记录',
        icon: 'icon-baoxiao',
        link: '/reimbursement'
      }, {
        text: '疫苗记录',
        icon: 'icon-zhenxian',
        link: '/myvaccine'
      }, {
        text: '转诊记录',
        icon: 'icon-zhuanzhenjilu',
        link: '/transfervisit'
      }, {
        text: '病假记录',
        icon: 'icon-qingjia',
        link: '/sickleave'
      }]
    }
  }),
  methods: {
    setPulpFiction () {
      this.movie = 'pulp_fiction'
    }
  }
}

</script>

<style scoped>
.field-group {
  display: flex;
}

.list {
  font-size: 17px;
  color: gray;
}

a {
  display: block;
  text-align: center;
}

a:hover {
  text-decoration: none !important;
}

.material-icons {
  height: 20px;
  width: 20px;
  font-size: 35px;
  text-align: center;
}

.iconfont {
  height: 20px;
  width: 20px;
  font-size: 35px;
  text-align: center;
}

.column {
  text-align: center;
  width: 80%;
}
</style>

<style lang="less">
.card-layout {
  margin: 8px 2%;
  display: flex;

  .column {
    flex: 1;

    +.column {
      margin-left: 8px;
    }
  }

  .md-card+.md-card {
    margin-top: 8px;
  }
};
.topboder{
  border-top:1px solid #ddd;
}

</style>

<template>
  <v-container>
    <v-card>
      <v-layout row wrap>
        <v-flex xs12 md4 class="ma-4">
          <phytest></phytest>
        </v-flex>
        <v-flex xs12 md7 class="ma-4">
          <linechart></linechart>
        </v-flex>
      </v-layout>
      <v-container>
      <v-layout row wrap class="topboder">
        <v-flex xs12 md7 class="ma-4">
          <report></report>
        </v-flex>
        <v-flex xs12 md4 class="ma-3">
          <myinfo></myinfo>
        </v-flex>
      </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Phytest from './Phytest.vue'
import LineChart from './LineChart.vue'
import Report from './Report.vue'
import Myinfo from './Myinfo.vue'
export default {
  components: {
    'phytest': Phytest,
    'linechart': LineChart,
    'report': Report,
    'myinfo': Myinfo
  },
  data: () => ({
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
}
</style>

<style>
.topboder{
  border-top:1px solid #ddd;
}

</style>

<template id="container">
  <div class="header">
    <div style-width="100%">
      <md-tabs md-fixed>
        <md-tab id="frequent_functions" md-label="常用">
          <md-layout md-align="center" md-gutter="16">
            <md-layout md-flex-large="70" md-flex-xlarge="70" md-flex-small="90" md-flex-xsmall="90" md-flex-medium="90">
              <functions-card v-for="item in functions.fre" :link="item.link" :text="item.text" :icon="item.icon"></functions-card>
             </md-layout>
          </md-layout>
        </md-tab>
        <md-tab id="personal_info" md-label="个人信息">
          <md-layout md-align="center" md-gutter="16">
            <md-layout md-flex-large="70" md-flex-xlarge="70" md-flex-small="90" md-flex-xsmall="90" md-flex-medium="90">
              <functions-card v-for="item in functions.personal_info" :link="item.link" :text="item.text" :icon="item.icon"></functions-card>
            </md-layout>
          </md-layout>
        </md-tab>
  
        <md-tab id="clinic" md-label="门诊">
          <md-layout md-align="center" md-gutter="16">
            <md-layout md-flex-large="70" md-flex-xlarge="70" md-flex-small="90" md-flex-xsmall="90" md-flex-medium="90">
              <functions-card v-for="item in functions.clinic_records" :link="item.link" :text="item.text" :icon="item.icon"></functions-card>
            </md-layout>
          </md-layout>
  
        </md-tab>
  
        <md-tab id="health_education" md-label="健康教育">
  
        </md-tab>
      </md-tabs>
  
    </div>
  </div>
  
  </div>
</template>

<script>
import FunctionsCard from '../components/FunctionsCard.vue'
export default {
  components: { FunctionsCard },
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
        text: '体测记录',
        icon: 'icon-8311',
        link: '/link'
      }, {
        text: '就诊记录',
        icon: 'icon-weibiaoti2',
        link: '/dcvisit'
      }, {
        text: '报销记录',
        icon: 'icon-baoxiao',
        link: '/reimbursement'
      }],
      personal_info: [{
        text: '基本信息',
        icon: 'icon-gerenxinxi',
        link: '/myinfo'
      }, {
        text: '体检记录',
        icon: 'icon-tijian',
        link: '/link'
      }, {
        text: '体测记录',
        icon: 'icon-8311',
        link: '/link'
      }],
      clinic_records: [{
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
    setPulpFiction() {
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

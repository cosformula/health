<template id="container">
  <div class="header">
    <div style-width="100%">
      <div class="card-layout">
        <div class="column">
          <functions-card v-for="(item, index) in functions.fre"  v-if="index % 2 == 0" :key="index" :link="item.link" :text="item.text" :icon="item.icon" :titleid="'title' + index"></functions-card>
        </div>
        <div class="column">
          <functions-card v-for="(item, index)  in functions.fre"  v-if="index % 2 == 1" :key="index" :link="item.link" :text="item.text" :icon="item.icon" :titleid="'title' + index"></functions-card>
        </div>
      </div>

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
#app .title0 {
  margin-top: 80px;
  margin-bottom: 80px;
}

#app .title1 {
  margin-top: 60px;
  margin-bottom: 60px;
}

#app .title2 {
  margin-top: 60px;
  margin-bottom: 60px;
}

#app .title3 {
  margin-top: 80px;
  margin-bottom: 80px;
}

#app .title4 {
  margin-top: 80px;
  margin-bottom: 80px;
}

#app .title5 {
  margin-top: 60px;
  margin-bottom: 60px;
}

#app .title6 {
  margin-top: 60px;
  margin-bottom: 60px;
}

#app .title7 {
  margin-top: 80px;
  margin-bottom: 80px;
}

#app .title8 {
  margin-top: 80px;
  margin-bottom: 80px;
}

#app .title9 {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>

<template>
  <div>
    <v-card>
      <v-card-title>
        <div class="headline light-blue--text text--darken-4">历年体测记录</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <v-btn color="primary" dark outline slot="activator">{{year}}年</v-btn>
          <v-list>
            <v-list-tile v-for="item in yearlist" @click="getPhytest(item)" :key="item">
              <v-list-tile-title>{{item}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>
      <chart :options="option" auto-resize></chart>
    </v-card>
    <!-- <v-card class="mt-5">
      
      <v-list dense>
        <v-list-tile v-for="tip in tips" :key="tips">
          <v-list-tile-content>
            {{tip}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card> -->
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import bus from '../assets/eventBus'
import {timegrade} from '../common/function.js'
export default {
  components: {
    chart: ECharts
  },
  data() {
    return {
      tips: [],
      year: '',
      yearlist: ['2013', '2014', '2015', '2016'],
      option: {
        title: {
          // text: '雷达图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'center',
          data: ['及格线', '个人成绩']
        },
        toolbox: {
          show: true,
          x: 'right',
          y: 'bottom',
          feature: {
            dataView: { readOnly: false },
            saveAsImage: {}
          }
        },
        radar: [
          {
            indicator: [
              {text: '体重指数', max: 40},
              {text: '肺活量', max: 6000},
              {text: '50米跑', max: 13},
              {text: '坐位体前屈', max: 20},
              {text: '立定跳远', max: 250},
              {text: '1分钟仰卧起坐', max: 60},
              {text: '800米跑', max: 360}
            ],
            name: {
              formatter: '{value}',
              textStyle: {
                color: '#121e33'
              }
            },
            center: ['48%', '50%'],
            radius: 90,
            splitArea: {
              areaStyle: {
                color: [
                  'rgba(114, 172, 209, 0.0)',
                  'rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)',
                  'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)',
                  'rgba(114, 172, 209, 1)'
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            }
          }
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
              {
                value: [0, 0, 0, 0, 0, 0, 0],
                name: '及格线'
              },
              {
                value: [],
                name: '个人成绩',
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },
  created() {
    this.getPhytest('2015')
  },
  methods: {
    getPhytest(aYear) {
      // var f = new FormData()
      // f.append('id', this.$user.cardID)
      // f.append('year', 2015)
      // const translate = {
      //   BMI: '体重指数',
      //   fiftymeters: '50米跑',
      //   lung: '肺活量',
      //   sitandreach: '坐位体前屈',
      //   longjump: '立定跳远',
      //   longrun: '长跑',
      //   mix: '1分钟仰卧起坐'
      // }
      this.year = aYear
      this.$http
        .post(
          '/api/v1/getJsonphytest.php/',
          { year: this.year },
          { maxRedirects: 0 }
        )
        .then(res => {
          //  this.option.radar[0].indicator = res.data.indicator
          var data = res.data[0]
          var grade=data.year%100-data.id/1000000;
          if(data.gender==2&&grade<=2){
            data.BMI=data.BMI;
            data.lung=(data.lung>3333)?3333:data.lung;
            data.fiftymeters=data.fiftymeters;
            data.sitandreach=(data.sitandreach>10.8)?10.8:data.sitandreach;
            data.longjump=(data.longjump>253)?253:data.longjump;
            data.mix=(data.mix>45)?45:data.mix;
            data.longrun=data.longrun;
            this.option.radar[0].indicator=[
              {text:'(BMI:'+data.BMI+')\n'+'BMI成绩：',max: 100},
              {text: '肺活量\n(单位:ml)', max: 3333},
              {text: '(50米跑:'+data.fiftymeters+'s)\n成绩:', max: 100},
              {text: '坐位体前屈\n(单位:cm)', max: 10.8},
              {text: '立定跳远\n(单位:m)', max: 253},
              {text: '1分钟仰卧起坐\n(单位:个)', max: 45},
              {text: '(800米跑：'+data.longrun+'s)\n成绩:', max: 100}
            ]
            this.option.series[0].data[0].value = [60, 2000, 60, 6.0, 151, 26, 60]
            this.option.series[0].data[1].value = [(data.BMI>=17.2&&data.BMI<=23.9)?100:((data.BMI>=28.0)?60:80),
              data.lung,
              (data.fiftymeters==0)?0:((data.fiftymeters<=7.5)?100:timegrade(data.fiftymeters,7.6,7.7,8.3,10.3,11.2)),
              data.sitandreach,
              data.longjump,
              data.mix,         //252s 76,8.4 98         gra 95 90 80 60 10
                                  //60 + 2 *  Math.floor((g60-gra)/dv8060),dv8060=2.5
                (data.longrun==0)?0:((data.longrun<=198)?100:timegrade(data.longrun,204,210,224,274,324))
            ]
          } else if(data.gender==2&&grade>2){
            data.BMI=data.BMI;
            data.lung=(data.lung>3417)?3417:data.lung;
            data.fiftymeters=data.fiftymeters;
            data.sitandreach=(data.sitandreach>10.8)?10.8:data.sitandreach;
            data.longjump=(data.longjump>253)?253:data.longjump;
            data.mix=(data.mix>45)?45:data.mix;
            data.longrun=data.longrun;

            this.option.radar[0].indicator=[
                {text:'(BMI:'+data.BMI+')\n'+'BMI成绩：',max: 100},
                {text: '肺活量\n(单位:ml)', max: 3417},
                {text: '(50米跑:'+data.fiftymeters+'s)\n成绩:', max: 100},
                {text: '坐位体前屈\n(单位:cm)', max: 10.8},
                {text: '立定跳远\n(单位:m)', max: 253},
                {text: '1分钟仰卧起坐\n(单位:个)', max: 45},
                {text: '(800米跑：'+data.longrun+'s)\n成绩:', max: 100}
            ]
            this.option.series[0].data[0].value = [60, 2050, 60, 6.5, 152, 27, 60]
            this.option.series[0].data[1].value = [(data.BMI>=17.2&&data.BMI<=23.9)?100:((data.BMI>=28.0)?60:80),
              data.lung,
                (data.fiftymeters==0)?0:((data.fiftymeters<=7.4)?100:timegrade(data.fiftymeters,7.5,7.6,8.2,10.2,11.2)),
              data.sitandreach,
              data.longjump,
              data.mix,
              (data.longrun==0)?0:((data.longrun<=196)?100:timegrade(data.longrun,202,208,222,272,322))
            ]
          } else if(data.gender==1&&grade<=2){
            data.BMI=data.BMI;
            data.lung=(data.lung>5167)?5167:data.lung;
            data.fiftymeters=data.fiftymeters;
            data.sitandreach=(data.sitandreach>6.1)?6.1:data.sitandreach;
            data.longjump=(data.longjump>346)?346:data.longjump;
            data.mix=(data.mix>16.7)?16.7:data.mix;
            data.longrun=data.longrun;

            this.option.radar[0].indicator=[
                {text:'(BMI:'+data.BMI+')\n'+'BMI成绩：',max: 100},
                {text: '肺活量\n(单位:ml)', max: 5167},
                {text: '(50米跑:'+data.fiftymeters+'s)\n成绩:', max: 100},
                {text: '坐位体前屈\n(单位:cm)', max: 6.1},
                {text: '立定跳远\n(单位:m)', max: 346},
                {text: '引体向上\n(单位:个)', max: 16.7},
                {text: '(1000米跑：'+data.longrun+'s)\n成绩:', max: 100}
            ]
            this.option.series[0].data[0].value = [60, 3100, 60, 3.7, 208, 10, 60]
            this.option.series[0].data[1].value = [  (data.BMI>=17.9&&data.BMI<=23.9)?100:((data.BMI>=28.0)?60:80),
              data.lung,
                (data.fiftymeters==0)?0:((data.fiftymeters<=6.7)?100:timegrade(data.fiftymeters,6.8,6.9,7.1,9.1,10.1)),
              data.sitandreach,
              data.longjump,
              data.mix,
                (data.longrun==0)?0:((data.longrun<=197)?100:timegrade(data.longrun,202,207,222,272,372))
            ]
          } else {
            data.BMI=data.BMI;
            data.lung=(data.lung>5333)?5333:data.lung;
            data.fiftymeters=data.fiftymeters;
            data.sitandreach=(data.sitandreach>7)?7:data.sitandreach;
            data.longjump=(data.longjump>350)?350:data.longjump;
            data.mix=(data.mix>18.3)?18.3:data.mix;
            data.longrun=data.longrun;
            this.option.radar[0].indicator=[
                {text:'(BMI:'+data.BMI+')\n'+'BMI成绩：',max: 100},
                {text: '肺活量\n(单位:ml)', max: 5333},
                {text: '(50米跑:'+data.fiftymeters+'s)\n成绩:', max: 100},
                {text: '坐位体前屈\n(单位:cm)', max: 7},
                {text: '立定跳远\n(单位:m)', max: 350},
                {text: '引体向上\n(单位:个)', max: 18.3},
                {text: '(1000米跑：'+data.longrun+'s)\n成绩:', max: 100}
            ]
            this.option.series[0].data[0].value = [60, 3200, 60, 4.2, 210, 11, 60]
            this.option.series[0].data[1].value = [(data.BMI>=17.9&&data.BMI<=23.9)?100:((data.BMI>=28.0)?60:80),
            data.lung,
              (data.fiftymeters==0)?0:((data.fiftymeters<=6.6)?100:timegrade(data.fiftymeters,6.7,6.8,7.0,9,10)),
            data.sitandreach,
            data.longjump,
            data.mix,
                (data.longrun==0)?0:((data.longrun<=195)?100:timegrade(data.longrun,200,205,220,270,370))
            ]
          }
          
          bus.$emit('reportmsg', res.data.msg)
          this.tips = res.data.msg
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.echarts
  width 100%
</style>

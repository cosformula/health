<template>
  <v-card>
    <chart :options="option" auto-resize></chart>
  </v-card>
</template>

<script>
import ECharts from 'vue-ECharts'
export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
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
          feature: {
            dataView: { readOnly: false },
            saveAsImage: {}
          }
        },
        radar: [
          {
            indicator: [
              { text: '体重指数', max: 40 },
              { text: '肺活量', max: 6000 },
              { text: '50米跑', max: 13 },
              { text: '坐位体前屈', max: 20 },
              { text: '立定跳远', max: 250 },
              { text: '1分钟仰卧起坐', max: 60 },
              { text: '长跑', max: 360 }
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
                color: ['rgba(114, 172, 209, 0.0)',
                  'rgba(114, 172, 209, 0.2)', 'rgba(114, 172, 209, 0.4)',
                  'rgba(114, 172, 209, 0.6)', 'rgba(114, 172, 209, 0.8)',
                  'rgba(114, 172, 209, 1)'],
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
                    formatter: function (params) {
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
  created () {
    this.getPhytest()
  },
  methods: {
    getPhytest () {
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
      var params = new URLSearchParams()
      params.append('year', '2015')
      this.$http.post('/api/v1/getJsonphytest/', params, { maxRedirects: 0 })
        .then((res) => {
          this.option.radar[0].indicator = res.data.indicator
          this.option.series[0].data[0].value = res.data.passline
          this.option.series[0].data[1].value = res.data.score
        })
      console.log(this.option.series)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .echarts
    width 100%
</style>

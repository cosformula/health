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
          text: '历年体质趋势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2013', '2014', '2015', '2016']
        },
        toolbox: {
          show: true,
          feature: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          }
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['BMI', '50米', '肺活量', '坐位体前屈', '跳远', '引体向上/仰卧起坐', '长跑']
        },
        yAxis: {
          type: 'value'
          // name:'分数',
        },
        series: [
          {
            name: '2013',
            type: 'line',
            data: []
          },
          {
            name: '2014',
            type: 'line',
            data: []
          },
          {
            name: '2015',
            type: 'line',
            data: []
          },
          {
            name: '2016',
            type: 'line',
            data: []
          }
        ]
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
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
      this.$http.post('/api/v1/getJsonphytestbyid/', { maxRedirects: 0 })
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            for (var tmpyear = 2013; tmpyear < 2017; tmpyear++) {
              if (parseInt(response.data[i].year) === tmpyear) {
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].BMI))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].fiftymeters))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].lung))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].sitandreach))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].longjump))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].mix))
                this.option.series[tmpyear - 2013].data.push(parseInt(response.data[i].longrun))
              }
            }
          }
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

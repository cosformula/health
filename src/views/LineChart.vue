<template>
<div>
  <v-card>
    <chart :options="option" auto-resize></chart>
  </v-card>
</div>
</template>

<script>
import ECharts from 'vue-echarts'
export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
      option: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['BMI', '50米跑', '跳远', '肺活量', '', '坐位体前屈', (this.$user.gender === 1) ? '引体向上' : '仰卧起坐', (this.$user.gender === 1) ? '1000米跑' : '800米跑']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2013', '2014', '2015', '2016']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: 'BMI',
            type: 'line',
            data: []
          },
          {
            name: '50米跑',
            type: 'line',
            data: []
          },
          {
            name: '跳远',
            type: 'line',
            data: []
          },
          {
            name: '肺活量',
            type: 'line',
            data: []
          },
          {
            name: '坐位体前屈',
            type: 'line',
            data: []
          },
          {
            name: (this.$user.gender === 1) ? '引体向上' : '仰卧起坐',
            type: 'line',
            data: []
          },
          {
            name: (this.$user.gender === 1) ? '1000米跑' : '800米跑',
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
            for (var j = i + 1; j < response.data.length; j++) {
              if (response.data[i].year > response.data[j].year) {
                var tmp = response.data[i]
                response.data[i] = response.data[j]
                response.data[j] = tmp
              }
            }
          }
          for (var k = 0; k < response.data.length; k++) {
            this.option.series[0].data.push(parseInt(response.data[k].BMI))
            this.option.series[1].data.push(parseInt(response.data[k].fiftymeters))
            this.option.series[4].data.push(parseInt(response.data[k].longjump))
            this.option.series[2].data.push(parseInt(response.data[k].lung))
            this.option.series[3].data.push(parseInt(response.data[k].sitandreach))
            this.option.series[5].data.push(parseInt(response.data[k].mix))
            this.option.series[6].data.push(parseInt(response.data[k].longrun))
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

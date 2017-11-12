<template>
<div>
  <v-card>
    <v-card-title>
        <div class="headline light-blue--text text--darken-4">历年体测趋势</div>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark outline slot="activator" @click="(flag)?getRank():getData()">{{btntxt}}</v-btn>
      </v-card-title>
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
      btntxt: '我超过了多少人',
      flag: true,
      option: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['BMI', '50米跑', '跳远', '肺活量', '坐位体前屈', '引体向上/仰卧起坐', '长跑']
        },
        toolbox: {
          show: true,
          x: 'right',
          y: 'bottom',
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
            name: '引体向上/仰卧起坐',
            type: 'line',
            data: []
          },
          {
            name: '长跑',
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
      this.$http.post('/api/v1/getJsonphytestbyid/', { maxRedirects: 0 })
        .then((response) => {
          this.btntxt = '超过了多少人'
          this.flag = true
          this.option.yAxis.axisLabel.formatter = '{value}'
          for (var t = 0; t < this.option.series.length; t++) {
            this.option.series[t].data = []
          }
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
            this.option.series[2].data.push(parseInt(response.data[k].longjump))
            this.option.series[3].data.push(parseInt(response.data[k].lung))
            this.option.series[4].data.push(parseInt(response.data[k].sitandreach))
            this.option.series[5].data.push(parseInt(response.data[k].mix))
            this.option.series[6].data.push(parseInt(response.data[k].longrun))
          }
        })
    },
    getRank () {
      this.$http.post('/api/v1/getRank')
        .then((response) => {
          this.btntxt = '查看历年趋势'
          this.flag = false
          this.option.yAxis.axisLabel.formatter = '{value}%'
          for (var p = 0; p < this.option.series.length; p++) {
            this.option.series[p].data = []
          }
          for (var k = 2013; k < 2017; k++) {
            this.option.series[0].data.push(response.data[k].BMI)
            this.option.series[1].data.push(response.data[k].fiftymeters)
            this.option.series[2].data.push(response.data[k].longjump)
            this.option.series[3].data.push(response.data[k].lung)
            this.option.series[4].data.push(response.data[k].sitandreach)
            this.option.series[5].data.push(response.data[k].mix)
            this.option.series[6].data.push(response.data[k].longrun)
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .echarts
    width 100%
</style>

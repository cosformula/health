<template>
  <div class="hello">
    <h3 style="text-align:center;">转诊记录</h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="80" md-flex-small="80" md-flex-medium="80">
        <md-table style="width:100%;">
      <md-table-header>
        <md-table-row >
          <md-table-head md-numeric class="table_header" style="text-align:center;">转诊时间</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">转诊期限</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">病因</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">转至</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">科室</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">医生</md-table-head>
        </md-table-row>
      </md-table-header>
  
      <md-table-body>
        <md-table-row v-for="(row, index) in info_list" :key="index">
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      info: {
        'date': '2014-04-12T09:59:40',
        'Transfer_timelimit': '7天',
        'disease': '龋齿',
        'Transfer_hospital': '同济口腔科医院',
        'Transfer_medical_laboratory': '口腔科',
        'doctor': 'xxx'
      },
      info_list: [{
        'date': '2014-04-12T09:59:40',
        'Transfer_timelimit': '7天',
        'disease': '龋齿',
        'Transfer_hospital': '同济口腔科医院',
        'Transfer_medical_laboratory': '口腔科',
        'doctor': 'xxx'
      },
      {
        'date': '2014-04-12T09:59:40',
        'Transfer_timelimit': '7天',
        'disease': '龋齿',
        'Transfer_hospital': '同济口腔科医院',
        'Transfer_medical_laboratory': '口腔科',
        'doctor': 'xxx'
      },
      {
        'date': '2014-04-12T09:59:40',
        'Transfer_timelimit': '7天',
        'disease': '龋齿',
        'Transfer_hospital': '同济口腔科医院',
        'Transfer_medical_laboratory': '口腔科',
        'doctor': 'xxx'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

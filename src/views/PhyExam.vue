<template>
  <div class="hello">
        <md-tabs md-fixed>
          <md-tab id="体检1" md-label="入学体检">
            <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
    <md-table style="width:100%;">
      <md-table-header>
        <md-table-row>
          <md-table-head style="text-align:center;">性别</md-table-head>
          <md-table-head style="text-align:center;">年龄</md-table-head>
          <md-table-head style="text-align:center;">身高</md-table-head>
          <md-table-head style="text-align:center;">体重</md-table-head>
          <md-table-head style="text-align:center;">BMI</md-table-head>
          <md-table-head style="text-align:center;">血压</md-table-head>
          <md-table-head style="text-align:center;">高血压</md-table-head>
          <md-table-head style="text-align:center;">色盲</md-table-head>
          <md-table-head style="text-align:center;">视力</md-table-head>
          <md-table-head style="text-align:center;">心脏听诊</md-table-head>
          <md-table-head style="text-align:center;">心率</md-table-head>
          <md-table-head style="text-align:center;">肺部</md-table-head>
          <md-table-head style="text-align:center;">肝脾</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row style="text-align:center;" v-for="(row, index) in info_list" :key="index" md-numeric>
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </md-layout>
    </md-layout>
          </md-tab>
          <md-tab id="体检2" md-label="毕业体检">
            <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
    <md-table style="width:100%;">
      <md-table-header>
        <md-table-row>
          <md-table-head style="text-align:center;">性别</md-table-head>
          <md-table-head style="text-align:center;">年龄</md-table-head>
          <md-table-head style="text-align:center;">身高</md-table-head>
          <md-table-head style="text-align:center;">体重</md-table-head>
          <md-table-head style="text-align:center;">BMI</md-table-head>
          <md-table-head style="text-align:center;">血压</md-table-head>
          <md-table-head style="text-align:center;">高血压</md-table-head>
          <md-table-head style="text-align:center;">色盲</md-table-head>
          <md-table-head style="text-align:center;">视力</md-table-head>
          <md-table-head style="text-align:center;">心脏听诊</md-table-head>
          <md-table-head style="text-align:center;">心率</md-table-head>
          <md-table-head style="text-align:center;">肺部</md-table-head>
          <md-table-head style="text-align:center;">肝脾</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row style="text-align:center;" v-for="(row, index) in info_list" :key="index" md-numeric>
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </md-layout>
    </md-layout>
          </md-tab>
        </md-tabs>


  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      info_list: [
        {
          'sex': '男',
          'age': 18,
          'height': 180,
          'weight': 71,
          'BMI': 21.9,
          'blood pressure': '80-110',
          'high blood': '否',
          'color blindness': '正常',
          'vision': '左1.5 右2.0',
          'cardiac auscultation': '正常',
          'heart rate': 82,
          'lung': '正常',
          'liver spleen': '正常'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="hello">
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="85">
        <md-table style="width:100%;">
      <md-table-header>
        <md-table-row>
          <md-table-head style="text-align:center;">学院</md-table-head>
          <md-table-head style="text-align:center;">学号</md-table-head>
          <md-table-head style="text-align:center;">姓名</md-table-head>
          <md-table-head style="text-align:center;">性别</md-table-head>
          <md-table-head style="text-align:center;">年龄</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row style="text-align:center;" v-for="(row, index) in info_list1" :key="index" md-numeric>
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </md-layout>
    </md-layout>
    <div id="form2">
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="85">
        <md-table v-once style="width:100%;margin-top:40px;">
      <md-table-header>
        <md-table-row>
          <md-table-head style="text-align:center;">身高</md-table-head>
          <md-table-head style="text-align:center;">体重</md-table-head>
          <md-table-head style="text-align:center;">BMI</md-table-head>
          <md-table-head style="text-align:center;">血压</md-table-head>
          <md-table-head style="text-align:center;">色盲</md-table-head>
          <md-table-head style="text-align:center;">视力</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row style="text-align:center;" v-for="(row, index) in info_list2" :key="index" md-numeric>
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </md-layout>
    </md-layout>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      info_list1: [
        {
          'college': '计算机学院',
          'card_id': '1512####',
          'name': '###',
          'sex': '男',
          'age': 18
        }
      ],
      info_list2: [
        {
          'height': 180,
          'weight': 71,
          'BMI': 21.9,
          'blood pressure': '80-110',
          'color blindness': '正常',
          'vision': '左1.5 右2.0'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

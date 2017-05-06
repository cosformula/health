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
    <md-layout md-align="center" md-gutter="0">
    <md-list class="form" >
    <md-list-item style="text-align:center;">
      <span>年龄：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>身高：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;180</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>体重：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;71</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>BMI：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.9</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>血压：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80-110</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>色盲：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正常</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-list-item style="text-align:center;">
      <span>视力：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;左1.5 右2.0</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    </md-list>
    </md-layout>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      info_list: [
        {
          'college': '计算机学院',
          'card_id': '1512####',
          'name': '###',
          'sex': '男'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  display: block;
  text-align: center;
}
</style>

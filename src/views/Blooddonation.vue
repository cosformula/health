<template>
  <div class="hello">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head style="text-align:center;">献血地点</md-table-head>
          <md-table-head style="text-align:center;">学院</md-table-head>
          <md-table-head style="text-align:center;">学号</md-table-head>
          <md-table-head style="text-align:center;">姓名</md-table-head>
          <md-table-head style="text-align:center;">性别</md-table-head>
          <md-table-head style="text-align:center;">献血量</md-table-head>
          <md-table-head style="text-align:center;">类型</md-table-head>
          <md-table-head style="text-align:center;">献血次数</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row style="text-align:center;" v-for="(row, index) in blood_list" :key="index" md-numeric>
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      blood_list: [
        {
          'schoolcampus': '延长校区',
          'college': '计算机学院',
          'card_id': '15120000',
          'name': '赵一',
          'sex': '男',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 2
        },
        {
          'schoolcampus': '嘉定校区',
          'college': '计算机学院',
          'card_id': '15121111',
          'name': '赵二',
          'sex': '男',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 1
        },
        {
          'schoolcampus': '宝山校区',
          'college': '计算机学院',
          'card_id': '15122222',
          'name': '赵三',
          'sex': '男',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

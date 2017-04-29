<template>
  <div class="hello">
    <md-table>
      <md-table-header>
        <md-table-row >
          <md-table-head class="table_header" style="text-align:center;">学号</md-table-head>
          <md-table-head class="table_header" style="text-align:center;">姓名</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">性别</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">接种时间</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">接种类型</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">接种次数</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">医生</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">校区</md-table-head>
        </md-table-row>
      </md-table-header>
  
      <md-table-body>
        <md-table-row v-for="(row, index) in info_list" :key="index">
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
      info: {
        'card_id': 'xxxxxxxx',
        'name': 'xxx',
        'sex': '男',
        'RecordTime': 'xxxx/xx/xx',
        'VaccineName': '乙肝疫苗',
        'VaccineTime': '第一次接种',
        'doctor': 'xxx',
        'campues': '宝山校区'
      },
      info_list: [{
        'card_id': 'xxxxxxxx',
        'name': 'xxx',
        'sex': '男',
        'RecordTime': 'xxxx/xx/xx',
        'VaccineName': '乙肝疫苗',
        'VaccineTime': '第一次接种',
        'doctor': 'xxx',
        'campues': '宝山校区'
      },
      {
        'card_id': 'xxxxxxxx',
        'name': 'xxx',
        'sex': '男',
        'RecordTime': 'xxxx/xx/xx',
        'VaccineName': '乙肝疫苗',
        'VaccineTime': '第一次接种',
        'doctor': 'xxx',
        'campues': '宝山校区'
      },
      {
        'card_id': 'xxxxxxxx',
        'name': 'xxx',
        'sex': '男',
        'RecordTime': 'xxxx/xx/xx',
        'VaccineName': '乙肝疫苗',
        'VaccineTime': '第一次接种',
        'doctor': 'xxx',
        'campues': '宝山校区'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="hello">
    <h3 style="text-align:center;">  </h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
          <md-table-header>
            <md-table-row>
              <md-table-head md-numeric class="table_header" style="text-align:center;">接种时间</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">接种地点</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">接种类型</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">接种次数</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">医生</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">疫苗来源</md-table-head>
            </md-table-row>
          </md-table-header>
  
          <md-table-body>
            <md-table-row v-for="(row, index) in info_list" :key="index">
              <md-table-cell style="text-align:center;" md-numeric>{{row.RecordTime.$date}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.SchoolCampus}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Drugs.ViccineName}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Drugs.ViccineTime}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Doctor}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Medical_laboratory}}</md-table-cell>
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
      info_list: [{
        '_id': {
          '$oid': '53480f7bb218450eb050c164'
        },
        'Doctor': '寇丽茹',
        'Drugs': {
          'ID': 5,
          'ViccineName': '麻风疫苗',
          'ViccineTime': '第一次接种',
          'Cost': -1,
          'Number': '',
          'Producer': ''
        },
        'ID': 5,
        'InputUser': null,
        'Medical_laboratory': '祁连社区卫生服务中心',
        'No_vaccine_reason': '',
        'Others': '',
        'RecordTime': {
          '$date': '2013-09-23T16:22:20.670Z'
        },
        'RecordType': '计划内',
        'SchoolCampus': '宝山校区',
        'Tag': '疫苗接种',
        'UserName': '13720757',
        'Vaccine_flag': '已接种',
        'user': {
          'BirthDate': null,
          'Gender': '',
          'College': '法学院',
          'StudentType': '',
          'SchoolData': null,
          'FullName': '黄洁',
          'IDNumber': null,
          'ImgUrl': null,
          'Race': '',
          'Original': '',
          'UserName': '13720757',
          '_id': {
            '$oid': '000000000000000000000000'
          }
        }
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="hello">
    <h3 style="text-align:center;">  </h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
          <md-table-header>
            <md-table-row>
              <md-table-head md-numeric class="table_header" style="text-align:center;">病因</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">病假起始日期</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">病假截止日期</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">病假时长</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">医生</md-table-head>
              <md-table-head md-numeric class="table_header" style="text-align:center;">校区</md-table-head>
            </md-table-row>
          </md-table-header>
  
          <md-table-body>
            <md-table-row v-for="(row, index) in info_list" :key="index">
              <md-table-cell style="text-align:center;" md-numeric>{{row.TSQK}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.StartTime.$date}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.EndTime.$date}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Days}}天</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.Doctor}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.SchoolCampus}}</md-table-cell>
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
          '$oid': '53481d4db218451134c250cc'
        },
        'RecordTime': {
          '$date': '2014-04-10T00:00:00.000Z'
        },
        'ID': 5,
        'Tag': '病假',
        'UserName': '12120715',
        'InputUser': null,
        'RecordType': null,
        'SchoolCampus': '宝山校区',
        'user': {
          'BirthDate': null,
          'Gender': '男',
          'College': '材料科学与工程学院',
          'StudentType': '',
          'SchoolData': null,
          'FullName': '徐小波',
          'IDNumber': null,
          'ImgUrl': null,
          'Race': '',
          'Original': '',
          'UserName': '12120715',
          '_id': {
            '$oid': '000000000000000000000000'
          }
        },
        'Reason': '',
        'StartTime': {
          '$date': '2014-04-09T16:00:00.000Z'
        },
        'EndTime': {
          '$date': '2014-04-11T15:59:59.000Z'
        },
        'Others': '',
        'KSSXW': null,
        'JSSXW': null,
        'TSQK': '化脓性扁桃体炎\r\n高热',
        'Departdent': '上海大学校医院',
        'FullName': '徐小波',
        'Doctor': '黄婷',
        'Days': 1
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

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
          <md-table-cell style="text-align:center;" md-numeric>{{row.user.College}}</md-table-cell>
          <md-table-cell style="text-align:center;" md-numeric>{{row.user.UserName}}</md-table-cell>
          <md-table-cell style="text-align:center;" md-numeric>{{row.user.FullName}}</md-table-cell>
          <md-table-cell style="text-align:center;" md-numeric>{{row.user.Gender}}</md-table-cell>
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
      info_list: [
        {
          '_id': {
            '$oid': '534eb7f5b2184511f43c6952'
          },
          'RecordTime': {
            '$date': '2009-08-22T03:56:55.640Z'
          },
          'ID': 53326,
          'Tag': '入校/毕业体检',
          'UserName': '09124406',
          'InputUser': null,
          'RecordType': '入学体检',
          'SchoolCampus': '宝山校区',
          'user': {
            'BirthDate': null,
            'Gender': '男',
            'College': '外国语学院',
            'StudentType': '',
            'SchoolData': null,
            'FullName': '丁红彬',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': '',
            'Original': '',
            'UserName': '09124406',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'pe_time': {
            '$date': '2009-08-22T03:56:55.640Z'
          },
          'height': 169,
          'weight': 60,
          'high_blood': 110,
          'low_blood': 80,
          'color_discrimination': '正常',
          'BMI': 21,
          'sight_left': 1,
          'sight_right': 0.8,
          'is_high_blood': '否',
          'eyesight_left': 1,
          'eyesight_right': 0.8,
          'corrected_vision_left': 0,
          'corrected_vision_right': 0,
          'skin_limbs': '正常',
          'cardiac_auscultation': '正常',
          'heart_rate': 70,
          'lung': '正常',
          'liver_spleen': '正常',
          'ALT': 1,
          'filaria_quarantine': null,
          'schistosome_quarantine': null,
          'plasmodium_quarantine': null,
          'chest_radiography': null,
          'conclusion': null,
          'signature': null,
          'pe_order': 1,
          'height_doctor': '周存贵',
          'weight_doctor': '周存贵',
          'low_blood_doctor': '陆蘋',
          'high_blood_doctor': '陆蘋',
          'color_discrimination_doctor': '许玉洁',
          'eyesight_left_doctor': '苏江涛',
          'eyesight_right_doctor': '苏江涛',
          'corrected_vision_left_doctor': '苏江涛',
          'corrected_vision_right_doctor': '苏江涛',
          'skin_limbs_doctor': '刘德发',
          'cardiac_auscultation_doctor': '姚正余',
          'heart_rate_doctor': '姚正余',
          'lung_doctor': '姚正余',
          'liver_spleen_doctor': '刘德发',
          'filaria_quarantine_doctor': null,
          'schistosome_quarantine_doctor': null,
          'plasmodium_quarantine_doctor': null,
          'ALT_doctor': '王妤',
          'chest_radiography_doctor': null,
          'ReCheck': 1
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

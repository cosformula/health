<template>
  <div class="hello">
    <h3 style="text-align:center;"> </h3>
    <md-layout md-align="center"
               md-gutter="0">
      <md-layout md-flex-large="75"
                 md-flex-xlarge="75"
                 md-flex-xsmall="100"
                 md-flex-small="100"
                 md-flex-medium="80">
        <md-table style="width:100%;margin-left:auto;margin-right:auto;">
          <md-table-header>
            <md-table-head md-numeric
                           class="table_header"
                           style="text-align:center;">转诊时间</md-table-head>
           <md-table-head style="text-align:center;">转诊期限</md-table-head>
           <md-table-head style="text-align:center;">病因</md-table-head>
           <md-table-head style="text-align:center;">转至</md-table-head>
           <md-table-head style="text-align:center;">科室</md-table-head>
           <md-table-head style="text-align:center;">医生</md-table-head>
          </md-table-header>
          <md-table-body v-for="(row, index) in info_list"
                         :key="index"
                         md-numeric>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.RecordTime.$date}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.Transfer_timelimit}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.Disease}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.Transfer_hospital}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.Transfer_medical_laboratory}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.Doctor}}</md-table-cell>
          </md-table-body>
        </md-table>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      info_list: [
        {
          '_id': {
            '$oid': '5347a85ab2184503c48e8458'
          },
          'RecordTime': {
            '$date': '2014-04-11T16:33:00.000Z'
          },
          'ID': 1,
          'Tag': '转诊',
          'UserName': '13720945',
          'InputUser': null,
          'RecordType': null,
          'SchoolCampus': '宝山校区',
          'user': {
            'BirthDate': null,
            'Gender': '',
            'College': '通信与信息工程学院',
            'StudentType': '',
            'SchoolData': null,
            'FullName': '徐慧敏',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': '',
            'Original': '',
            'UserName': '13720945',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'Medical_laboratory': '',
          'Doctor': '朱雯怡',
          'Disease': '鸡眼',
          'Transfer_hospital': '第十人民医院',
          'Transfer_medical_laboratory': '皮肤科',
          'Transfer_timelimit': '7天1次',
          'Others': ''
        }]
    }
  },
  created: function () {
    this.getInfo()
  },
  activated: function () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/transfer-visit.php')
        .then((response) => {
          console.log(response.data)
          this.info_list = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

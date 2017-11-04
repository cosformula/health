<template>
  <div >
    <table class="table table-striped">
      <thead>
        <tr>
          <th style="text-align:center;font-size:20px">转诊时间</th>
          <th style="text-align:center;font-size:20px">转诊期限</th>
          <th style="text-align:center;font-size:20px">病因</th>
          <th style="text-align:center;font-size:20px">转至</th>
          <th style="text-align:center;font-size:20px">科室</th>
          <th style="text-align:center;font-size:20px">医生</th>
        </tr>
      </thead>
      <tbody style="text-align:center">
        <tr>
          <td>2015年06月05日</td>
          <td>7天一次</td>
          <td>口腔溃疡</td>
          <td>上海市中山医院}</td>
          <td>口腔科</td>
          <td>卢本伟</td>
        </tr>
      </tbody>
    </table>
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

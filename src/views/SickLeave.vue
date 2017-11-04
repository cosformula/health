<template>
  <div >
    <table class="table table-striped">
      <thead>
        <tr>
          <th>部门</th>
          <th>开始时间</th>
          <th>结束时间</th>
          <th>理由</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(row, index) in info_list" :key="index">
          <td>{{row.Departdent}}</td>
          <td>{{row.StartTime.$date}}</td>
          <td>{{row.EndTime.$date}}</td>
          <td>{{row.Reason}}</td>
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
  },
  created () {
    this.getInfo()
  },
  filters: {
    date: function (val) {
      var d = new Date(val * 1000)
      return `${d.getFullYear()}/${d.getMonth()}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
    }
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/sick-leave.php')
        .then((response) => {
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

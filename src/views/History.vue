<template>
  <div >
    <v-tabs dark fixed centered>
      <v-tabs-bar class="cyan">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item href="'#tab-3">慢性病</v-tabs-item>
        <v-tabs-item href="'#tab-4">传染病</v-tabs-item>
        <v-tabs-item href="'#tab-5">重大疾病</v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content id="'tab-3">
          <v-card flat>
            <div class="form1"
            style="text-align:center;">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>地点</td>
                  <td>浙江杭州</td>
                </tr>
                <tr>
                  <td>时间</td>
                  <td>2014年5月</td>
                </tr>
                <tr>
                  <td>医生</td>
                  <td>刘爱国</td>
                </tr>
                <tr>
                  <td>疾病</td>
                  <td>肺部感染</td>
                </tr>
                <tr>
                  <td>治疗医院</td>
                  <td>杭州市第一人民医院</td>
                </tr>
              </tbody>
            </table>
            </div>
          </v-card>
        </v-tabs-content>
        <v-tabs-content id="'tab-4">
          <v-card flat>
            <div class="form1"
            style="text-align:center;">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>地点</td>
                  <td>浙江杭州</td>
                </tr>
                <tr>
                  <td>时间</td>
                  <td>2014年5月</td>
                </tr>
                <tr>
                  <td>医生</td>
                  <td>刘爱国</td>
                </tr>
                <tr>
                  <td>疾病</td>
                  <td>肺部感染</td>
                </tr>
                <tr>
                  <td>治疗医院</td>
                  <td>杭州市第一人民医院</td>
                </tr>
              </tbody>
            </table>
            </div>
          </v-card>
        </v-tabs-content>
        <v-tabs-content id="'tab-5">
          <v-card flat>
            <div class="form1"
            style="text-align:center;">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>地点</td>
                  <td>浙江杭州</td>
                </tr>
                <tr>
                  <td>时间</td>
                  <td>2014年5月</td>
                </tr>
                <tr>
                  <td>医生</td>
                  <td>刘爱国</td>
                </tr>
                <tr>
                  <td>疾病</td>
                  <td>肺部感染</td>
                </tr>
                <tr>
                  <td>治疗医院</td>
                  <td>杭州市第一人民医院</td>
                </tr>
              </tbody>
            </table>
            </div>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      chronic_list: [
        {
          '_id': {
            '$oid': '534b99c7b218450d644ef05e'
          },
          'RecordTime': {
            '$date': '2014-04-14T15:04:33.680Z'
          },
          'ID': 43,
          'Tag': '慢性病',
          'UserName': '12722390',
          'InputUser': null,
          'RecordType': null,
          'SchoolCampus': '延长校区',
          'user': {
            'BirthDate': null,
            'Gender': '',
            'College': '土木工程系',
            'StudentType': '',
            'SchoolData': null,
            'FullName': '吴嘉岭',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': '',
            'Original': '',
            'UserName': '12722390',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'Date': {
            '$date': '2014-04-14T15:04:33.680Z'
          },
          'Disease': '甲亢',
          'Others': '备注为空',
          'Medical_laboratory': '上海大学校医院',
          'Doctor': '寇丽茹',
          'FRecord': []
        }
      ],
      contagion_list: [
        {
          '_id': {
            '$oid': '534f74dcb218451868b958d7'
          },
          'RecordTime': {
            '$date': '2014-04-17T08:23:17.893Z'
          },
          'ID': 60,
          'Tag': '传染病',
          'UserName': '12122011',
          'InputUser': null,
          'RecordType': null,
          'SchoolCampus': '宝山校区',
          'user': {
            'BirthDate': null,
            'Gender': '',
            'College': '机电工程与自动化学院',
            'StudentType': '',
            'SchoolData': null,
            'FullName': '汪静舟',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': null,
            'Original': null,
            'UserName': '12122011',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'register_time': {
            '$date': '2014-01-17T00:00:00.000Z'
          },
          'disease': '肺结核',
          'hospital': '',
          'FRecord': [],
          'separate': '否',
          'separate_place': null,
          'is_absence': '是',
          'is_back': '否',
          'back_time': null
        }
      ],
      serious_list: [
        {
          '_id': {
            '$oid': '534f931cb21845176c9169cb'
          },
          'RecordTime': {
            '$date': '2014-04-14T15:00:01.130Z'
          },
          'ID': 4,
          'Tag': '门诊大病',
          'UserName': '09124258',
          'InputUser': '朱晓玉',
          'RecordType': null,
          'SchoolCampus': '延长校区',
          'user': {
            'BirthDate': null,
            'Gender': '',
            'College': '土木工程系',
            'StudentType': '',
            'SchoolData': null,
            'FullName': '周胤',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': null,
            'Original': null,
            'UserName': '09124258',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'CheckHospital': '第十人民医院',
          'SeriousDiseaseName': '淋巴瘤',
          'Contacts': '',
          'ContactsNumber': '',
          'CheckDate': {
            '$date': '2014-04-08T00:00:00.000Z'
          },
          'ToDate': {
            '$date': '2014-10-08T00:00:00.000Z'
          },
          'HealMeasure': '化疗、',
          'SeriousDiseaseOthers': ''
        }
      ]
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
      this.$http.get('/api/v1/chronic.php')
        .then((response) => {
          console.log(response.data)
          this.chronic_list = response.data
        })
        .catch((err) => {
          console.log(err)
        })
      this.$http.get('/api/v1/contagion.php')
        .then((response) => {
          console.log(response.data)
          this.contagion_list = response.data
        })
        .catch((err) => {
          console.log(err)
        })
      this.$http.get('/api/v1/serious-disease.php')
        .then((response) => {
          console.log(response.data)
          this.serious_list = response.data
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

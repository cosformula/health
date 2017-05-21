<template>
  <div class="hello">
    <md-tabs md-fixed>
      <md-tab id="疾病1"
              md-label="慢性病">
        <md-layout md-align="center"
                   md-gutter="0">
          <md-layout md-flex-large="75"
                     md-flex-xlarge="75"
                     md-flex-xsmall="100"
                     md-flex-small="100"
                     md-flex-medium="80">
            <md-table style="width:100%;margin-left:auto;margin-right:auto;">
              <md-table-header>
              </md-table-header>

              <md-table-body>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in chronic_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">地点</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.SchoolCampus}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in chronic_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">时间</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.RecordTime}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in chronic_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">医生</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.Doctor}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in chronic_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">疾病</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.Disease}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in chronic_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">治疗医院</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.Medical_laboratory}}</md-table-cell>
                </md-table-row>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-layout>
        </md-layout>
      </md-tab>

      <md-tab id="疾病2"
              md-label="传染病">
        <md-layout md-align="center"
                   md-gutter="0">
          <md-layout md-flex-large="85"
                     md-flex-xlarge="85"
                     md-flex-xsmall="100"
                     md-flex-small="100"
                     md-flex-medium="80">
            <md-table style="width:80%;margin-left:auto;margin-right:auto;">

              <md-table-body>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">地点</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.SchoolCampus}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">时间</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.RecordTime.$date}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">医生</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.doctor}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">疾病</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.disease}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">治疗医院</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.hospital}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">隔离</md-table-head>
                  <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head md-numeric
                                       style="text-align:center;">是否隔离</md-table-head>
                        <md-table-head md-numeric
                                       style="text-align:center;">隔离地点</md-table-head>
                      </md-table-row>
                    </md-table-header>
                    <md-table-body>
                      <md-table-row style="text-align:center;"
                                    v-for="(row, index) in contagion_list"
                                    :key="index"
                                    md-numeric>
                        <md-table-cell style="text-align:center;"
                                       md-numeric>{{row.separate}}</md-table-cell>
                        <md-table-cell style="text-align:center;"
                                       md-numeric>{{row.separate_place}}</md-table-cell>
                      </md-table-row>
                    </md-table-body>
                  </md-table>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in contagion_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">离返校</md-table-head>
                  <md-table>
                    <md-table-header>
                      <md-table-row>
                        <md-table-head md-numeric
                                       style="text-align:center;">是否离校</md-table-head>
                        <md-table-head md-numeric
                                       style="text-align:center;">是否返校</md-table-head>
                        <md-table-head md-numeric
                                       style="text-align:center;">返校时间</md-table-head>
                      </md-table-row>
                    </md-table-header>
                    <md-table-body>
                      <md-table-row style="text-align:center;"
                                    v-for="(row, index) in contagion_list"
                                    :key="index"
                                    md-numeric>
                        <md-table-cell style="text-align:center;"
                                       md-numeric>{{row.is_absence}}</md-table-cell>
                        <md-table-cell style="text-align:center;"
                                       md-numeric>{{row.is_back}}</md-table-cell>
                        <md-table-cell style="text-align:center;"
                                       md-numeric>{{row.back_time}}</md-table-cell>
                      </md-table-row>
                    </md-table-body>
                  </md-table>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-layout>
        </md-layout>
      </md-tab>
      <md-tab id="疾病3"
              md-label="重大疾病">
        <md-layout md-align="center"
                   md-gutter="0">
          <md-layout md-flex-large="85"
                     md-flex-xlarge="85"
                     md-flex-xsmall="100"
                     md-flex-small="100"
                     md-flex-medium="80">
            <md-table style="width:80%;margin-left:auto;margin-right:auto;">

              <md-table-body>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">地点</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.SchoolCampus}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">查出时间</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.CheckDate}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">治疗结束时间</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.ToDate}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">疾病</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.SeriousDiseaseName}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">检查医院</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.CheckHospital}}</md-table-cell>
                </md-table-row>
                <md-table-row style="text-align:center;"
                              v-for="(row, index) in serious_list"
                              :key="index"
                              md-numeric>
                  <md-table-head style="text-align:center;">治疗措施</md-table-head>
                  <md-table-cell style="text-align:center;"
                                 md-numeric>{{row.HealMeasure}}</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-layout>
        </md-layout>
      </md-tab>
    </md-tabs>

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

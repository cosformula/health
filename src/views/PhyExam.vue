<template>
  <div >
    <v-tabs dark fixed centered>
      <v-tabs-bar class="cyan">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item href="'#tab-1">入学体检</v-tabs-item>
        <v-tabs-item href="'#tab-2">毕业体检</v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content id="'tab-1">
          <v-card flat>
            <div class="form1"
            style="text-align:center;">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align:center;font-size:20px">项目</th>
                  <th style="text-align:center;font-size:20px">成绩</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>身高/厘米</td>
                  <td>{{exam_list1[0].height}}</td>
                </tr>
                <tr>
                  <td>体重/千克</td>
                  <td>{{exam_list1[0].weight}}</td>
                </tr>
                <tr>
                  <td>BMI(体质指数)</td>
                  <td>{{exam_list1[0].BMI}}</td>
                </tr>
                <tr>
                  <td>血压(高/低)/帕</td>
                  <td>{{exam_list1[0].high_blood}}/{{exam_list1[0].low_blood}}</td>
                </tr>

                <tr>
                  <td>色盲</td>
                  <td>{{exam_list1[0].color_discrimination}}</td>
                </tr>
                <tr>
                  <td>视力(左/右)</td>
                  <td>{{exam_list1[0].eyesight_left}}/{{exam_list1[0].eyesight_right}}</td>
                </tr>
                <tr>
                  <td>心脏听诊</td>
                  <td>{{exam_list1[0].cardiac_auscultation}}</td>
                </tr>
                <tr>
                  <td>心率(次/秒)</td>
                  <td>{{exam_list1[0].heart_rate}}</td>
                </tr>
                <tr>
                  <td>肺活量</td>
                  <td>{{exam_list1[0].lung}}</td>
                </tr>
                <tr>
                  <td>肝脾</td>
                  <td>{{exam_list1[0].liver_spleen}}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </v-card>
        </v-tabs-content>
        <v-tabs-content id="'tab-2">
          <v-card flat>
            <div class="form1"
            style="text-align:center;">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align:center;font-size:20px">项目</th>
                  <th style="text-align:center;font-size:20px">成绩</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>身高/厘米</td>
                  <td>{{exam_list2[0].height}}</td>
                </tr>
                <tr>
                  <td>体重/千克</td>
                  <td>{{exam_list2[0].weight}}</td>
                </tr>
                <tr>
                  <td>BMI(体质指数)</td>
                  <td>{{exam_list2[0].BMI}}</td>
                </tr>
                <tr>
                  <td>血压(高/低)/帕</td>
                  <td>{{exam_list2[0].high_blood}}/{{exam_list2[0].low_blood}}</td>
                </tr>

                <tr>
                  <td>色盲</td>
                  <td>{{exam_list2[0].color_discrimination}}</td>
                </tr>
                <tr>
                  <td>视力(左/右)</td>
                  <td>{{exam_list2[0].eyesight_left}}/{{exam_list2[0].eyesight_right}}</td>
                </tr>
                <tr>
                  <td>心脏听诊</td>
                  <td>{{exam_list2[0].cardiac_auscultation}}</td>
                </tr>
                <tr>
                  <td>心率(次/秒)</td>
                  <td>{{exam_list2[0].heart_rate}}</td>
                </tr>
                <tr>
                  <td>肺活量</td>
                  <td>{{exam_list2[0].lung}}</td>
                </tr>
                <tr>
                  <td>肝脾</td>
                  <td>{{exam_list2[0].liver_spleen}}</td>
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
      exam_list1: [
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
      ],
      exam_list2: [
        {
          'height': 180,
          'weight': 71,
          'BMI': 21.9,
          'blood pressure_hign': '110',
          'blood pressure_low': '80',
          'high blood': '否',
          'color blindness': '正常',
          'vision_left': '1.5',
          'vision_right': '2.0',
          'cardiac auscultation': '正常',
          'heart rate': 82,
          'lung': '正常',
          'liver spleen': '正常'
        }
      ]
    }
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/phy-exam.php')
        .then((response) => {
          this.chronic_list = response.data
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
.form1 {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>

<template>
  <div class="hello">
    <md-tabs md-fixed>
      <md-tab id="体检1" md-label="入学体检">
        <md-layout md-align="center" md-gutter="0">
          <md-layout md-flex-large="70" md-flex-xlarge="70" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="85">
<div class="form1" style="text-align:center;">
<md-table  v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head></md-table-head>
      <md-table-head md-numeric style="text-align:center;">我的</md-table-head>
      <md-table-head md-numeric>正常参考值</md-table-head>
      <md-table-head md-numeric>百分比</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
     <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>身高/厘米</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.height}}</md-table-cell>
      </md-table-row>
       <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>体重/千克</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.weight}}</md-table-cell>
      </md-table-row>
      <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>BMI(体质指数)</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.BMI}}</md-table-cell>
      </md-table-row>
       <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
         <md-table-head>血压(高/低)/帕</md-table-head>
         <md-table-cell style="text-align:center;" md-numeric>{{row.high_blood}}{{'/'}}{{row.low_blood}}</md-table-cell>
         <!-- <md-table-cell style="text-align:center;" md-numeric>{{row.low_blood}}</md-table-cell>
         <md-table-cell style="text-align:center;" md-numeric>{{row.is_high_blood}}</md-table-cell> -->
      </md-table-row>
       <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>色盲</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.color_discrimination}}</md-table-cell>
      </md-table-row>
        <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
        <md-table-head>视力(左/右)</md-table-head>
          <md-table-cell style="text-align:center;" md-numeric>{{row.eyesight_left}}{{'/'}}{{row.eyesight_right}}</md-table-cell>
      </md-table-row>
      <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>心脏听诊</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.cardiac_auscultation}}</md-table-cell>
      </md-table-row>
       <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>心率(次/秒)</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.heart_rate}}</md-table-cell>
      </md-table-row>
      <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>肺部</md-table-head>
      <md-table-cell style="text-align:center;" md-numeric>{{row.lung}}</md-table-cell>
      </md-table-row>
       <md-table-row style="text-align:center;" v-for="(row, index) in exam_list1" :key="index" md-numeric>
      <md-table-head>肝脾</md-table-head>
         <md-table-cell style="text-align:center;" md-numeric>{{row.liver_spleen}}</md-table-cell>
      </md-table-row>
  </md-table-body>
</md-table>
</div>
          </md-layout>
        </md-layout>
      </md-tab>
      <md-tab id="体检2" md-label="毕业体检">
        <md-layout md-align="center" md-gutter="0">
          <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="85">
            <md-table style="width:100%;">
              <md-table-header>
                <md-table-row>
                  <md-table-head style="text-align:center;">身高</md-table-head>
                  <md-table-head style="text-align:center;">体重</md-table-head>
                  <md-table-head style="text-align:center;">BMI</md-table-head>
                  <md-table-head style="text-align:center;">血压hign</md-table-head>
                  <md-table-head style="text-align:center;">血压low</md-table-head>
                  <md-table-head style="text-align:center;">高血压</md-table-head>
                  <md-table-head style="text-align:center;">色盲</md-table-head>
                  <md-table-head style="text-align:center;">视力left</md-table-head>
                  <md-table-head style="text-align:center;">视力right</md-table-head>
                  <md-table-head style="text-align:center;">心脏听诊</md-table-head>
                  <md-table-head style="text-align:center;">心率</md-table-head>
                  <md-table-head style="text-align:center;">肺部</md-table-head>
                  <md-table-head style="text-align:center;">肝脾</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in exam_list2" :key="index" md-numeric>
                  <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
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
  data() {
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
.form1{
  margin-left:auto;
  margin-right:auto;
  width:100%;
}
</style>

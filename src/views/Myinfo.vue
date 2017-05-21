<template>
  <div class="hello">
    <md-layout md-align="center"
               md-gutter="0">
      <md-layout md-flex-large="90"
                 md-flex-xlarge="90"
                 md-flex-xsmall="85"
                 md-flex-small="85"
                 md-flex-medium="85">
        <div class="form1"
             style="width=300px">
          <md-card md-with-hover
                   style="width:100%;margin-top:35px;">
            <md-card-header v-for="(row, index) in info_list"
                            :key="index"
                            md-numeric>
              <div class="md-title"
                   style="text-align:center;">上海大学</div>
              <div class="md-head"
                   style="text-align:center;size:200px;">
                <h3 md-numeric>{{row.user.College}}</h3>
              </div>
            </md-card-header>

            <md-card-media>
              <img src="http://pic01.taopic.com/161225/240391-16122509533420-lp.jpg"
                   alt="health"
                   style="position:static;">
            </md-card-media>

            <md-card-content style="text-align:center;"
                             v-for="(row, index) in info_list"
                             :key="index"
                             md-numeric>
              <h3 md-numeric>{{row.user.FullName}}</h3>
            </md-card-content>
            <div class="form2"
                 style="text-align:center;">
              <md-card-actions style="text-align:center;"
                               v-for="(row, index) in info_list"
                               :key="index"
                               md-numeric>
                <md-button style="text-align:center;"
                           md-numeric>{{row.user.UserName}}</md-button>
                <md-button style="text-align:center;"
                           md-numeric>{{row.user.Gender}}</md-button>
              </md-card-actions>
            </div>
          </md-card>
        </div>
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
  },
  created: function () {
    this.getInfo()
  },
  activated: function () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/phy-exam.php')
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
.form1 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.form2 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>

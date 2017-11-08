<template>
  <v-container grid-list-xs text-xs-center class="px-4" style="padding:0;" fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-btn flat dark large block>入学体检</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn flat dark large block>毕业体检</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-shengao</v-icon>身高</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].height}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-tizhong</v-icon>体重</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].weight}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-bmi</v-icon>BMI</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].BMI}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-xieya</v-icon>血压 高/低</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].high_blood}}/{{exam_list1[0].low_blood}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-semang</v-icon>色盲</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].color_discrimination}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-shili</v-icon>视力 左/右</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].eyesight_left}}/{{exam_list1[0].eyesight_right}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-tijian</v-icon>心脏听诊</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].cardiac_auscultation}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-xinshuai</v-icon>心率</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].heart_rate}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-iconfhl</v-icon>肺活量</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].lung}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
        <v-card flat hover ripple>
          <v-card-title class="card_title">
            <v-icon>iconfont-gandanpiyishen</v-icon>肝脾</v-card-title>
          <v-card-text class="px-0 value">{{exam_list1[0].liver_spleen}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      exam: [
        { name: 'height', value: '' },
        { name: 'weight', value: '' },
        { name: 'BMI', value: '' },
        { name: 'blood pressure_hign', value: '' },
        { name: 'blood pressure_low', value: '' },
        { name: 'high blood', value: '' },
        { name: 'color blindness', value: '' },
        { name: 'vision_left', value: '' },
        { name: 'vision_right', value: '' },
        { name: 'cardiac auscultation', value: '' },
        { name: 'heart rate', value: '' },
        { name: 'lung', value: '' },
        { name: 'liver spleen', value: '' }
      ],
      exam_list1: [
        {
          _id: {
            $oid: '534eb7f5b2184511f43c6952'
          },
          RecordTime: {
            $date: '2009-08-22T03:56:55.640Z'
          },
          ID: 53326,
          Tag: '入校/毕业体检',
          UserName: '09124406',
          InputUser: null,
          RecordType: '入学体检',
          SchoolCampus: '宝山校区',
          user: {
            BirthDate: null,
            Gender: '男',
            College: '外国语学院',
            StudentType: '',
            SchoolData: null,
            FullName: '丁红彬',
            IDNumber: null,
            ImgUrl: null,
            Race: '',
            Original: '',
            UserName: '09124406',
            _id: {
              $oid: '000000000000000000000000'
            }
          },
          pe_time: {
            $date: '2009-08-22T03:56:55.640Z'
          },
          height: 169,
          weight: 60,
          high_blood: 110,
          low_blood: 80,
          color_discrimination: '正常',
          BMI: 21,
          sight_left: 1,
          sight_right: 0.8,
          is_high_blood: '否',
          eyesight_left: 1,
          eyesight_right: 0.8,
          corrected_vision_left: 0,
          corrected_vision_right: 0,
          skin_limbs: '正常',
          cardiac_auscultation: '正常',
          heart_rate: 70,
          lung: '正常',
          liver_spleen: '正常',
          ALT: 1,
          filaria_quarantine: null,
          schistosome_quarantine: null,
          plasmodium_quarantine: null,
          chest_radiography: null,
          conclusion: null,
          signature: null,
          pe_order: 1,
          height_doctor: '周存贵',
          weight_doctor: '周存贵',
          low_blood_doctor: '陆蘋',
          high_blood_doctor: '陆蘋',
          color_discrimination_doctor: '许玉洁',
          eyesight_left_doctor: '苏江涛',
          eyesight_right_doctor: '苏江涛',
          corrected_vision_left_doctor: '苏江涛',
          corrected_vision_right_doctor: '苏江涛',
          skin_limbs_doctor: '刘德发',
          cardiac_auscultation_doctor: '姚正余',
          heart_rate_doctor: '姚正余',
          lung_doctor: '姚正余',
          liver_spleen_doctor: '刘德发',
          filaria_quarantine_doctor: null,
          schistosome_quarantine_doctor: null,
          plasmodium_quarantine_doctor: null,
          ALT_doctor: '王妤',
          chest_radiography_doctor: null,
          ReCheck: 1
        }
      ],
      exam_list2: [
        {
          height: 180,
          weight: 71,
          BMI: 21.9,
          'blood pressure_hign': '110',
          'blood pressure_low': '80',
          'high blood': '否',
          'color blindness': '正常',
          vision_left: '1.5',
          vision_right: '2.0',
          'cardiac auscultation': '正常',
          'heart rate': 82,
          lung: '正常',
          'liver spleen': '正常'
        }
      ]
    }
  },
  methods: {
    getInfo() {
      this.$http
        .get('/api/v1/phy-exam.php')
        .then(response => {
          this.chronic_list = response.data
        })
        .catch(err => {
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
.value {
  font-size: 2rem;
  color: gray;
}
.card_title {
  font-size: 1.2rem;
  /* color:gray; */
}
</style>

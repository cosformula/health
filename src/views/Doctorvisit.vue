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
          </md-table-header>

          <md-table-body>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">就诊地点</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>{{row.SchoolCampus}}</md-table-cell>
            </md-table-row>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">就诊时间</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>{{row.RecordTime.$date}}</md-table-cell>
            </md-table-row>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">就诊科</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>{{row.department}}</md-table-cell>
            </md-table-row>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">就诊医生</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>{{row.doctor}}</md-table-cell>
            </md-table-row>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">总费用/实际费用</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>{{row.total_fees}}/{{row.real_fees}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric></md-table-cell>
            </md-table-row>
            <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list" :key="index" md-numeric>
              <md-table-head style="text-align:center;">查看详情</md-table-head>
              <md-table-cell style="text-align:center;" md-numeric>
                <md-button class="md-raised" @click.native="openDialog('dialog1', index)" style="width:60%;">病状</md-button>
                <md-button class="md-raised" @click.native="openDialog('dialog2', index)" style="width:60%;">处方</md-button>
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>


      </md-layout>
    </md-layout>
    <md-dialog md-open-from="#custom"
               md-close-to="#custom"
               ref="dialog1">
      <md-dialog-title style="text-align:center;">病状详情</md-dialog-title>

      <md-dialog-content>
        <md-table style="width:100%;margin-top:20px;">
          <md-table-body>
            <md-table-row>
              <md-table-cell style="text-align:center;">病症陈述</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.chief_complaint}}</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell style="text-align:center;">询问症状</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.now_history}}</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell style="text-align:center;">临床表现</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.pysical_exam}}</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell style="text-align:center;">体温</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.body_temperature}}</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell style="text-align:center;">初步诊断</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.initial_diagnosis}}</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell style="text-align:center;">取药负责人</md-table-cell>
              <md-table-head style="text-align:center;"
                             md-numeric>{{current_item.doctor}}</md-table-head>
            </md-table-row>

          </md-table-body>
        </md-table>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary"
                   @click.native="closeDialog('dialog1')">确认</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog md-open-from="#custom"
               md-close-to="#custom"
               ref="dialog2">
      <md-dialog-title>药物处方详情</md-dialog-title>

      <md-dialog-content>
        <md-table style="width:100%;margin-top:20px;">
          <md-table-header>
            <md-table-row>
              <md-table-head style="text-align:center;">药物处方</md-table-head>
              <md-table-head style="text-align:center;">服用方法</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-cell style="text-align:center;"
                           md-numeric>{{current_item.medical_name}}</md-table-cell>
            <md-table-cell style="text-align:center;"
                           md-numeric>{{current_item.method}}</md-table-cell>
          </md-table-body>
        </md-table>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary"
                   @click.native="closeDialog('dialog2')">确认</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      current_item: {},
      doctor_list: [
        {
          '_id': {
            '$oid': '5347b938b218450e74fbcbb7'
          },
          'RecordTime': {
            '$date': '2014-04-11T17:48:37.000Z'
          },
          'ID': 14,
          'Tag': '校内门急诊',
          'UserName': 'zf641',
          'InputUser': null,
          'RecordType': null,
          'SchoolCampus': '宝山校区',
          'user': {
            'BirthDate': null,
            'Gender': '',
            'College': null,
            'StudentType': '',
            'SchoolData': null,
            'FullName': 'feidtest',
            'IDNumber': null,
            'ImgUrl': null,
            'Race': null,
            'Original': null,
            'UserName': 'zf641',
            '_id': {
              '$oid': '000000000000000000000000'
            }
          },
          'regid': 255253,
          'registration': {
            '_id': 50542,
            'user_id': 'zf641',
            'date': {
              '$date': '2014-04-11T09:12:14.980Z'
            },
            'register_fees': 0,
            'treatment_fees': 0,
            'department': '内科',
            'doctor': '寇丽茹'
          },
          'treatment_time': {
            '$date': '2014-04-11T17:48:37.000Z'
          },
          'department': '内科',
          'chief_complaint': '外阴瘙痒2天',
          'now_history': '平时月经规律14  4-5/28-30 ,量中，痛经（+）,外阴瘙痒伴白带增多2天，。',
          'heart_rate': null,
          'blood_pressure_h': null,
          'blood_pressure_l': null,
          'breathing': null,
          'body_temperature': null,
          'pysical_exam': '外阴：(—) 阴道：畅，凝乳样白带增多 宫颈：轻度糜烂，宫口可见一赘生物，约绿豆大小 宫体：前位，质中，举痛（—） 双附件：（—）',
          'treatments': [],
          'drup_prescriptions': [],
          'fees_details': [],
          'initial_diagnosis': '霉菌性阴道炎',
          'treatment_advise': '阴道分泌物检查霉菌（+） 米可定阴道栓1盒\r\n中医科\t111\t同济医院\t7天1次\t寇丽茹\t2014-04-11 17:17 \r\n \r\n \r\n \r\n \r\n \r\n',
          'doctor': '寇丽茹',
          'total_fees': 0,
          'fees_percent': 0,
          'real_fees': 0
        }
      ]
    }
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/doctor-visit.php')
        .then((response) => {
          this.doctor_list = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDialog (ref, index) {
      this.current_item = this.doctor_list[index]
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>
<style scoped>

</style>

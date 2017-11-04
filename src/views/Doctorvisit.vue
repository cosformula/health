<template>
  <div >
    <table class="table table-striped">
      <thead>
        <tr>
          <th style="text-align:center;font-size:20px">就诊地点</th>
          <th style="text-align:center;font-size:20px">就诊科</th>
          <th style="text-align:center;font-size:20px">就诊时间</th>
          <th style="text-align:center;font-size:20px">就诊医生</th>
          <th style="text-align:center;font-size:20px">总费用/实际费用</th>
          <th style="text-align:center;font-size:20px">病状</th>
          <th style="text-align:center;font-size:20px">处方</th>
        </tr>
      </thead>
      <tbody style="text-align:center">
        <tr v-for="(row, index) in doctor_list" :key="index">
          <td>{{row.SchoolCampus}}</td>
          <td>{{row.department}}</td>
          <td>{{row.RecordTime.$date}}</td>
          <td>{{row.doctor}}</td>
          <td>{{row.total_fees}}/{{row.real_fees}}</td>
          <td>
            <v-btn @click="openDialog('dialog3', index)"style="width:100%;">查看</v-btn>
          </td>
          <td>
            <v-btn @click="openDialog('dialog4', index)" style="width:100%;">查看</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <v-dialog v-model="dialog3">
      <v-card>
      <v-card-title>病状详情</v-card-title>

      <v-card-tile>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>病症陈述</td>
              <td>{{current_item.chief_complaint}}</td>
            </tr>
            <tr>
              <td>询问症状</td>
              <td>{{current_item.now_history}}</td>
            </tr>
            <tr>
              <td>临床表现</td>
              <td>{{current_item.pysical_exam}}</td>
            </tr>
            <tr>
              <td>体温</td>
              <td>{{current_item.body_temperature}}</td>
            </tr>
            <tr>
              <td>初步诊断</td>
              <td>{{current_item.initial_diagnosis}}</td>
            </tr>
            <tr>
              <td>取药负责人</td>
              <td>{{current_item.doctor}}</td>
            </tr>

          </tbody>
        </table>
      </v-card-tile>

        <v-card-actions>
          <v-btn color="green darken-1" flat="flat" @click="dialog3 = false">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog4">
      <v-card>
      <v-card-title>药物处方详情</v-card-title>

      <v-card-content>
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="text-align:center;">药物处方</th>
              <th style="text-align:center;">服用方法</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{current_item.medical_name}}</td>
              <td>{{current_item.method}}</td>
            </tr>
          </tbody>
        </table>
      </v-card-content>

      <v-card-actions>
        <v-btn color="green darken-1" flat="flat" @click="dialog4 = false">确认</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dialog3: false,
      dialog4: false,
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
  created: function () {
    this.getInfo()
  },
  activated: function () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/api/v1/doctor-visit.php')
        .then((response) => {
          console.log(response.data)
          this.doctor_list = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDialog (ref, index) {
      let tvm = this
      if (ref === 'dialog3') {
        tvm.dialog3 = true
      } else {
        tvm.dialog4 = true
      }
      this.current_item = this.doctor_list[index]
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

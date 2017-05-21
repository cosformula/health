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
      doctor_list: []
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

<template>
  <div class="hello">
    <h3 style="text-align:center;">报销记录</h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="80" md-flex-small="80" md-flex-medium="80">
        <md-table style="width:100%;">
      <md-table-header>
        <md-table-row >
          <md-table-head md-numeric class="table_header" style="text-align:center;">报销次数</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">报销金额</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">实际报销金额</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">报销比率</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">医生</md-table-head>
          <md-table-head md-numeric class="table_header" style="text-align:center;">校区</md-table-head>
        </md-table-row>
      </md-table-header>
  
      <md-table-body>
        <md-table-row v-for="(row, index) in info_list" :key="index">
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <md-table v-once style="width:100%;margin-top:30px;">
  <md-table-header>
    <md-table-row>
      <md-table-head style="text-align:center;">项数</md-table-head>
      <md-table-head md-numeric style="text-align:center;">收据编号</md-table-head>
      <md-table-head md-numeric style="text-align:center;">报销金额</md-table-head>
      <md-table-head md-numeric style="text-align:center;">疾病</md-table-head>
      <md-table-head md-numeric style="text-align:center;">类型</md-table-head>
      <md-table-head md-numeric style="text-align:center;">治疗医院</md-table-head>
      <md-table-head md-numeric style="text-align:center;">治疗时间</md-table-head>
      <md-table-head md-numeric style="text-align:center;">审核状态</md-table-head>
      <md-table-head md-numeric style="text-align:center;">审核单位</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in numbers_list" :key="index">
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
  </md-table-body>
</md-table>
 </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      info_list: [{
        'Reimbursement_reciept_numbers': '15',
        'Reimbursement_total': '2221',
        'Reimbursement_cost': '875.01',
        'Reimbursement_total_ratio': '0.394',
        'doctor': 'xxx',
        'campues': '宝山校区'
      }
      ],
      numbers: {
        'Times': '1',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '7',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      numbers_list: [{
        'Times': '1',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '7',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '不可报',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '2',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '145',
        'Reimbursement_disease': '口腔',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '同济大学附属口腔医院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '3',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '25',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '未审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '4',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '85',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '5',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '90',
        'Reimbursement_disease': '妇科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '6',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '95',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '7',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '15',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '8',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '10',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '9',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '181.7',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '10',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '272',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '11',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '310',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '12',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '145',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '13',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '43',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '14',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '46',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      },
      {
        'Times': '15',
        'Receipt_number': '浦东新区妇幼保健院_00458746',
        'Receipt_cost': '70',
        'Reimbursement_disease': '产科',
        'Reimbursement_class': '转诊',
        'Reimbursement_hospital': '浦东新区妇幼保健院',
        'Vacation_flag': '非寒暑假',
        'Reimbursement_check_status': '已审核',
        'Reimbursement_check_medical_laboratory': '校医院'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size:18px;
    font-weight: 500;
}
</style>

<template>
    <div class="hello">
        <h3 style="text-align:center;">就诊记录</h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">就诊地点</md-table-head>
                    <md-table-head style="text-align:center;">就诊时间</md-table-head>
                    <md-table-head style="text-align:center;">就诊科</md-table-head>
                    <md-table-head style="text-align:center;">就诊医生</md-table-head>
                    <md-table-head style="text-align:center;">总费用</md-table-head>
                    <md-table-head style="text-align:center;">实际费用</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list1" :key="index" md-numeric>
                    <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>

        <md-table style="width:100%;margin-top:20px;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">病症陈述</md-table-head>
                    <md-table-head style="text-align:center;">询问症状</md-table-head>
                    <md-table-head style="text-align:center;">临床表现</md-table-head>
                    <md-table-head style="text-align:center;">体温</md-table-head>
                    <md-table-head style="text-align:center;">初步诊断</md-table-head>
                    <md-table-head style="text-align:center;">取药负责人</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list2" :key="index" md-numeric>
                    <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>

        <md-table style="width:100%;margin-top:20px;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">药物处方</md-table-head>
                    <md-table-head style="text-align:center;">服用方法</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in doctor_list3" :key="index" md-numeric>
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
      doctor_list1: [
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-12T09:59:40',
          'department': '急诊科',
          'doctor': '刘颖',
          'total fees': '28.02',
          'real fees': '2.802'
        },
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-13T11:18:19',
          'department': '急诊科',
          'doctor': '刘颖',
          'total fees': '7.9',
          'real fees': '0.79'
        },
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-13T11:18:19',
          'department': '急诊科',
          'doctor': '熊琦',
          'total fees': '21',
          'real fees': '2.1'
        }
      ],
      doctor_list2: [
        {
          'statement': '咳嗽咳痰3天',
          'now_history': '咽痛，咳嗽咳痰。',
          'physical': '双扁无肿大，两肺清。',
          'body temperature': 36.5,
          'initial diagnosis': '急性上感',
          'drug doctor': '张佳'
        },
        {
          'statement': '结膜炎，要求配药',
          'now_history': '',
          'physical': '',
          'body temperature': '',
          'initial diagnosis': '',
          'drug doctor': '张佳'
        },
        {
          'statement': '配药',
          'now_history': '',
          'physical': '',
          'body temperature': '',
          'initial diagnosis': '消化不良',
          'drug doctor': '俞小飞'
        }
      ],
      doctor_list3: [
        {
          'drug': '1.复方甘草合剂 2.复方双花口服液',
          'method': '1.口服，每天三次，一次10ml 2.口服，每天三次，一次两支'
        },
        {
          'drug': '1.氧氟沙星滴眼液',
          'method': '1.外用，每天三次，一次一滴'
        },
        {
          'drug': '1.多潘立酮片',
          'method': '1.口服，每天三次，一次一片'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

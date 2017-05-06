<template>
    <div class="hello">
      <h3 style="text-align:center;">慢性病</h3>
      <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">地点</md-table-head>
                    <md-table-head style="text-align:center;">时间</md-table-head>
                    <md-table-head style="text-align:center;">医生</md-table-head>
                    <md-table-head style="text-align:center;">疾病</md-table-head>
                    <md-table-head style="text-align:center;">治疗医院</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in chronic_list" :key="index" md-numeric>
                    <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
        </md-layout>
    </md-layout>

        <h3 style="text-align:center;">传染病</h3>
        <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">地点</md-table-head>
                    <md-table-head style="text-align:center;">时间</md-table-head>
                    <md-table-head style="text-align:center;">医生</md-table-head>
                    <md-table-head style="text-align:center;">疾病</md-table-head>
                    <md-table-head style="text-align:center;">治疗医院</md-table-head>
                    <md-table-head style="text-align:center;">隔离</md-table-head>
                    <md-table-head style="text-align:center;">隔离地点</md-table-head>
                    <md-table-head style="text-align:center;">是否离校</md-table-head>
                    <md-table-head style="text-align:center;">是否返校</md-table-head>
                    <md-table-head style="text-align:center;">返校时间</md-table-head>
                    <md-table-head style="text-align:center;">患者所属</md-table-head>
                    <md-table-head style="text-align:center;">疾病分类</md-table-head>
                    <md-table-head style="text-align:center;">传染病类别</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in contagion_list" :key="index" md-numeric>
                    <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
        </md-layout>
    </md-layout>

        <h3 style="text-align:center;">重大疾病</h3>
        <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;margin-bottom:250px;">
            <md-table-header>
                <md-table-row>
                    <md-table-head style="text-align:center;">地点</md-table-head>
                    <md-table-head style="text-align:center;">查出时间</md-table-head>
                    <md-table-head style="text-align:center;">治疗结束时间</md-table-head>
                    <md-table-head style="text-align:center;">医生</md-table-head>
                    <md-table-head style="text-align:center;">疾病</md-table-head>
                    <md-table-head style="text-align:center;">检查医院</md-table-head>
                    <md-table-head style="text-align:center;">治疗措施</md-table-head>
                </md-table-row>
            </md-table-header>
    
            <md-table-body>
                <md-table-row style="text-align:center;" v-for="(row, index) in serious_list" :key="index" md-numeric>
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
      chronic_list: [
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-12T09:59:40',
          'doctor': '刘颖',
          'disease': '原发性高血压',
          'medical laboratory': '杨浦区中心医院'
        },
        {
          'schoolcampus': '宝山校区',
          'date': '2015-04-23T13:46:06',
          'doctor': '刘颖',
          'disease': '抑郁症',
          'medical laboratory': '精神卫生中心'
        },
        {
          'schoolcampus': '延长校区',
          'date': '2014-04-14T15:04:33',
          'doctor': '寇丽茹',
          'disease': '甲亢',
          'medical laboratory': '上海大学校医院'
        }
      ],
      contagion_list: [
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-17T08:23:17',
          'doctor': '',
          'disease': '肺结核',
          'hospital': '',
          'separate': '否',
          'separate_place': '',
          'absence': '是',
          'back': '否',
          'back time': '',
          'belong': '',
          'classify': '',
          'infectious': ''
        },
        {
          'schoolcampus': '宝山校区',
          'date': '2014-11-18T00:00:00',
          'doctor': '寇丽茹',
          'disease': '',
          'hospital': '同济医院',
          'separate': '',
          'separate_place': '',
          'absence': '',
          'back': '',
          'back time': '',
          'belong': '本县区',
          'classify': '慢性',
          'infectious': 'B类病毒性肝炎;乙型'
        },
        {
          'schoolcampus': '宝山校区',
          'date': '2014-04-14T15:04:33',
          'doctor': '寇丽茹',
          'disease': '',
          'hospital': '上海市肺科医院',
          'separate': '',
          'separate_place': '',
          'absence': '',
          'back': '',
          'back time': '',
          'belong': '本县区',
          'classify': '疑似病例',
          'infectious': 'B类肺结核;菌阴'
        }
      ],
      serious_list: [
        {
          'schoolcampus': '延长校区',
          'check date': '2014-04-08T00:00:00',
          'to date': '2014-10-08T00:00:00',
          'doctor': '朱晓玉',
          'disease': '淋巴瘤',
          'check hospital': '第十人民医院',
          'healmeasure': '化疗'
        },
        {
          'schoolcampus': '宝山校区',
          'check date': '2012-11-06T00:00:00',
          'to date': '2013-05-04T00:00:00',
          'doctor': 'cyx',
          'disease': '甲状腺恶性肿瘤',
          'check hospital': '第六人民医院',
          'healmeasure': '抗肿瘤同位素治疗'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

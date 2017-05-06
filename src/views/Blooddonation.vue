<template>
  <div class="hello">
    <h3 style="text-align:center;">  </h3>
    <md-layout md-align="center" md-gutter="0">
      <md-layout md-flex-large="85" md-flex-xlarge="85" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80">
        <md-table style="width:100%;">
          <md-table-header>
            <md-table-row>
              <md-table-head style="text-align:center;">献血地点</md-table-head>
              <md-table-head style="text-align:center;">献血量</md-table-head>
              <md-table-head style="text-align:center;">类型</md-table-head>
              <md-table-head style="text-align:center;">献血次数</md-table-head>
            </md-table-row>
          </md-table-header>
  
          <md-table-body>
            <md-table-row style="text-align:center;" v-for="(row, index) in blood_list" :key="index" md-numeric>
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
      blood_list: [
        {
          'schoolcampus': '延长校区',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 1
        },
        {
          'schoolcampus': '嘉定校区',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 2
        },
        {
          'schoolcampus': '宝山校区',
          'blood donation': 200,
          'type': '血浆',
          'donatecount': 3
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  position: relative;
}

.dialog {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
}

.loginPage {
  margin-top: 100px;
  width: 100%;
  text-align: center;
}

.loginPage p {
  color: red;
  text-align: left;
}
</style>

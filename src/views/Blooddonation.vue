<template>
  <div class="hello">
    <h3 style="text-align:center;"> </h3>
    <md-layout md-align="center"
               md-gutter="0">
      <md-layout md-flex-large="85"
                 md-flex-xlarge="85"
                 md-flex-xsmall="100"
                 md-flex-small="100"
                 md-flex-medium="80">
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
            <md-table-row style="text-align:center;"
                          v-for="(row, index) in blood_list"
                          :key="index"
                          md-numeric>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.SchoolCampus}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.BloodDonation}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.BloodType}}</md-table-cell>
              <md-table-cell style="text-align:center;"
                             md-numeric>{{row.DonateCount}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
        <!--<md-table style="width:80%;margin-left:auto;margin-right:auto;">
            <md-table-header>
            </md-table-header>
            <md-table-body>
              <md-table-row style="text-align:center;">
                 <md-table-head md-numeric class="table_header" style="text-align:center;">献血地点</md-table-head>
  
              </md-table-row>
              <md-table-row style="text-align:center;">
                 <md-table-head style="text-align:center;">献血量</md-table-head>
  
              </md-table-row>
              <md-table-row style="text-align:center;">
                 <md-table-head style="text-align:center;">类型</md-table-head>
  
              </md-table-row>
              <md-table-row style="text-align:center;">
                 <md-table-head style="text-align:center;">献血次数</md-table-head>
  
              </md-table-row>
            </md-table-body>
          </md-table> -->
      </md-layout>
    </md-layout>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      blood_list: []
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
      this.$http.get('/api/v1/blood-donate.php')
        .then((response) => {
          console.log(response.data)
          if (response.data !== 'not log in') {
            this.blood_list = response.data
            console.log('success get data')
          } else {
            console.log('not log in')
          }
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

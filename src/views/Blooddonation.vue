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
              <md-table-cell style="text-align:center;" md-numeric>{{row.SchoolCampus}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.BloodDonation}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.BloodType}}</md-table-cell>
              <md-table-cell style="text-align:center;" md-numeric>{{row.DonateCount}}</md-table-cell>
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
          '_id': {
            '$oid': '54608e5ab218450fd84dc585'
          },
          'RecordTime': {
            '$date': '2014-04-14T00:00:00.000Z'
          },
          'ID': 3121,
          'Tag': '献血',
          'UserName': '12124907',
          'InputUser': null,
          'RecordType': null,
          'SchoolCampus': '嘉定校区',
          'BloodDonation': 200,
          'BloodType': '血浆',
          'DonateCount': 1
        }
      ]
    }
  },
  methods: {
    getInfo() {
      this.$http.get('/api/v1/blood-donation.php')
        .then((response) => {
          this.blood_list = response.data
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

<template>
  <div>
    <table class="table table-striped" style="width:100%;">
      <tr>
        <th style="text-align:center;">献血地点</th>
        <th style="text-align:center;">献血量/cc</th>
        <th style="text-align:center;">全血/成分血</th>
      </tr>
      <tr style="text-align:center;" v-for="(row, index) in blood_list" :key="index" md-numeric>
        <td style="text-align:center;" md-numeric>{{row.SchoolCampus}}</td>
        <td style="text-align:center;" md-numeric>{{row.BloodDonation}}</td>
        <td style="text-align:center;" md-numeric>{{row.BloodType}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      blood_list: []
    }
  },
  created: function() {
    this.getInfo()
  },
  activated: function() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$http
        .get('/api/v1/blood-donate.php')
        .then(response => {
          console.log(response.data)
          if (response.data !== 'not log in') {
            this.blood_list = response.data
            console.log('success get data')
          } else {
            console.log('not log in')
          }
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

</style>

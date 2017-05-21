<template>
  <div class="hello">
    <md-layout md-align="center"
               md-gutter="0">
      <md-layout md-flex-large="90"
                 md-flex-xlarge="90"
                 md-flex-xsmall="85"
                 md-flex-small="85"
                 md-flex-medium="85">
        <div class="form1"
             style="width=300px">
          <md-card md-with-hover
                   style="width:100%;margin-top:35px;">
            <md-card-header v-for="(row, index) in info_list"
                            :key="index"
                            md-numeric>
              <div class="md-title"
                   style="text-align:center;">上海大学</div>
              <div class="md-head"
                   style="text-align:center;size:200px;">
                <h3 md-numeric>{{row.user.College}}</h3>
              </div>
            </md-card-header>

            <md-card-media>
              <img src="http://pic01.taopic.com/161225/240391-16122509533420-lp.jpg"
                   alt="health"
                   style="position:static;">
            </md-card-media>

            <md-card-content style="text-align:center;"
                             v-for="(row, index) in info_list"
                             :key="index"
                             md-numeric>
              <h3 md-numeric>{{row.user.FullName}}</h3>
            </md-card-content>
            <div class="form2"
                 style="text-align:center;">
              <md-card-actions style="text-align:center;"
                               v-for="(row, index) in info_list"
                               :key="index"
                               md-numeric>
                <md-button style="text-align:center;"
                           md-numeric>{{row.user.UserName}}</md-button>
                <md-button style="text-align:center;"
                           md-numeric>{{row.user.Gender}}</md-button>
              </md-card-actions>
            </div>
          </md-card>
        </div>
      </md-layout>
    </md-layout>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      info_list: []
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
      this.$http.get('/api/v1/phy-exam.php')
        .then((response) => {
          console.log(response.data)
          this.info_list = response.data
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
.form1 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.form2 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>

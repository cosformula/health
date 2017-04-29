<template id="container">
<div class="header">
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<router-link to="/My">Myinfo</router-link>
    <router-link to="/clinic">policlinic</router-link>   -->
  </div>
  <div class="field-group">
  <md-input-container>
    <label for="personal_info">个人信息</label>
    <md-select name="personal_info" id="personal_info" v-model="personal_info">
      <li class="list" id="basicinfo"><router-link to="/myinfo">基本信息</router-link></li>
      <li class="list" id="sports_test"><router-link to="/My">体测记录</router-link></li>
      <li class="list" id="physical_examination"><router-link to="/My">体检记录</router-link></li>
    </md-select>
  </md-input-container>

  <md-input-container>
    <label for="clinic">门诊</label>
    <md-select name="clinic" id="clinic" v-model="country">
      <li class="list" id="blood_donate"><router-link to="/blooddonation">献血记录</router-link></li>
      <li class="list" id="doctor_visit"><router-link to="/dcvisit">就诊记录</router-link></li>
      <li class="list" id="disease"><router-link to="/history">疾病记录</router-link></li>
      <li class="list" id="reimbursement"><router-link to="/reimbursement">报销记录</router-link></li>
      <li class="list" id="vaccine"><router-link to="/myvaccine">疫苗记录</router-link></li>
      <li class="list" id="transfer_visit"><router-link to="/transfervisit">转诊记录</router-link></li>
      <li class="list" id="sick_leave"><router-link to="/sickleave">病假记录</router-link></li>
    </md-select>
  </md-input-container>

  <md-input-container >
    <label for="health_education">健康教育</label>
    <md-select name="health_education" id="health_education" v-model="health_education">
      
    </md-select>
  </md-input-container>

  
</div>
</div>

</template>

<script>
export default {
  data: () => ({
    movie: 'godfather',
    country: '',
    font: ''
  }),
  methods: {
    setPulpFiction() {
      this.movie = 'pulp_fiction'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field-group {
  display:flex;
}
.header{
margin-left: 30px;
margin-right: 30px;
}
.list{
  font-size:17px;
  color:gray;
}
</style>

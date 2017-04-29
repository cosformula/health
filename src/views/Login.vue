<template>
  <div class="hello">
    <md-layout md-align="center" md-gutter="16">
      <md-layout md-flex-large="50" md-flex-xlarge="50" md-flex-xsmall="70"  md-flex-small="70"  md-flex-medium="70">
        <div class="loginPage">
          <h3>登陆</h3>
          <md-input-container>
            <label>login</label>
            <md-textarea></md-textarea>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password"></md-input>
          </md-input-container>
          <md-button class="md-raised">提交</md-button>
          <md-button class="md-raised">重置</md-button>
        </div>
      </md-layout>
    </md-layout>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      initialValue: 'My initial value'
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
  background: rgba(0, 0, 0, .8);
}

.loginPage {
  margin-top:50px;
  width:100%;
  text-align:center;
}

.loginPage p {
  color: red;
  text-align: left;
}
</style>

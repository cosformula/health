<template>
  <div class="hello">
    <md-layout md-align="center" md-gutter="16">
      <md-layout md-flex-large="50" md-flex-xlarge="50" md-flex-xsmall="70" md-flex-small="70" md-flex-medium="70">
        <div class="loginPage">
          <h3>登陆</h3>
          <md-input-container>
            <label>login</label>
            <md-textarea v-model="card_id"></md-textarea>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="password"></md-input>
          </md-input-container>
          <md-button class="md-raised" @click.native="login()">提交</md-button>
          <md-button class="md-raised">重置</md-button>
        </div>
      </md-layout>
    </md-layout>
    <md-dialog-alert :md-content="alert.content" :md-ok-text="alert.ok" @open="onOpen" @close="onClose" ref="dialog">
    </md-dialog-alert>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      alert: {
        content: '用户名或密码错误',
        ok: '确认'
      },
      card_id: '',
      password: '',
      initialValue: 'My initial value'
    }
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open()
    },
    closeDialog(ref) {
      this.$refs[ref].close()
    },
    onOpen() {
      console.log('Opened')
    },
    onClose(type) {
      console.log('Closed', type)
    },
    login() {
      var a = 1
      this.$http.post('/static/login', {
        'card_id': this.card_id,
        'password': this.password
      })
        .then((response) => {
          if (response.data.status === 'success') {
          } else {
            this.openDialog('dialog')
          }
        })
        .catch((err) => {
          console.log(err)
        })
      a = 3
      console.log(a)
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
  margin-top: 50px;
  width: 100%;
  text-align: center;
}

.loginPage p {
  color: red;
  text-align: left;
}
</style>

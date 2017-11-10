<template>
  <div align="center">
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">学生健康档案平台</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-md text-xs-center style="padding-top:20vh;">
      <v-layout row justify-center>
        <v-flex xs12 md8>
          <v-form>
            <v-text-field label="用户名" id="username" v-model="card_id"></v-text-field>
            <v-text-field label="密码" id="password" v-model="password" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"></v-text-field>
            <v-btn :loading="loading"	 color="primary" @click="login()" dark block>登录</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
      <!-- <v-dialog v-model="dialog">
        <v-card>
          <v-card-text>{{alertmsg}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click="close()">确认</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      alertmsg: '',
      e1: true,
      card_id: '',
      password: '',
      dialog: false,
      loading: false
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
    close(type) {
      this.dialog = false
      if (this.$user.cardID !== '') {
        this.$router.replace('/')
      }
    },
    login() {
      this.loading = true
      this.$http
        .post('/api/v1/login.php', {
          card_id: this.card_id,
          password: this.password
        })
        .then(response => {
          if (response.data.success === true) {
            this.alertmsg = '登陆成功'
            this.$user.cardID = this.card_id
            this.$http
              .get('/api/v1/phy-exam.php')
              .then(response => {
                this.loading = false
                // this.$user.name = response.data[0].user.FullName
              })
              .catch(err => {
                this.loading = false
                console.log(err)
              })
            this.close()
          } else {
            // this.open()
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
.login {
  /* margin-top: 10%; */
  /* width: 300px; */
  /* padding: 0 auto; */
}
</style>

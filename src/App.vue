<template>
  <div id="app" style="height:100%;">
    <md-toolbar>
    <router-link to="/" class="back" v-if="$route.path!='/'" style="color: rgba(255, 255, 255, .87)">返回</router-link>
  <md-button class="md-icon-button" v-if="$route.path=='/'">
    <md-icon>menu</md-icon>
  </md-button>

  <h2 class="md-title" style="flex: 1">健康管理</h2>

  <md-button class="md-icon-button">
    <md-icon>favorite</md-icon>
  </md-button>
</md-toolbar>
    <!--<img src="./assets/logo.png">-->
    <!--<md-button @click.native="send()">Send</md-button>-->
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    },
    send () {
      this.$http.get('/sdas')
      .then((response) => {
        console.log('asdas')
        this.data = response.data
      })
      .catch(function () {
        console.log('12312')
      })
    }
  }
}
</script>

<style>
h2{
  text-align: center;
}
.back{
  font-size: 20px;
  font-weight: 400;
  display: block;
}
</style>

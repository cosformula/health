<template>
  <div id="app">
    <md-toolbar>
  <md-button class="md-icon-button">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

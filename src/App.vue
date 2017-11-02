<template>
  <v-app id="app">
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">学生健康档案平台</v-toolbar-title>
    </v-toolbar>
  <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$router.push('/login')
  }
}
</script>

<style lang="less">


</style>


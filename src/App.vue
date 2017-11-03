<template>
  <v-app id="app">
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


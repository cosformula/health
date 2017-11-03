<template>
  <div>
    <div style="font-size:26px">健康小贴士:</div>
    <div  v-for="item in msg">
      <div class="msg">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../assets/eventBus.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    let tvm = this
    bus.$on('reportmsg', function (msg) {
      tvm.msg = msg
    })
  }
}
</script>

<style scoped>
.msg{
  font-size: 16px
}
</style>


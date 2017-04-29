<template>
  <div id="app" style="height:100%;">
    <md-toolbar>
    <router-link to="/" class="back" v-if="$route.path!='/'" style="color: rgba(255, 255, 255, .87)">返回</router-link>


  <h2 class="md-title" style="flex: 1">{{title[$route.path]}}</h2>

  <md-button class="md-icon-button" @click.native="toggleRightSidenav">
    <md-icon>menu</md-icon>
  </md-button>
</md-toolbar>
    <!--<img src="./assets/logo.png">-->
    <!--<md-button @click.native="send()">Send</md-button>-->

    <router-view></router-view>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">学生信息</h3>
        </div>
      </md-toolbar>

      <div class="phone-viewport">
        <md-list>
          <md-list-item>
            <md-icon class="md-primary">account_circle</md-icon> <span>student.name</span><br /><br />
          </md-list-item>

          <md-list-item>
            <md-icon style="color: deepskyblue">picture_in_picture_alt</md-icon> <span>student.xuehao</span><br /><br />
          </md-list-item>

          <md-list-item>
            <md-icon style="color: black">work</md-icon>
            <span>student.major</span><br /><br />
          </md-list-item>

          <md-list-item>
            <md-icon class="md-primary">error_outline</md-icon>
            <span>关于</span><br /><br />
          </md-list-item>

          <md-list-item>
            <md-icon >question_answer</md-icon>
            <span>帮助</span><br /><br />
          </md-list-item>

          <md-list-item>
            <md-icon class="md-accent">subdirectory_arrow_right</md-icon>
            <span>退出</span><br /><br />
          </md-list-item>


        </md-list>
      </div>

    </md-sidenav>

  </div>

</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      title: {
        '/': '健康教育',
        '/test': '测试',
        '/myinfo': '基本信息',
        '/myvaccine': '疫苗记录',
        '/transfervisit': '转诊记录',
        '/sickleave': '病假记录',
        '/reimbursement': '报销记录',
        '/history': '疾病记录',
        '/blooddonation': '献血记录',
        '/dcvisit': '就诊记录'
      }
    }
  },
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
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close()
    },
    open(ref) {
      console.log('Opened: ' + ref)
    },
    close(ref) {
      console.log('Closed: ' + ref)
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
.ack{
  font-size: 20px;
  font-weight: 400;
  display: block;
}
.cenb{
  position: absolute;
  left: 80px;
}
</style>

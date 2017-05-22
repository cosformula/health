<template>
  <div id="app"
       class="container"
       style="width:100%;overflow-x:hidden !important;">
    <md-toolbar>
      <router-link to="/"
                   class="back"
                   v-if="$route.path!='/'"
                   style="color: rgba(255, 255, 255, .87)">返回</router-link>
      <md-button class="md-icon-button"
                @click.native="toggleRightSidenav">
                <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title"
          style="flex: 1">{{title[$route.path]}}</h1>
    </md-toolbar>
    <md-sidenav class="main-sidebar md-left md-fixed"
                ref="rightSidenav"
                @open="open('Right')"
                @close="close('Right')"
                :md-swipeable="false">
      <div style="text-align: center">
       <md-image style="width:168px;" md-src="static/SHUlogo1.png"></md-image>
     </div>
      <md-list>
        <md-list-item>
          <md-icon class="md-primary">account_circle</md-icon>
          <span>姓名</span>
          <br />
          <br />
        </md-list-item>

        <md-list-item>
          <md-icon style="md-primary">picture_in_picture_alt</md-icon>
          <span>学号</span>
          <br />
          <br />
        </md-list-item>
        <md-list-item>
          <md-icon style="md-primary">work</md-icon>
          <span>专业</span>
          <br />
          <br />
        </md-list-item>

        <md-list-item>
          <md-icon class="md-primary">error_outline</md-icon>
          <span>关于</span>
          <br />
          <br />
        </md-list-item>

        <md-list-item>
          <md-icon class="md-primary">question_answer</md-icon>
          <span>帮助</span>
          <br />
          <br />
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">subdirectory_arrow_right</md-icon>
          <span>退出</span>
          <br />
          <br />
        </md-list-item>
      </md-list>
    </md-sidenav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      title: {
        '/': '学生健康档案平台',
        '/test': '测试',
        '/myinfo': '基本信息',
        '/myvaccine': '疫苗记录',
        '/transfervisit': '转诊记录',
        '/sickleave': '病假记录',
        '/reimbursement': '报销记录',
        '/history': '疾病记录',
        '/blooddonation': '献血记录',
        '/dcvisit': '就诊记录',
        '/phyexam': '体检记录'
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
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style lang="less">
h1 {
  text-align: center;
}


.back {
  font-size: 20px;
  font-weight: 400;
  display: block;
}

.ack {
  font-size: 20px;
  font-weight: 400;
  display: block;
}

.cenb {
  position: absolute;
  left: 80px;
}

#app .md-sidenav-content {
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: fade(#000, 12%);

  @media (min-width: 1280px) {
    top: 0;
    pointer-events: auto;
    transform: translate3d(0, 0, 0); //This is the trick!
    box-shadow: -2px;
  }
}

.container {
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;

  @media (min-width: 1280px) {
    padding-left: 304px;
  }
}

@media (min-width: 1280px) {
  .md-icon-button {
    opacity: 0;
    pointer-events: none;
  }
}
</style>

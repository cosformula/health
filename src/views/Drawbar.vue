<template>
  <div>
    <v-list two-line>
      <v-list-tile  style="border-bottom: 1px solid #ddd">
        <v-list-tile-avatar>
          <img src="http://139.224.135.121/Public/image/libiary.jpg">
        </v-list-tile-avatar>
        <v-content>{{info_list.FullName}}</v-content>
        <v-content>{{info_list.UserName}}</v-content>
      </v-list-tile>
      <v-list-tile avatar v-for="item in history " v-bind:key="item.title" @click="">
        <v-list-tile-action>
          <v-icon v-if="item.icon" color="pink">iconfont {{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info_list: {
        'Gender': '男',
        'College': '外国语学院',
        'FullName': '丁红彬',
        'UserName': '09124406'
      },
      history: [
        {
          icon: 'icon-tijian',
          text: '体检记录',
          num: '1'
        },
        {
          icon: 'icon-fengxian',
          text: '献血记录',
          num: '2'
        },
        {
          icon: 'icon-weibiaoti2',
          text: '就诊记录',
          num: '4'
        },
        {
          icon: 'icon-jibing_illness',
          text: '疾病记录',
          num: '3'
        },
        {
          icon: 'icon-baoxiao',
          text: '报销记录',
          num: '4'
        },
        {
          icon: 'icon-zhenxian',
          text: '疫苗记录',
          num: '2'
        },
        {
          icon: 'icon-zhuanzhenjilu',
          text: '转诊记录',
          num: '0'
        },
        {
          icon: 'icon-qingjia',
          text: '病假记录',
          num: '2'
        }
      ]
    }
  }
}
</script>


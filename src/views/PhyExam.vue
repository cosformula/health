<template>
  <v-container grid-list-xs text-xs-center class="px-0" style="padding:0;margin:0;" fluid>
    <v-tabs light v-model="active" centered fixed grow>
      <v-tabs-bar class="white">
        <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
          {{ tab }}
        </v-tabs-item>
        <v-tabs-slider color="grey"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items class="px-2">
        <v-tabs-content id="入学体检">
          <v-layout row wrap>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-shengao</v-icon>身高</v-card-title>
                <v-card-text class="px-0 value">{{enterData.height}}cm</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-tizhong</v-icon>体重</v-card-title>
                <v-card-text class="px-0 value">{{enterData.weight}}kg</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-bmi</v-icon>BMI</v-card-title>
                <v-card-text class="px-0 value">{{enterData.BMI}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-xieya</v-icon>高/低血压/kpa</v-card-title>
                <v-card-text class="px-0 value">{{enterData.high_blood}}/{{enterData.low_blood}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-semang</v-icon>色盲</v-card-title>
                <v-card-text class="px-0 value">{{enterData.color_discrimination}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-shili</v-icon>视力(左/右)</v-card-title>
                <v-card-text class="px-0 value">{{enterData.eyesight_left}}/{{enterData.eyesight_right}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-tijian</v-icon>心脏听诊</v-card-title>
                <v-card-text class="px-0 value">{{enterData.cardiac_auscultation}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-xinshuai</v-icon>心率</v-card-title>
                <v-card-text class="px-0 value">{{enterData.heart_rate}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-iconfhl</v-icon>肺活量</v-card-title>
                <v-card-text class="px-0 value">{{enterData.lung}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-gandanpiyishen</v-icon>肝脾</v-card-title>
                <v-card-text class="px-0 value">{{enterData.liver_spleen}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tabs-content>
        <v-tabs-content id="毕业体检">
          <v-layout row wrap>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-shengao</v-icon>身高</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.height}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-tizhong</v-icon>体重</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.weight}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-bmi</v-icon>BMI</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.BMI}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-xieya</v-icon>血压 高/低</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.high_blood}}/{{leaveData.low_blood}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-semang</v-icon>色盲</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.color_discrimination}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-shili</v-icon>视力 左/右</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.eyesight_left}}/{{leaveData.eyesight_right}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-tijian</v-icon>心脏听诊</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.cardiac_auscultation}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-xinshuai</v-icon>心率</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.heart_rate}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-iconfhl</v-icon>肺活量</v-card-title>
                <v-card-text class="px-0 value">{{leaveData.lung}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6 md4 lg3 style="padding:5px;margin:0;">
              <v-card flat hover ripple>
                <v-card-title class="card_title">
                  <v-icon>iconfont-gandanpiyishen</v-icon>肝脾</v-card-title>
                <v-card-text class="px-0 value">{{enterData.liver_spleen}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

  </v-container>
</template>
<script>
export default {
  data() {
    return {
      active: '',
      tabs: ['入学体检', '毕业体检'],
      // exam: [
      //   { name: 'height', value: '' },
      //   { name: 'weight', value: '' },
      //   { name: 'BMI', value: '' },
      //   { name: 'blood pressure_hign', value: '' },
      //   { name: 'blood pressure_low', value: '' },
      //   { name: 'high blood', value: '' },
      //   { name: 'color blindness', value: '' },
      //   { name: 'vision_left', value: '' },
      //   { name: 'vision_right', value: '' },
      //   { name: 'cardiac auscultation', value: '' },
      //   { name: 'heart rate', value: '' },
      //   { name: 'lung', value: '' },
      //   { name: 'liver spleen', value: '' }
      // ],
      enterData: {},
      leaveData: {}
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$http
        .get('/api/v1/phy-exam.php')
        .then(response => {
          if (response.data[0]) {
            this.enterData = response.data[0]
          }
          if (response.data[1]) {
            this.enterData = response.data[1]
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
.value {
  font-size: 2rem;
  color: gray;
}
.card_title {
  font-size: 1.2rem;
  /* color:gray; */
}
</style>

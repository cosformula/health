<template>
  <div>
    <v-card-title>
      <span class="headline">糖尿病风险预测</span>
    </v-card-title>
    <v-card-text style="background-color:#fff" class="pa-2">
      
      <v-layout row wrap class="ma-2">
        <v-flex class="pr-2">
          <v-select
            label="性别"
            autocomplete
            :items="genderlist"
            item-text="text"
            item-value="value"
            :search-input.sync="search"
            v-model="form.gender"
          ></v-select>
        </v-flex>
        <v-flex>
          <v-text-field label="年龄" v-model="form.age"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="体重指数(BMI)" v-model="form.BMI" hint="正常值:18.5-24.9"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="舒张压(DBP)" v-model="form.DBP" hint="正常值:60-90"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="收缩压(SBP)" v-model="form.SBPe" hint="正常值:90-140"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="白细胞计数(WBC)" v-model="form.WBC" hint="正常值:4-10"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="红细胞计数(RBC)" v-model="form.RBC" hint="正常值:男4-5.5/女3.5-5"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="血红蛋白(HB)" v-model="form.HB" hint="正常值:男120-160/女110-150"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="红细胞压积(PCV)" v-model="form.PCV" hint="正常值:男40-50/女36-45"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="血小板计数(BPC)" v-model="form.BPC" hint="正常值:100-300"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="空腹血糖(Glucose)" v-model="form.Glucose" hint="正常值:3.89-6.1"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="血清甘油三酯(TG)" v-model="form.TG"  hint="正常值:0.22-1.65"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="低密度蛋白胆固醇(TC)" v-model="form.TC" hint="正常值:2.9-6.0"></v-text-field>
        </v-flex>
        <v-flex md12 xs12 class="ma-2">
          <v-text-field label="高密度脂蛋白胆固醇(HDL)" v-model="form.HDL" hint="正常值:1.14-1.9"></v-text-field>
        </v-flex>
      </v-layout>
      <v-flex md12 xs12 class="ma-2">
        <v-text-field label="血清总胆固醇(LDL)" v-model="form.LDL" hint="正常值:2.7-3.36"></v-text-field>
      </v-flex>    
    </v-card-text>
  </div>
</template>

<script>
export default {
  data () {
    return {
      genderlist: [
        {
          text: '男',
          value: 1
        },
        {
          text: '女',
          value: 2
        }
      ],
      search: '',
      form: {
        gender: 1,
        age: '',
        BMI: '',
        DBP: '',
        SBP: '',
        WBC: '',
        RBC: '',
        HB: '',
        PCV: '',
        BPC: '',
        Glucose: '',
        TG: '',
        TC: '',
        HDL: '',
        LDL: ''
      }
    }
  }
}
</script>


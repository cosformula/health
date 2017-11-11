<template>
  <v-card flat class="my-2 py-3" style="background-color:rgba(0,0,0,0)" hover>
    <v-card-title>
      <div class="headline light-blue--text text--darken-4">其他记录</div>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn color="primary" dark outline slot="activator">{{currentQuery.name}}</v-btn>
        <v-list>
          <v-list-tile v-for="(item,index) in queryNames" :key="item.name" @click="select=index">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table v-bind:headers="currentQuery.headers" :items="currentQuery.items" hide-actions class="elevation-1">
      <!-- <template slot="items" slot-scope="props">
          <td v-for="value in props.items" :key="value">{{ value }}</td>
        </template> -->
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      queryNames: [
        {
          key: 'blood',
          name: '献血记录',
          headers: [
            { text: '献血地点', value: 'SchoolCampus' },
            { text: '献血量/cc', value: 'BloodDonation' },
            { text: '全血/成分血', value: 'BloodType' }
          ],
          getItems: () => {
            let items = []
            this.$http
              .get('/api/v1/blood-donate.php')
              .then(response => {
                if (response.data !== 'not log in') {
                  for (let item of response.data) {
                    items.push([
                      item.SchoolCampus,
                      item.BloodDonation,
                      item.BloodType
                    ])
                  }
                } else {
                }
                return items
              })
              .catch(err => {
                console.log(err)
                return []
              })
          }
        },
        {
          key: 'vaccine',
          name: '疫苗记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {
            let items = []
            this.$http
              .get('/api/v1/vaccine.php')
              .then(response => {
                console.log(response.data)
                this.info_list = response.data
                return items
              })
              .catch(err => {
                console.log(err)
              })
          }
        },
        {
          key: 'disease',
          name: '疾病记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {}
        },
        {
          key: 'doctorVisit',
          name: '就诊记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {}
        },
        {
          key: 'reimbursement',
          name: '报销记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {}
        },
        {
          key: 'transferVisit',
          name: '转诊记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {}
        },
        {
          key: 'sickLeave',
          name: '病假记录',
          headers: [
            { text: '接种时间', value: 'RecordTime' },
            { text: '接种地点', value: 'SchoolCampus' },
            { text: '接种类型', value: 'ViccineName' },
            { text: '接种次数', value: 'ViccineTime' },
            { text: '医生', value: 'Doctor' },
            { text: '疫苗来源', value: 'Medical_laboratory' }
          ],
          getItems: () => {}
        }
      ],
      select: 0,
      items: []
    }
  },
  computed: {
    currentQuery: function() {
      console.log(this.select)
      let result = {}
      let query = this.queryNames[this.select]
      result.name = query.name
      result.headers = query.headers
      result.items = query.getItems()
      result.items = [
        {
          SchoolCampus: '宝山校区',
          BloodDonation: 200,
          BloodType: 'O型'
        }
      ]
      console.log(this.items)
      return result
    }
  },
  created() {}
}
</script>

<style>

</style>

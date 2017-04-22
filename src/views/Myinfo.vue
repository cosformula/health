<template>
  <div class="hello">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>学号</md-table-head>
          <md-table-head>姓名</md-table-head>
          <md-table-head md-numeric>性别</md-table-head>
          <md-table-head md-numeric>年龄</md-table-head>
          <md-table-head md-numeric>身高</md-table-head>
        </md-table-row>
      </md-table-header>
  
      <md-table-body>
        <md-table-row v-for="(row, index) in history_list" :key="index">
          <md-table-cell style="text-align:center;" v-for="(col, index) in row" :key="index" md-numeric>{{col}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      info: {
        'card_id': '15121604',
        'name': '赵逸群',
        'sex': '男',
        'age': 16,
        'height': 175
      },
      history_list: [
        {
          'card_id': '15121604',
          'name': '赵逸群',
          'sex': '男',
          'age': 16,
          'height': 175
        },
        {
          'card_id': '15121604',
          'name': '赵逸群',
          'sex': '男',
          'age': 16,
          'height': 175
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

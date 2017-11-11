<template>
  <div>
    <v-alert v-if="data.length===0" icon="info" style="background-color:rgba(63, 69, 235, 0.3) !important;" value="true">
      您目前没有疾病记录
    </v-alert>
    <div v-else id="timeline" class="timeline-outer">
      <ul class="timeline">
        <li class="event" v-for="(item,index) in data.slice((page-1)*5,page*5)" :key="index">
          <h3>{{new Date(item.RecordTime.sec*1000) | moment("YYYY-MM-DD")}}</h3>
          <table>
            <tr>
              <th class="light-blue--text text--darken-4">记录时间
              </th>
              <td> {{new Date(item.RecordTime.sec*1000) | moment("YYYY-MM-DD HH:MM:SS")}}
              </td>
            </tr>
            <tr>
              <th class="light-blue--text text--darken-4">病情分类
              </th>
              <td> {{item.Tag}}
              </td>
            </tr>
            <tr>
              <th class="light-blue--text text--darken-4">病状
              </th>
              <td>{{item.Disease}}
              </td>
            </tr>
            <tr>
              <th class="light-blue--text text--darken-4">治疗机构
              </th>
              <td>
                {{item.Medical_laboratory}}
              </td>
            </tr>
            <tr>
              <th class="light-blue--text text--darken-4">接诊医生
              </th>
              <td>
                {{item.Doctor}}
              </td>
            </tr>
          </table>
        </li>
      </ul>
      <div class="text-xs-center pt-2" v-if="length!==1">
        <v-pagination :length="length" v-model="page"></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return { page: 1 }
  },
  computed: {
    length: function() {
      return parseInt(this.data.length / 5) + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  /* margin-top: 50px; */
  text-align: center;
}

div.timeline-outer {
  width: 100%;
  margin: 0 auto;
  padding-left: 0.8rem;
  padding-right: 0.5rem;
}

/* h1.header {
  font-size: 50px;
  line-height: 70px;
} */
/* Timeline */
table {
  width: 100%;
  color: grey;
  font-size: 1.1rem;
}
/* th {
  color:#e3f2fd;
} */
.timeline {
  border-left: 8px solid #42a5f5;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  color: #333;
  margin: 0;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  padding: 20px;
  list-style: none;
  text-align: left;
  background-color: #fff;
}

.timeline h1,
.timeline h2,
.timeline h3 {
  font-size: 1.4em;
  margin-bottom: 0;
}

.timeline .event {
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}
/* 
.timeline .event:before {
  left: -177.5px;
  color: #212121;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 16px;
  min-width: 120px;
} */

.timeline .event:after {
  box-shadow: 0 0 0 8px #42a5f5;
  left: -30px;
  background: #212121;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: '';
  top: 15px;
}
/**/
/*——————————————
Responsive Stuff
———————————————*/

@media (max-width: 945px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
  section.lab h3.card-title {
    padding: 5px;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline .event:nth-child(1)::before,
  .timeline .event:nth-child(3)::before,
  .timeline .event:nth-child(5)::before {
    top: 38px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
}
/*——————————————
others
———————————————*/

a.portfolio-link {
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>

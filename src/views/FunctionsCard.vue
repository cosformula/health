<template>
  <router-link :to="link" class="links">
    <md-card style="width:100%;" class="md-primary" md-theme="green" md-with-hover>
      <md-card-header>
        <div :class="'md-title ' + titleid" style-width="80%">

          <div>
            <i :class="'iconfont ' + icon"></i>
          </div>{{ text }}

        </div>
      </md-card-header>
      <md-ink-ripple></md-ink-ripple>
    </md-card>
  </router-link>
</template>

<script>
export default {
  props: ['icon', 'text', 'link', 'titleid'],
  data: () => ({
    movie: 'godfather',
    country: '',
    font: ''
  }),
  methods: {
    setPulpFiction () {
      this.movie = 'pulp_fiction'
    }
  }
}
</script>
<style scoped>
.field-group {
  display: flex;
}

.list {
  font-size: 17px;
  color: gray;
}






/*.card-layout {
  margin: 16px 15%;
  display: flex;

  .column {
    flex: 1;

    + .column {
      margin-left: 8px;
    }
  }

  .md-card + .md-card {
    margin-top: 8px;
  }
}*/

a {
  display: block;
  text-align: center;
}

a:hover {
  text-decoration: none !important;
}

.material-icons {
  height: 20px;
  width: 20px;
  font-size: 35px;
  text-align: center;
}

.iconfont {
  height: 20px;
  width: 20px;
  font-size: 35px;
  text-align: center;
}

.column {
  text-align: center;
  width: 80%;
}
</style>

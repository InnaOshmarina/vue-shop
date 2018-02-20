<template>
  <div id="app">
      <Header></Header>
      <br><br>
      <b-container>
          <router-view>loading</router-view>
      </b-container>
      <br><br><br>
      <main-footer></main-footer>
  </div>
</template>

<script>

import Header from './components/shared/Header.vue'
import MainFooter from './components/shared/MainFooter.vue'

export default {
  name: 'app',
  components: {
      Header,
      MainFooter
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>

#app {
  background-color: #c8e0fa;
  font-size: 1.2rem;
  font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
}
// .container {
  
// }

</style>


<template>
  <div id="app">
      <Header class="pb-5"></Header>
      <b-container>
          <router-view></router-view>
      </b-container>
      <main-footer class="mt-5"></main-footer>
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
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-size: 1.2rem;
  font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
}

</style>


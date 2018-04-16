<template>
  <div id="app">
          <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'app'
    })
    export default class App extends Vue {
        constructor() {
            super();

        }
    }

</script>

<style lang="scss" scoped>

#app {
  font-size: 1.2rem;
  font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
}

</style>


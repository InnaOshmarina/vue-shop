<template>
    <div>
      <b-navbar toggleable="lg"> 
        
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand><router-link :to="{ name: 'dashboard' }" id="for-toolTip-2">P I X E L - dashboard</router-link></b-navbar-brand>
          <b-tooltip target="for-toolTip-2" placement="bottom">
          Перейти к панели инструментов
          </b-tooltip>
          
      </b-navbar>
         
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    

    @Component({
        name: 'header-second'
    })
    export default class HeaderSecond extends Vue {
        constructor() {
            super();

        }
        
    }

</script>

<style lang="scss" scoped>

   .navbar {
    background-color: rgb(227, 238, 245);
  }

  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.5rem;
      font-weight: 600;
      color: green;
  }

</style>

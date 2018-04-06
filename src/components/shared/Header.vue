<template>
    <div>
      <b-navbar toggleable="lg"> 
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand><router-link :to="{ name: 'home' }" id="for-toolTip-1">P I X E L</router-link></b-navbar-brand>
          <b-tooltip target="for-toolTip-1" placement="bottom">
          На главную страницу
          </b-tooltip>
          <b-collapse is-nav id="nav_collapse">
            <item-dropdown></item-dropdown>
            
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-if="!signComplete">

              <b-nav-item right>
                <router-link :to="{ name: 'sign-in' }" @click="switchSign('sign-in')">Вход</router-link>
              </b-nav-item>

              <b-nav-item right class="for-sign-up">
                <router-link :to="{ name: 'sign-up' }" @click="switchSign('sign-up')">Регистрация</router-link> 
              </b-nav-item>

            </b-navbar-nav>
            <b-navbar-nav class="ml-auto" v-else>
              
              <b-nav-item right>
                <router-link :to="{ name: 'editing-products' }">Редактирование товаров</router-link>
              </b-nav-item>

              <b-nav-item right class="for-sign-up">
                <router-link :to="{ name: 'your-discounts' }">Ваши скидки</router-link>
              </b-nav-item>
           
            </b-navbar-nav>

          </b-collapse>
        </b-container> 
      </b-navbar>
      <search></search>   
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ItemDropdown from './ItemDropdown.vue';
    import Search from '../pages/Search.vue';
    import EditingProducts from '../admin/EditingProducts.vue';
    import YourDiscounts from '../admin/YourDiscounts.vue';

    @Component({
        name: 'header',
        components: {
            ItemDropdown,
            Search,
            EditingProducts,
            YourDiscounts
        }
    })
    export default class Products extends Vue {
        constructor() {
            super();

        }
        get signComplete() {
              return this.$store.getters.getUser.signComplete;
        }

        switchSign(currentSign) {
              this.sign = currentSign;
        }
    }

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

   .navbar {
    background-color: rgb(227, 238, 245);
  }

  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 2rem;
    font-family: 'Gloria Hallelujah', cursive;
    font-weight: 900;
    color: rgb(39, 116, 240);
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-right: 1.2rem;
  }

  .ml-auto .for-sign-up a {
    margin-right: 0;
  }

</style>

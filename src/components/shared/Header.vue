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
              <!-- <b-navbar-nav class="mr-auto">
                  <b-nav-item-dropdown text="Каталог товаров">
                      <b-dropdown-item v-for="(category, index) in categories" :key="index">
                        <router-link :to="{ name: 'products', params: { category_id: category.category_id } }"> 
                          {{ category.name }}
                        </router-link>
                      </b-dropdown-item>
                  </b-nav-item-dropdown> 
              </b-navbar-nav> -->
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-item right>
                  <router-link :to="{ name: 'sign-in' }">Вход</router-link>
                </b-nav-item>

                <b-nav-item right class="for-sign-up">
                  <router-link :to="{ name: 'sign-up' }">Регистрация</router-link> 
                </b-nav-item>

              </b-navbar-nav>

          </b-collapse>
        </b-container> 
      </b-navbar>
      <search></search>
    </div>
</template>

<script>
    import ItemDropdown from './ItemDropdown.vue';
    import Search from '../pages/Search.vue';
    import {categories} from '../../data.js';
    import {goods} from '../../data.js';

    export default {
      name: 'header',
      components: {
        ItemDropdown,
        Search
      },
      data() {
        return {
          categories,
          goods
        }
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

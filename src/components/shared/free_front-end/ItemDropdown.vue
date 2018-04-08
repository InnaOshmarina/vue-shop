<template>
   <b-navbar-nav class="mr-auto">
        <b-nav-item-dropdown text="Каталог товаров">
            <b-dropdown-item v-for="(category, index) in categories" :key="index">
                <router-link :to="{ name: 'products', params: { category_id: category.category_id } }"> 
                    {{ category.name }}
                </router-link>
            </b-dropdown-item>
        </b-nav-item-dropdown> 
    </b-navbar-nav>
</template>

<script>
    import {categories} from '../../../data.js';

    export default {
      name: 'item-dropdown',
      data() {
        return {
          categories
        }
      }      
    }
</script>

<style lang="scss" scoped>

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-right: 1.2rem;
  }

  .nav-item .dropdown-item:active {
    background-color: #aff0be;
  }

</style>


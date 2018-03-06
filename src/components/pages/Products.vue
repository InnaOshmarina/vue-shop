<template>
  <div>
    <b-row class="mt-5" v-for="(good, index) in goods" :key="index">
        <!-- <b-col lg="3"> -->
          <!-- <router-link :to="{ name: 'product-details', params: { id: good.id } }">
             <img src="https://content2.onliner.by/catalog/device/header/69fd1638fafefbe0ecc02ab7fd9391f0.jpeg"
                  width="250" height="144" alt="Apple MacBook Pro 15&quot;">
          </router-link> -->
        <!-- </b-col> -->
        <b-col lg="9">
            <h4>{{ separateCategory.name }}</h4>
            <p>{{ separateCategory.description }}</p>

        </b-col>
        <b-col lg="3">
            <span>от {{ separateCategory.price }} р.</span>
        </b-col>
    </b-row>
    <hr>
  </div>
</template>

<script>
 import {categories} from '../../data.js';
 import {goods} from '../../data.js';


    export default {
      name: 'products',
      data() {
        return {
            categories,
            goods           
        }    
      },
      computed: {
          separateCategory() {
              const ourId = this.$route.params.id;
              const ourProducts = this.goods.filter(function(Object) {
                if (Object.category_id === ourId) {
                  return true;
                } else {
                  return false;
                }
              });
              return ourProducts;
              
          }
      }
    }
</script>

<style lang="scss" scoped>

  h4 {
    font-weight: 600;
    a {
      color: #000;
    }
  }

  span {
    font-size: 1.3rem; 
    font-weight: 700;
  }

  .col-lg-3 {
    margin-bottom: 1.125rem;
  }

  
</style>



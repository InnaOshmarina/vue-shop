<template>
  <div>
    <b-row class="mt-5" v-for="(good, index) in separateCategory" :key="index">
        <!-- <b-col lg="3"> -->
          <!-- <router-link :to="{ name: 'product-details', params: { id: good.id } }">
             <img src="https://content2.onliner.by/catalog/device/header/69fd1638fafefbe0ecc02ab7fd9391f0.jpeg"
                  width="250" height="144" alt="Apple MacBook Pro 15&quot;">
          </router-link> -->
        <!-- </b-col> -->
        <b-col lg="9">
            <h4><router-link :to="{ name: 'product-details', params: { id: good.id } }">
              {{ good.name }}</router-link>
              </h4>
            <p>{{ good.description }}</p>
        </b-col>
        <b-col lg="3">
            <span>от {{ good.price }} р.</span>
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
            // console.log(this.$route);
              const ourId = this.$route.params.category_id;
              if (ourId == 'all') {
              return this.goods;      
              }          
              const ourProducts = this.goods.filter(function(Object) {
                return Object.category_id == ourId;
                // if (Object.category_id == ourId) {
                //   return true;
                // } else {
                //   return false;
                // }
              });
              // console.log(ourProducts);
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



<template>
  <div>
    <b-row class="mt-5" v-for="(good, index) in goods" :key="index">
        <b-col lg="3">
          <a href="#">
             <img src="https://content2.onliner.by/catalog/device/header/69fd1638fafefbe0ecc02ab7fd9391f0.jpeg"
                  width="250" height="144" alt="Apple MacBook Pro 15&quot;">
          </a>
        </b-col>
        <b-col lg="7">
            <h4><router-link :to="{ name: 'product-details', params: { id: good.id } }">{{ good.name }}</router-link></h4>
            <p>{{ good.description }}</p>

        </b-col>
        <b-col lg="2">
            <span>от {{ good.price }} р.</span>
        </b-col>
    </b-row>
    <hr>
    <!-- <product-list-detail v-for="(good, index) in goods" :key="index" :productItem="good"></product-list-detail> -->
  </div>
</template>

<script>
 import {goods} from '../../data.js';
 import ProductListDetail from '../shared/ProductListDetail.vue'


    export default {
      name: 'products',
      components: {
          ProductListDetail
      },
      data() {
        return {
            goods            
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



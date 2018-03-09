<template>
  <div>
    <ul> inna
        <!-- Рендерится li под каждый элемент массива filteredProducts -->                      
        <li v-for="(good, index) in filteredProduct" :key="index">
            <p>{{good.name}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
    import {categories} from '../../data.js';
    import {goods} from '../../data.js';
    export default {
    name: 'search-results',
    data() {
        return {
            goods
        }
    },
    computed: {
          filteredProduct() {
            // console.log(this.$route);
            //   const inputResult = 
                                  
              const ourProducts = this.goods.filter(function(currentGood) {
                return currentGood.name == this.$route.params.q;
              });
              // console.log(ourProducts);
              return ourProducts;             
          }
      }
}
</script>

<style lang="scss" scoped>

  
</style>
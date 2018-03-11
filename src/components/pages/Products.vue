<template>
  <div>
    <product-item :products="separateCategory"></product-item> 
  </div>
</template>

<script>
    import ProductItem from '../shared/ProductItem.vue'
    import {categories} from '../../data.js';
    import {goods} from '../../data.js';

    export default {
      name: 'products',
      components: {
        ProductItem
      },
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
              const ourProducts = this.goods.filter((Object) => Object.category_id == ourId);
              // console.log(ourProducts);
              return ourProducts;             
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>



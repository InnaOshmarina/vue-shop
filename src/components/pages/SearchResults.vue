<template>
   <div> 
       <product-item :products="filteredProduct"></product-item>   
  </div>
</template>

<script>
    import ProductItem from '../shared/ProductItem.vue';
    import {goods} from '../../data.js';

    export default {
    name: 'search-results',
    components: {
        ProductItem
    },
    data() {
        return {
            goods
        }
    },
    computed: {
          filteredProduct() {
            // console.log(this.$route);

            const inputResult = (this.$route.params.q).trim().toLowerCase();                                           
            const ourProducts = this.goods.filter((currentProduct) => {
                if(currentProduct.name.toLowerCase().indexOf(inputResult) !== -1){
                    return currentProduct;
                }
            });
            // console.log(ourProducts);
            // Возвращает массив с отфильтрованными данными
            return ourProducts;          
          }
    }
}
</script>

<style lang="scss" scoped>
</style>
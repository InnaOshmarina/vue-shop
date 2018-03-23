<template>
   <div>
       <h4>Результаты поиска:</h4>
       <div v-if="filteredProduct.length > 0">
           <product-item :products="filteredProduct"></product-item>
       </div>
       <div v-else>
           По вашему запросу ничего не найдено.
       </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ProductItem from '../shared/ProductItem.vue';
    import {productApi} from "../../api/productApi";

    @Component({
        name: 'search-results',
        components: {
            ProductItem
        },
        props: {
            propMessage: String
        }
    })
    export default class SearchResults extends Vue {
        constructor() {
            super();
            this.goods = [];
        }

        get filteredProduct() {
            const inputResult = (this.$route.params.q).trim().toLowerCase();
            const ourProducts = this.goods.filter((currentProduct) => {
                if(currentProduct.name.toLowerCase().indexOf(inputResult) !== -1){
                    return currentProduct;
                }
            });
            // Возвращает массив с отфильтрованными данными
            return ourProducts;
        }

        // Lifecycle Hook
        mounted() {
            productApi()
                .then(response => {
                    this.goods = response.data.results;
                })
        }
    }

</script>

<style lang="scss" scoped>
    h4 {
        font-weight: 700;
    }
</style>
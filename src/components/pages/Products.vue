<template>
    <div>
        <product-item :products="separateCategory"></product-item>
        <!--<paginate></paginate>-->
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ProductItem from '../shared/ProductItem.vue';
    import {categories} from '../../data.js';
    import {productApi} from "../../api/productApi";
    // import Paginate from './Paginate.vue';

    @Component({
        name: 'products',
        components: {
            ProductItem
        }
    })
    export default class Products extends Vue {
        constructor() {
            super();
            this.goods = [];
            // this.errors = [];
            this.categories = categories;
        }

        // computed
        get separateCategory() {
            // console.log(this.$route);
            const ourId = this.$route.params.category_id;
            if (ourId == 'all') {
                return this.goods;
            }
            const ourProducts = this.goods.filter((Object) => Object.category_id == ourId);
            // console.log(ourProducts);
            return ourProducts;
        }

        // Lifecycle Hook
        mounted() {
            productApi()
                .then(response => {
                    this.goods = response.data.results;
                })
                // .catch(e => {
                //     this.errors.push(e)
                // })
        }
    }
</script>

<style lang="scss" scoped>

</style>



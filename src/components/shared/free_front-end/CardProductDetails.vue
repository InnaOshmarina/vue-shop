<template>
    <div>
        <table class="table table-bordered">
            <tr>
                <td>Имя товара</td>
                <td class="for-name">{{ product.name }}</td>
            </tr>
            <tr>
                <td>Описание товара</td>
                <td>{{ product.description }}</td>
            </tr>
            <tr>
                <td>Цена</td>
                <td>от <b>{{ product.price }}</b> руб.</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { productApi } from "../../../api/productApi";

    @Component ({
        name: 'card-product-details'
    })
    export default class CardProductDetails extends Vue {
        constructor() {
            super();
            this.goods = [];
            this.ourProduct = {
                name: '',
                description: '',
                price: ''
            }
            // this.errors = errors
        }

        get product() {
            // let ourProduct = {
            //     name: '',
            //     description: '',
            //     price: ''
            // };

            if (this.goods.length > 0) {
                const ourId = this.$route.params.id;
                this.ourProduct = this.goods.find(item => item.id === ourId);
            }

            return this.ourProduct;
        }

        mounted() {
            productApi()
                .then(response => {
                    this.goods = response.data.results;
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style lang="scss" scoped>

    .for-name {
        font-weight: 700;
    }

</style>
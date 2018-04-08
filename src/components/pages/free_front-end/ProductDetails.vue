<template>
  <div>
    <h5>О товаре:</h5>
    <card-product-details></card-product-details>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import CardProductDetails from '../../shared/free_front-end/CardProductDetails.vue';

    @Component ({
        name: 'product-details',
        components: {
            CardProductDetails
        }
    })
    export default class ProductDetails extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>

</style>
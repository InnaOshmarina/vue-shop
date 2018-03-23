<template>
    <div>
        <b-row class="mt-5">
            <b-col lg="3">
            <a href="#">
                <img src="https://content2.onliner.by/catalog/device/header/69fd1638fafefbe0ecc02ab7fd9391f0.jpeg"
                    width="250" height="144" alt="Apple MacBook Pro 15&quot;">
            </a>
            </b-col>
            <b-col lg="7">
                <h4><router-link :to="{ name: 'product-details', params: { id: productItem.id } }">{{ good.name }}</router-link></h4>
                <p>{{ productItem.description }}</p>

            </b-col>
            <b-col lg="2">
                <span>от {{ productItem.price }} р.</span>
            </b-col>
        </b-row>
        <hr>
    </div>
</template>

<script>

    export default {
    name: 'product-list-detail',
    props: {
        productItem: Object
    }  
}
</script>

<style lang="scss" scoped>
 
</style>
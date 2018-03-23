<template>
   <div>
    <b-row class="mt-5" v-for="(good, index) in products" :key="index">
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
    export default {
      name: 'product-item',
      props: ['products']
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

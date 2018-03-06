<template>
  <div>
    <table class="table table-bordered">
        <tr>
            <td>Имя товара</td>
            <td>{{ product.name }}</td>
        </tr>
        <tr>
            <td>Описание товара</td>
            <td>{{ product.description }}</td>
        </tr>
        <tr>
            <td>Цена, руб.</td>
            <td>{{ product.price }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
    import {goods} from '../../data.js';

    export default {
    name: 'product-details',
    data () {
        return {
          goods
        }
    },
    computed: {
        product() {
            const ourId = this.$route.params.id;
            const ourProduct = this.goods.find(item => item.id === ourId);
            return ourProduct;
        }
    }
    
}
</script>

<style lang="scss" scoped>
 
</style>
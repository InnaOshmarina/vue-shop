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

    .for-name {
        font-weight: 700;
    }
</style>
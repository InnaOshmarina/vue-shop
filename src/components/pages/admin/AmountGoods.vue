<template>
  <div>
      <table class="table table-bordered">
          <caption> Количество товаров по каждой категории.
          </caption>
          <tr>
              <th>Категория товара</th>
              <th>Сумма товаров</th>
          </tr>
          <!--Здесь будут отображаться добавленные товары: -->
          <tbody v-for="newProduct of arrProducts" :key="newProduct['.key']">
          <tr>
              <td>
                  {{ newProduct.newAddedProduct.categoryProduct }}
              </td>
              <td>{{ newProduct.newAddedProduct.nameProduct }}</td>

          </tbody>
      </table>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component ({
        name: 'amount-goods',
        components: {

        }
    })
    export default class AmountGoods extends Vue {
        constructor() {
            super();
            this.newAddedProduct = {
                categoryProduct: null,
                nameProduct: '',
                descriptionProduct: '',
                priceProduct: ''
            };
        }
    }

</script>

<style lang="scss" scoped>



</style>


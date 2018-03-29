
    <template>
        <div>
            <b-form>
                <b-form-group label="Имя товара:"
                              label-for="input1"
                              class="mb-2">
                    <b-form-input id="input1"
                                  type="text"
                                  v-model="newAddedProduct.nameProduct"
                                  required
                                  placeholder="Имя товара">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Описание товара:"
                              label-for="input2"
                              class="mb-2">
                    <b-form-textarea id="input2"
                                     v-model="newAddedProduct.descriptionProduct"
                                     placeholder="Описание товара"
                                     :rows="5"
                                     :max-rows="50">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Цена товара"
                              label-for="input3"
                              class="mb-2">
                    <b-form-input id="input3"
                                  type="text"
                                  v-model="newAddedProduct.priceProduct"
                                  required
                                  placeholder="Цена товара">
                    </b-form-input>
                </b-form-group>
                <input type="submit"
                       class="btn btn-primary mr-3 mb-5"
                       value="Добавить товар"
                       @click.prevent="submitProduct">

            </b-form>

            <table class="table table-bordered">
                <tr>
                    <!--<th>№</th>-->
                    <th>Имя товара</th>
                    <th>Описание товара</th>
                    <th>Цена товара</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="(good, index) in goods" :key="index">
                    <!--<td>{{ index + 1 }}</td>-->
                    <td>{{ good.name }}</td>
                    <td>{{ good.description }}</td>
                    <td>{{ good.price }} р.</td>
                    <td></td>
                    <td></td>
                </tr>
                <!--:key="newProduct['.key']"-->
                <tr v-for="newProduct in arrProducts">
                    <!--<td></td>-->
                    <td>{{ newProduct.nameProduct }}</td>
                    <td>{{ newProduct.descriptionProduct }}</td>
                    <td>{{ newProduct.priceProduct }} р.</td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-danger btn-sm"
                                @click="removeProduct(newProduct)"
                                style="font-size: 0.625rem">Удалить
                        </button>
                    </td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-success btn-sm"
                                @click="editProduct(newProduct)"
                                style="font-size: 0.625rem">Редактировать
                    </button></td>
                </tr>
            </table>
        </div>
    </template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {productsRef} from '../../firebase';
    import {categories} from '../../data.js';
    import {productApi} from "../../api/productApi";

    @Component ({
        name: 'editing-products',
        firebase: {
            arrProducts: productsRef
        }
    })
    export default class EditingProducts extends Vue {
        constructor() {
            super();
            this.goods = [];
            this.errors = [];
            this.categories = categories;
            this.newAddedProduct = {
                nameProduct: '',
                descriptionProduct: '',
                priceProduct: ''
             }
        }
        submitProduct() {
            productsRef.push(this.newAddedProduct);
            this.newAddedProduct.nameProduct = '';
            this.newAddedProduct.descriptionProduct = '';
            this.newAddedProduct.priceProduct = ''
        }

        removeProduct(newProduct) {
            productsRef.child(newProduct['.key']).remove();
        }

        editProduct(newProduct) {
            productsRef.child(newProduct['.key']).update();
        }
        get separateCategory() {
            // console.log(this.$route);
            const ourId = this.$route.params.category_id;
            if (ourId == 'all') {
                return this.goods;
            }
        }

        // Lifecycle Hook
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
    form {
        font-size: 1rem;
    }

    th {
        font-size: 1rem;
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 0.875rem;
    }

</style>
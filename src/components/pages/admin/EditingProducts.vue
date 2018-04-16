<template>
    <div>
        <table class="table table-bordered">
            <caption> Таблица 1. Вывод товаров из удаленного источника
                <a href="http://www.mocky.io/v2/5aacf86a2f000065002048da">http://www.mocky.io/v2/5aacf86a2f000065002048da</a>
            </caption>
            <tr>
                <th>Имя товара</th>
                <th>Описание товара</th>
                <th>Цена товара</th>
            </tr>
            <tr v-for="(good, index) in goods" :key="index">
                <td>{{ good.name }}</td>
                <td>{{ good.description }}</td>
                <td>{{ good.price }} р.</td>
            </tr>
        </table>

        <!--ДОБАВЛЕНИЕ ТОВАРОВ-->
        <b-card>
            <b-form-group horizontal
                          breakpoint="lg"
                          label="Добавление товара"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">
                <b-form-group label="Имя товара:"
                              label-for="input4"
                              class="pb-3">
                    <b-form-input id="input4"
                                  type="text"
                                  v-model="newAddedProduct.nameProduct"
                                  required
                                  placeholder="Имя товара">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Описание товара:"
                              label-for="input5"
                              class="pb-3">
                    <b-form-textarea id="input5"
                                     v-model="newAddedProduct.descriptionProduct"
                                     placeholder="Описание товара"
                                     :rows="5"
                                     :max-rows="50">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Цена товара:"
                              label-for="input6"
                              class="pb-3">
                    <b-form-input id="input6"
                                  type="text"
                                  v-model="newAddedProduct.priceProduct"
                                  required
                                  placeholder="Цена товара">
                    </b-form-input>
                </b-form-group>
                <b-form-select v-model="newAddedProduct.categoryProduct" class="mb-3">
                    <template slot="first">
                        <option :value="null" disabled>Выберите соответствующую категорию для товара</option>
                    </template>
                    <option :value="option.newAddedCategory.nameCategory" v-for="option in arrCategories">
                        {{ option.newAddedCategory.nameCategory }}
                    </option>
                </b-form-select>
                <input type="submit"
                       class="btn btn-warning mr-3 mb-1"
                       value="Добавить товар"
                       @click.prevent="submitProduct()">
            </b-form-group>
        </b-card>

        <table class="table table-bordered">
            <caption> Таблица 2. Вывод товаров из формы выше
            </caption>
            <tr>
                <th>Категория</th>
                <th>Имя</th>
                <th>Описание</th>
                <th>Цена</th>
                <td></td>
                <td></td>
            </tr>
            <!--Здесь будут отображаться добавленные товары: -->
            <tbody v-for="newProduct of arrProducts" :key="newProduct['.key']">
                <tr v-if="!newProduct.edit">
                    <td>
                        {{ newProduct.newAddedProduct.categoryProduct }}
                    </td>
                    <td>{{ newProduct.newAddedProduct.nameProduct }}</td>
                    <td>{{ newProduct.newAddedProduct.descriptionProduct }}</td>
                    <td>{{ newProduct.newAddedProduct.priceProduct }} р.</td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-danger btn-sm"
                                @click.prevent="removeProduct(newProduct['.key'])"
                                style="font-size: 0.625rem">Удалить
                        </button>
                    </td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-warning btn-sm"
                                @click.prevent="editProduct(newProduct['.key'])"
                                style="font-size: 0.625rem">Редактировать
                        </button>
                    </td>
                </tr>
                <tr v-else>
                    <td>
                        <select v-model="newProduct.newAddedProduct.categoryProduct">
                            <option :value="option.newAddedCategory.nameCategory" v-for="option in arrCategories">
                                {{ option.newAddedCategory.nameCategory }}
                            </option>
                        </select>
                    </td>
                    <td><input type="text" v-model="newProduct.newAddedProduct.nameProduct"></td>
                    <td><textarea rows="5" cols="70" v-model="newProduct.newAddedProduct.descriptionProduct"></textarea></td>
                    <td><input type="text" v-model="newProduct.newAddedProduct.priceProduct"> р.</td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-success btn-sm"
                                @click.prevent="saveEditingProduct(newProduct)"
                                style="font-size: 0.625rem">Сохранить
                        </button>
                    </td>
                    <td style="padding: 0.3rem; vertical-align: middle">
                        <button type="button"
                                class="btn btn-info btn-sm"
                                @click.prevent="cancelEditingProduct(newProduct['.key'])"
                                style="font-size: 0.625rem">Закрыть
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {productsRef} from '../../../api/firebase';
    import {categoriesRef} from '../../../api/firebase';
    import EditingCategories from './EditingCategories.vue';
    import {categories} from '../../../data.js';
    import {productApi} from '../../../api/productApi';

    @Component ({
        name: 'editing-products',
        components: {
            EditingCategories
        },
        firebase: {
            arrProducts: productsRef,
            arrCategories: categoriesRef
        }
    })
    export default class EditingProducts extends Vue {
        constructor() {
            super();
            this.goods = [];
            this.errors = [];
            this.categories = categories;
            this.newAddedProduct = {
                categoryProduct: null,
                nameProduct: '',
                descriptionProduct: '',
                priceProduct: ''
             };
            this.newAddedCategory = {
                numberCategory: '',
                nameCategory: '',
                descriptionCategory: ''
            }
        }
        submitProduct() {
            productsRef.push({ newAddedProduct: this.newAddedProduct, edit: false });
            this.newAddedProduct.categoryProduct = '';
            this.newAddedProduct.nameProduct = '';
            this.newAddedProduct.descriptionProduct = '';
            this.newAddedProduct.priceProduct = ''
        }

        removeProduct(key) {
            productsRef.child(key).remove();
        }

        editProduct(key) {
            productsRef.child(key).update({ edit: true });
        }

        cancelEditingProduct(key) {
            productsRef.child(key).update({ edit: false });
        }

        saveEditingProduct(article) {
            const key = article['.key'];
            productsRef.child(key).set({ newAddedProduct: article.newAddedProduct, edit: false });
        }

        get separateCategory() {
            // console.log(this.$route);
            const ourId = this.$route.params.category_id;
            if (ourId == 'all') {
                return this.goods;
            }
        }

        countProduct() {
            newProduct.newAddedProduct.categoryProduct
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
    div .card {
        margin: 3rem 0 2rem 0;
    }
    .card-body {
        font-size: 1rem;
        background-color: lightcyan;
    }
    caption {
        caption-side: top;
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
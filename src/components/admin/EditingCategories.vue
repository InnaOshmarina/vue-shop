<template>
    <div>
        <!--ДОБАВЛЕНИЕ КАТЕГОРИЙ ТОВАРОВ-->
        <b-card>
            <b-form-group horizontal
                          breakpoint="lg"
                          label="Добавление категории"
                          label-size="lg"
                          label-class="font-weight-bold pt-0"
                          class="mb-0">
                <b-form-group label="Номер категории:"
                              label-for="input1"
                              class="pb-3">
                    <b-form-input id="input1"
                                  type="text"
                                  v-model="newAddedCategory.numberCategory"
                                  required
                                  placeholder="Номер категории">
                    </b-form-input>
                </b-form-group>

                <b-form-group label="Наименование категории:"
                              label-for="input2"
                              class="pb-3">
                    <b-form-input id="input2"
                                  type="text"
                                  v-model="newAddedCategory.nameCategory"
                                  required
                                  placeholder="Наименование категории">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Описание категории:"
                              label-for="input3"
                              class="pb-3">
                    <b-form-textarea id="input3"
                                     v-model="newAddedCategory.descriptionCategory"
                                     placeholder="Описание категории"
                                     :rows="5"
                                     :max-rows="50">
                    </b-form-textarea>
                </b-form-group>
                <input type="submit"
                       class="btn btn-primary mr-3 mb-1"
                       value="Добавить категорию"
                       @click.prevent="submitCategory()">
            </b-form-group>
        </b-card>

        <table class="table table-bordered">
            <caption> Таблица 1. Вывод категорий товаров из формы выше</caption>
            <tr>
                <th>Номер</th>
                <th>Наименование</th>
                <th>Описание</th>
                <td></td>
                <td></td>
            </tr>
            <!--Здесь будут отображаться добавленные категории: -->
            <tbody v-for="newCategory of arrCategories" :key="newCategory['.key']">
            <tr v-if="!newCategory.edit">
                <td>{{ newCategory.newAddedCategory.numberCategory }}</td>
                <td>{{ newCategory.newAddedCategory.nameCategory }}</td>
                <td>{{ newCategory.newAddedCategory.descriptionCategory }}</td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-danger btn-sm"
                            @click.prevent="removeCategory(newCategory['.key'])"
                            style="font-size: 0.625rem">Удалить
                    </button>

                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-warning btn-sm"
                            @click.prevent="editCategory(newCategory['.key'])"
                            style="font-size: 0.625rem">Редактировать
                    </button>
                </td>
            </tr>
            <tr v-else>
                <td><input type="text" v-model="newCategory.newAddedCategory.numberCategory"></td>
                <td><textarea rows="5" cols="70" v-model="newCategory.newAddedCategory.nameCategory"></textarea></td>
                <td><input type="text" v-model="newCategory.newAddedCategory.descriptionCategory"></td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-success btn-sm"
                            @click.prevent="saveEditingCategory(newCategory)"
                            style="font-size: 0.625rem">Сохранить
                    </button>
                </td>
                <td style="padding: 0.3rem; vertical-align: middle">
                    <button type="button"
                            class="btn btn-info btn-sm"
                            @click.prevent="cancelEditingCategory(newCategory['.key'])"
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
    import {categoriesRef} from '../../api/firebase';

    @Component ({
        name: 'editing-categories',
        firebase: {
            arrCategories: categoriesRef
        }
    })
    export default class EditingCategories extends Vue {
        constructor() {
            super();
            this.newAddedCategory = {
                numberCategory: '',
                nameCategory: '',
                descriptionCategory: ''
            }
        }
        submitCategory() {
            categoriesRef.push({ newAddedCategory: this.newAddedCategory, edit: false });
            this.newAddedCategory.numberCategory = '';
            this.newAddedCategory.nameCategory = '';
            this.newAddedCategory.descriptionCategory = ''
        }

        removeCategory(key) {
            categoriesRef.child(key).remove();
        }

        editCategory(key) {
            categoriesRef.child(key).update({ edit: true });
        }

        cancelEditingCategory(key) {
            categoriesRef.child(key).update({ edit: false });
        }

        saveEditingCategory(category) {
            const keyC = category['.key'];
            categoriesRef.child(keyC).set({ newAddedCategory: category.newAddedCategory, edit: false });
        }
    }
</script>

<style lang="scss" scoped>
    div .card {
        margin: 0 0 2rem 0;
    }
    .card-body {
        font-size: 1rem;
        background-color: lightgreen;
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
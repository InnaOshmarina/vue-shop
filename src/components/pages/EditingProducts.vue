
    <template>
        <div>
            <table class="table table-bordered">
                <tr>
                    <th>№</th>
                    <th>Имя товара</th>
                    <th>Описание товара</th>
                    <th>Цена товара</th>
                </tr>
                <tr v-for="(good, index) in goods" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ good.name }}</td>
                    <td>{{ good.description }}</td>
                    <td>от {{ good.price }} р.</td>
                </tr>
            </table>
        </div>
    </template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {categories} from '../../data.js';
    import {productApi} from "../../api/productApi";

    @Component ({
        name: 'editing-products'
    })
    export default class EditingProducts extends Vue {
        constructor() {
            super();
            this.goods = [];
            this.errors = [];
            this.categories = categories;
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

<style lang="scss">

    th {
        text-align: center;
        vertical-align: middle;
    }

    td {
        font-size: 1rem;
    }

</style>
<template>
    <b-nav-item right>
        <b-nav-item-dropdown text="Редактирование">
            <b-dropdown-item>
                <router-link :to="{ name: 'editing-categories' }">
                    Категории товаров
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item>
                <router-link :to="{ name: 'editing-products' }">
                    Товары
                </router-link>
            </b-dropdown-item>

        </b-nav-item-dropdown>
    </b-nav-item>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import EditingProducts from '../../pages/admin/EditingProducts.vue';
    import EditingCategories from '../../pages/admin/EditingCategories.vue';

    @Component({
        name: 'item-dropdown2',
        components: {
            EditingProducts,
            EditingCategories
        }
    })
    export default class ItemDropdown2 extends Vue {
        constructor() {
            super();
        }
    }

</script>

<style lang="scss" scoped>

    .nav-item a {
        text-decoration: none;
        color: #000;
        margin-right: 1.2rem;
    }

    .nav-item .dropdown-item:active {
        background-color: gold;
    }

</style>

<template>
    <div>
        <item-dropdown2>
        </item-dropdown2>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ItemDropdown2 from '../../shared/admin/ItemDropdown2.vue';


    @Component({
        name: 'dashboard',
        components: {
            ItemDropdown2
        }

    })
    export default class Dashboard extends Vue {
        constructor() {
            super();

        }
    }

</script>

<style lang="scss" scoped>
    .for-public {
        font-size: 1.2rem;
        font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
    }

</style>

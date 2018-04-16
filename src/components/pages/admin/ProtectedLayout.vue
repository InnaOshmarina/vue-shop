<template>
    <div class="for-protected">
        <header-second class="pb-5"></header-second>

            <router-view></router-view>

        <main-footer-second class="mt-5"></main-footer-second>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import HeaderSecond from '../../shared/admin/HeaderSecond.vue'
    import MainFooterSecond from '../../shared/admin/MainFooterSecond.vue'

    @Component({
        name: 'protected-layout',
        components: {
            HeaderSecond,
            MainFooterSecond
        }
    })
    export default class ProtectedLayout extends Vue {
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

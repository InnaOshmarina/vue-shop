<template>
    <div class="for-public">
        <Header class="pb-5"></Header>
        <b-container>
            <router-view></router-view>
        </b-container>
        <main-footer class="mt-5"></main-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Header from '../../shared/Header.vue'
    import MainFooter from '../../shared/MainFooter.vue'

    @Component({
        name: 'public-layout',
        components: {
            Header,
            MainFooter
        }
    })
    export default class PublicLayout extends Vue {
        constructor() {
            super();

        }
        get signComplete() {
            return this.$store.getters.getUser.signComplete;
        }
    }

</script>

<style lang="scss" scoped>
    .for-public {
        font-size: 1.2rem;
        font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
    }

</style>

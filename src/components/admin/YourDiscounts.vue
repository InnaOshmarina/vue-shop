<template>
  <div>
  <div>To do big discounts</div>
  <input type="text">
  <input type="email">
  <input type="tel"></div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'your-discounts'
    })
    export default class YouDiscounts extends Vue {
        constructor() {
            super();
        }       
    }
</script>

<style lang="scss" scoped>

  
</style>



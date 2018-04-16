<template>
    <div>
        <doughnut-chart></doughnut-chart>
        <br>
        <doughnut-chart-two></doughnut-chart-two>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import DoughnutChart from '../../shared/admin/DoughnutChart.js';
    import DoughnutChartTwo from '../../shared/admin/DoughnutChartTwo.js';

    @Component ({
        name: 'statistics',
        components: {
            DoughnutChart,
            DoughnutChartTwo
        }
    })
    export default class Statistics extends Vue {
        constructor() {
            super();
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <h3>Онлайн расчет скидки</h3>
    <p>Этот калькулятор позволяет найти скидку от стоимости товара в рублях и цену с учетом скидки.
      Введите стоимость товара в рублях и скидку в процентах:</p>
    <b-form>
      <b-form-group label="Цена товара:"
                    label-for="forDiscount1"
                    class="pb-3">
        <b-form-input id="forDiscount1"
                      type="text"
                      required
                      placeholder="Введите цену товара">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Скидка(в процентах):"
                    label-for="forDiscount2">
        <b-form-input id="forDiscount2"
                      type="text"
                      required
                      placeholder="Введите скидку в процентах">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Рассчитать скидку с цены товара</b-button>

    </b-form>
  </div>
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
   div {
     font-size: 1rem;
   }
</style>



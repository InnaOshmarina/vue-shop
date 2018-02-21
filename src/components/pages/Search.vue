<template>
  <div>
    <b-form inline>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" type="class" placeholder="Поиск товара"/>
      <br>
      <b-button type="submit" variant="primary"> Найти </b-button>
    </b-form>
  </div>
</template>

<script>
    export default {
    name: 'search-product',
    data () {
        return {
        msg: ''
        }
    }
}
</script>

<style lang="scss" scoped>
 
</style>
<template>
  <div class="for-search-product"> 
      <b-container>       
          <b-nav-form>
            <div class="for-nav-form">
                <b-form-input class="mr-sm-2" type="text" placeholder="Введите название товара"
                v-model="searchProduct">
                </b-form-input>
                
                    <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit"
                              @click.prevent="filteredProduct"
                            >Найти</b-button>
                
            </div>
          </b-nav-form>  
      </b-container>     
  </div>
</template>

<script>
    export default {
    name: 'search-product',
    data() {
        return {
          searchProduct: ''
        }
    },
    methods: {
      filteredProduct: function () {
        console.log(this.searchProduct);
        this.$router.push({ name: 'search-results', params: { q:this.searchProduct }});
      }
    }
}
</script>

<style lang="scss" scoped>

  .for-search-product {
      background-color: rgb(203, 214, 221);
    }

    .for-nav-form {
      margin: 0.5rem auto;
    }
</style>
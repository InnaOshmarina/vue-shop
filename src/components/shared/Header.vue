<template>
    <div>
      <b-navbar toggleable="lg"> 
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand><router-link :to="{ name: 'home' }">P I  X E L</router-link></b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item><router-link :to="{ name: 'products' }">Каталог товаров</router-link></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item right>
                <router-link :to="{ name: 'sign-in' }">Вход</router-link>
              </b-nav-item>

              <b-nav-item right class="for-sign-up">
                <router-link :to="{ name: 'sign-up' }">Регистрация</router-link> 
              </b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-container> 
      </b-navbar>

      <div class="for-search-product"> 
        <b-container>       
            <b-nav-form>
              <div class="for-nav-form">
                  <b-form-input class="mr-sm-2" type="text" placeholder="Поиск товара"></b-form-input>
                  <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">Найти</b-button>
              </div>
            </b-nav-form>  
        </b-container>     
      </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

   .navbar {
    background-color: rgb(227, 238, 245);
  }

  .navbar-brand a {
    text-decoration: none;
    margin-right: 2rem;
    font-size: 2rem;
    font-family: 'Gloria Hallelujah', cursive;
    font-weight: 900;
    color: #314647;
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-right: 1.2rem;
  }

  .ml-auto .for-sign-up a {
    margin-right: 0;
  }

  .for-search-product {
    background-color: rgb(203, 214, 221);
  }

  .for-nav-form {
    margin: 0.5rem auto;
  }
 
</style>

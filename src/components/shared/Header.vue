<template>
    <div>
      <b-navbar toggleable="lg"> 
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand><router-link :to="{ name: 'home' }" id="for-toolTip-1">P I X E L</router-link></b-navbar-brand>
          <b-tooltip target="for-toolTip-1" placement="bottom">
          На главную страницу
          </b-tooltip>
          <b-collapse is-nav id="nav_collapse">
            <item-dropdown></item-dropdown>
            
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-if="!signComplete">

              <b-nav-item right>
                <router-link :to="{ name: 'sign-in' }" @click="switchSign('sign-in')">Вход</router-link>
              </b-nav-item>

              <b-nav-item right class="for-sign-up">
                <router-link :to="{ name: 'sign-up' }" @click="switchSign('sign-up')">Регистрация</router-link> 
              </b-nav-item>

            </b-navbar-nav>
            <b-navbar-nav class="ml-auto" v-else>
              <!-- <router-view @addUser="email = $event.email, signComplete = $event.signComplete, userUid = $event.uid" :id="uid"></router-view> -->
              <b-nav-item right>
                <router-link :to="{ name: 'your-discounts' }">Ваши скидки</router-link>
              </b-nav-item>

              <b-nav-item right class="for-sign-up">
                {{ email }} 
              </b-nav-item>
           
            </b-navbar-nav>

          </b-collapse>
        </b-container> 
      </b-navbar>
      <search></search>   
    </div>
</template>

<script>
    import ItemDropdown from './ItemDropdown.vue';
    import Search from '../pages/Search.vue';
    import {categories} from '../../data.js';
    import {goods} from '../../data.js';
    import SignIn from '../pages/SignIn.vue';
    import SignUp from '../pages/SignUp.vue';
    import YourDiscounts from '../pages/YourDiscounts.vue';

    export default {
      name: 'header',
      components: {
        ItemDropdown,
        Search,
        SignIn,
        SignUp,
        YourDiscounts
      },
      data() {
        return {
          categories,
          goods,
          signComplete: false,
          email: '',
          uid: ''
        }
      },
      methods: {
    switchSign(currentSign) {
      this.sign = currentSign;
    }
  }
      // props: ['uid']     
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
    color: rgb(39, 116, 240);
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-right: 1.2rem;
  }

  .ml-auto .for-sign-up a, .ml-auto .for-sign-up {
    margin-right: 0;
  }

</style>

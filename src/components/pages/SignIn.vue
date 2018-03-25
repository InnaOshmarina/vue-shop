<template>
  <div class="for-sign-in">
      <form class="mt-5" @submit.prevent="enterUser" v-if="show">
        <div class="form-group">
          <label for="email">Ваш email:</label>
          <input type="email" id="email" class="form-control" placeholder="Введите email:" required v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Ваш пароль:</label>
          <input type="password" id="password" class="form-control" placeholder="Введите пароль:" required v-model="user.password">
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="signSuccess">
        <strong>Поздравляю!</strong> Вы вошли в систему.
      </div>
      <div class="alert alert-danger mt-5" role="alert" v-if="signError">
        <strong>Упс!</strong> что-то пошло не так.
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Home from "./Home.vue";

      @Component({
          name: 'sign-in',
          components: {
            Home
        }
      })
      export default class SignIn extends Vue {
          constructor() {
              super();
              this.show = true;
              this.signSuccess = false;
              this.signError = false;
              // соединим импуты с какими-либо данными, чтобы их проверять и получать к ним доступ:
              this.user = {
                  email: '',
                  password: ''
              }
          }

          enterUser() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                .then( response => {
                  // console.log(response);
                  const sett = {
                    email: response.email,
                    // если регистрация завершена - то показывается email пользователя:
                    signComplete: true,
                    // если вход прошел успешно, то тогда нас будет перекидывать на главную страницу:
                    // Home: true,
                    uid: response.uid
                  }
                  console.log(this.$store);
                  // мутацию сделать
                  this.show = false;
                  this.signError = false;
                  this.signSuccess = true;
                  this.$store.commit('signIn', sett)
                })
                .catch(error => {
                  this.signError = true;
                })
          }
      }
</script>

<style lang="scss" scoped>

  .for-sign-in {
      line-height: 1.25rem;
  }
  
</style>

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

      @Component({
          name: 'sign-in'
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

          // enterUser() {
          //
          // }
      }

</script>

<style lang="scss" scoped>

  .for-sign-in {
      line-height: 1.25rem;
  }
  
</style>

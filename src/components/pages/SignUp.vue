<template>
  <div class="for-sign-up">

      <form class="mt-5" @submit.prevent="registerUser" v-if="show" novalidate>
          <div class="form-group" :class="{ 'has-error': errors.has('email') }">
            <label class="control-label" for="email">Ваш email:</label>
            <!-- с помощью v-model соединяем импуты с данными-->
              <input name="email" type="email" id="email" class="form-control" placeholder="Введите email:" v-model="user.email"
                     v-validate data-vv-rules="required|email">
              <span v-show="errors.has('email')" class="help-block">
                  {{ errors.first('email') }}
              </span>
          </div>
          <div class="form-group" :class="{ 'has-error': errors.has('password') }">
            <label class="control-label" for="password">Ваш пароль (минимум 6 символов):</label>
            <input name="password" type="password" id="password" class="form-control" placeholder="Введите пароль:" v-model="user.password"
                   v-validate data-vv-rules="required|min:6">
              <span v-show="errors.has('password')" class="help-block" v-for="error in errors.collect('password')">
                {{ error }}
              </span>
          </div>
          <div class="form-group" :class="{ 'has-error': errors.has('repeat_password') }">
            <label class="control-label" for="password2">Повторите пароль:</label>
            <input name="repeat_password" type="password" id="password2" class="form-control" placeholder="Повторите пароль:" v-model="user.confirmPassword"
                   v-validate data-vv-rules="confirmed:password">
              <span v-show="errors.has('repeat_password')" class="help-block" v-for="error in errors.collect('repeat_password')">
                {{ error }}
              </span>
          </div>
          <div class="alert alert-danger" role="alert" v-if="errorConfirm">
            <strong>Упс! </strong>Пароли не совпадают.
          </div>
          <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="signSuccess">
            <strong>Поздравляю!</strong> Вы зарегистрировались.
      </div>
      <div class="alert alert-danger mt-5" role="alert" v-if="signError">
            <strong>Упс!</strong> что-то пошло не так.
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import firebase from 'firebase';

    @Component({
        name: 'sign-up'
    })
    export default class SignUp extends Vue {
        constructor() {
            super();
            this.show = true;
            this.signSuccess = false;
            this.signError = false;
            // соединим импуты с какими-либо данными, чтобы их проверять и получать к ним доступ:
            this.user = {
                email: '',
                password: '',
                confirmPassword: ''
            };
            this.errorConfirm = false;
        }

        registerUser() {
            this.errorConfirm = false;
            // вывод ошибки при несовпадении паролей:
            if (this.user.password !== this.user.confirmPassword) {
                this.errorConfirm = true;
            } else {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
              .then( () => {
                // this.show = false;
                this.signSuccess = true;
              })
              .catch( error => {
                this.signError = true;
              })
          }
        }
    }

</script>

<style lang="scss" scoped>

  .for-sign-up {
      line-height: 1.25rem;
  }
</style>



<template>
  <div class="for-sign-in">
      <form class="mt-5" @submit.prevent="enterUser" v-if="!signComplete" novalidate>
        <div class="form-group" :class="{ 'has-error': errors.has('email') }">
            <label class="control-label" for="email">Ваш email:</label>
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
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="signComplete">
        <strong>Поздравляю!</strong> Вы вошли в систему.
      </div>
      <div class="alert alert-danger mt-5" role="alert" v-if="signError">
       Вы ввели неверный email или пароль.
      </div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import firebase from 'firebase';

      @Component({
          name: 'sign-in'
      })
      export default class SignIn extends Vue {
          constructor() {
              super();
              this.signSuccess = false;
              this.signError = false;
              // соединим импуты с какими-либо данными, чтобы их проверять и получать к ним доступ:
              this.user = {
                  email: '',
                  password: ''
              };
          }
          enterUser() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                .then( response => {
                  // console.log(response);
                  const sett = {
                    email: response.email,
                    signComplete: true,
                    uid: response.uid
                  };
                  console.log(this.$store);
                  this.signError = false;
                  this.signSuccess = true;
                  // мутация:
                  this.$store.commit('signIn', sett);
                })
                .catch(error => {
                  this.signError = true;
                })

          }
          get signComplete() {
              return this.$store.getters.getUser.signComplete;
          }
      }
</script>

<style lang="scss" scoped>

  .for-sign-in {
      line-height: 1.25rem;
  }
  
</style>

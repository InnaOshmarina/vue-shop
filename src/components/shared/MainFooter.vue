<template>
  <div class="for-footer">
    <b-container class="bv-example-row">
        <b-row>
            <b-col sm="4">
               <span>Copyright © 2018 ИООО «Пиксель»</span>
            </b-col>
            <b-col sm="8">
              <b-nav class="d-flex justify-content-end">     
                  <b-nav-item><router-link :to="{ name: 'contacts' }">Контакты</router-link></b-nav-item>
                  <b-nav-item class="for-contact-form"><router-link :to="{ name: 'contact-form' }">Форма обратной связи</router-link></b-nav-item>
              </b-nav>
            </b-col>
        </b-row>
    </b-container>
  </div>   
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .for-footer {
    background: rgb(192, 189, 189);
  }
  .bv-example-row {
    padding-top: 1.75rem;
    min-height: 10rem;
    .for-contact-form a {
      margin-right: 0;
      padding-right: 0;
    }
  }
  span {
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #000;
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
    margin-left: 0.5rem;
    padding: 0.5rem;
  }

  
</style>


import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/shared/Header.vue'
import Home from '../components/pages/Home.vue'
import AboutUs from '../components/pages/AboutUs.vue'
import Contacts from '../components/pages/Contacts.vue'
import Products from '../components/pages/Products.vue'
import SignIn from '../components/pages/SignIn.vue'
import SignUp from '../components/pages/SignUp.vue'
import ContactForm from '../components/pages/ContactForm.vue'



Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home, name: 'home'},
    {path: '/aboutUs', component: AboutUs, name: 'about-us'},
    {path: '/contacts', component: Contacts, name: 'contacts'},
    {path: '/categories/:category_id', component: Products, name: 'products'},
    {path: '/signIn', component: SignIn, name: 'sign-in'},
    {path: '/signUp', component: SignUp, name: 'sign-up'},
    {path: '/contactForm', component: ContactForm, name: 'contact-form'}
    
  ]
})
export default router

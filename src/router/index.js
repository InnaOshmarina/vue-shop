import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import AboutUs from '../components/pages/AboutUs.vue'
import Contacts from '../components/pages/Contacts.vue'
import Products from '../components/pages/Products.vue'
import SignIn from '../components/pages/SignIn.vue'
import SignUp from '../components/pages/SignUp.vue'
import ContactForm from '../components/pages/ContactForm.vue'
import CardAppleMQD32 from '../components/pages/CardApple[MQD32].vue'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/aboutUs',
      component: AboutUs,
      name: 'about-us'
    },
    {
      path: '/contacts',
      component: Contacts,
      name: 'contacts'
    },
    {
      path: '/products',
      component: Products,
      name: 'products'
    },
    {
      path: '/signIn',
      component: SignIn,
      name: 'sign-in'
    },
    {
      path: '/signUp',
      component: SignUp,
      name: 'sign-up'
    },
    {
      path: '/contactForm',
      component: ContactForm,
      name: 'contact-form'
    },
    {
      path: '/cardApple[MQD32]',
      component: CardAppleMQD32,
      name: 'card-apple-MQD32'
    }
  ]
})
export default router

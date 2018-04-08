import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/pages/free_front-end/Home.vue';
import AboutUs from '../components/pages/free_front-end/AboutUs.vue';
import Contacts from '../components/pages/free_front-end/Contacts.vue';
import Products from '../components/pages/free_front-end/Products.vue';
import SignIn from '../components/pages/free_front-end/SignIn.vue';
import SignUp from '../components/pages/free_front-end/SignUp.vue';
import SearchResults from '../components/pages/free_front-end/SearchResults.vue';
import ContactForm from '../components/pages/free_front-end/ContactForm.vue';
import ProductDetails from '../components/pages/free_front-end/ProductDetails.vue';
import YourDiscounts from '../components/pages/admin/YourDiscounts.vue';
import EditingProducts from '../components/pages/admin/EditingProducts.vue';
import EditingCategories from '../components/pages/admin/EditingCategories.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home, name: 'home'},
    {path: '/about-us', component: AboutUs, name: 'about-us'},
    {path: '/contacts', component: Contacts, name: 'contacts'},
    {path: '/categories/:category_id', component: Products, name: 'products'},
    {path: '/sign-in', component: SignIn, name: 'sign-in'},
    {path: '/sign-up', component: SignUp, name: 'sign-up'},
    {path: '/search-results/:q', component: SearchResults, name: 'search-results'},
    {path: '/contact-form', component: ContactForm, name: 'contact-form'},
    {path: '/products/:id', component: ProductDetails, name: 'product-details'},
    {path: '/your-discounts', component: YourDiscounts, name: 'your-discounts'},
    {path: '/editing-products', component: EditingProducts, name: 'editing-products'},
    {path: '/editing-categories', component: EditingCategories, name: 'editing-categories'}
  ]
});
export default router

import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDfDFSRnsXO5mtUu46J5HXWXeca-GBEJc8",
    authDomain: "vue-shop-46592.firebaseapp.com",
    databaseURL: "https://vue-shop-46592.firebaseio.com",
    projectId: "vue-shop-46592",
    storageBucket: "vue-shop-46592.appspot.com",
    messagingSenderId: "282160356068"
});

export const db = app.database();
export const productsRef = db.ref('arrProducts');


export const ad = app.auth();
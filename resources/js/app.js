require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App.vue';
import Home from '../js/components/Home';
import ContactsList from '../js/components/ContactsList';



import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const routes = [
    {
        name: '/',
        path: '/',
        component: Home
    },
    {
        name: '/contacts',
        path: '/contacts',
        component: ContactsList
    }
]
const router = new VueRouter({routes: routes});
const app = new Vue(vue.util.extend(App)).$mount('#app');
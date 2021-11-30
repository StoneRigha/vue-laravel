require('./bootstrap');
window.Vue = require('vue');



import App from './App.vue';



import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const app = new Vue(vue.util.extend(App)).$mount('#app');
import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/sass/app.scss';

Vue.config.productionTip = false;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://basic-api.fabiopichler.net/';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

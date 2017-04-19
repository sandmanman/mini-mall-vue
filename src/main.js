// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import Axios from './utils/axios-conf';
import router from 'src/router/router';
import App from './App';

//vuex
import store from './store'

import { AlertPlugin, ToastPlugin  } from 'vux'
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

// axios
Vue.prototype.$http = Axios;

// fastclick
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
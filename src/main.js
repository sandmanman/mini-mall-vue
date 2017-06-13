// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import Axios from './utils/axios-conf';
import router from 'src/router/router';
import App from './App';

// fastclick
FastClick.attach(document.body);

// axios
Vue.prototype.$http = Axios;

//vuex
import store from './store/index'

import { AlertPlugin, ToastPlugin  } from 'vux'
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
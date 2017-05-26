import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import products from './modules/products';
import auth from './modules/auth';
import messages from './modules/messages';

import * as actions from './actions';


// use vuex
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        cart,
        products,
        auth,
        messages
    }
});



/**
 * vuex相关资料参考
 * 加深对vuex的理解
 * 
 * vuex 的dispatch和commit提交mutation的区别
 * https://segmentfault.com/q/1010000008546097
 * 
 * vuex入门实例
 * https://segmentfault.com/a/1190000005018970
 * 
 */
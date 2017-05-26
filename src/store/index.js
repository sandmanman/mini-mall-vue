import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import products from './modules/products';

import messages from './modules/messages';

import * as actions from './actions';


// use vuex
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        cart,
        products,
        messages
    }
});
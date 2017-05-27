import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import product from './modules/product';

import messages from './modules/messages';

import * as actions from './actions';

// use vuex
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        cart,
        product,
        messages
    }
});
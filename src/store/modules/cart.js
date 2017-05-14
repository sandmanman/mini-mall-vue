/**
 * 购物车
 * 
 */

import * as types from '../mutation-types';

// init state
const state = {
    cartItemList: []
}

// mutations
const mutations = {
    //使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.UPDATE_CART](state, {item,quantity, isAdd}) {
        // update cart
    },
    [types.SET_CART](state, productList) {
        // clear current cart
    },
    [types.REMOVE_CART_ITEM](state, {item}) {
        // remove item
    }
}


// actions
const actions = {
    // clear cart
    clearCart: ({commit}) => {
        commit(types.SET_CART,[]);
    }
}


// getters
const getters = {
    cartItemList: (state) => {
        return state.cartItemList;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
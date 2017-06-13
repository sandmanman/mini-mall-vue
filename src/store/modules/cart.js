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
// mutations 是唯一允许更新应用状态的地方
const mutations = {
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.UPDATE_CART](state, {item, quantity, isAdd}) {
        // update cart
        /**
         * ES6 array.find
         * 文档:
         * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
         */
        const record = state.cartItemList.find( element => element.id == item.id )
        if(record) {
            if(isAdd) {
                record.quantity += quantity
            } else {
                record.quantity = quantity
            }
        } else {
            state.cartItemList.push({
                ...item,
                quantity
            })
        }
    },
    [types.SET_CART](state, productList) {
        // clear current cart
        if(productList) {
            state.cartItemList = productList
        }
    },
    [types.REMOVE_CART_ITEM](state, {item}) {
        // remove item in cart
        const record = state.cartItemList.find( element => element.id == item.id )
        state.cartItemList.splice(state.cartItemList.indexOf(record),1)
    }
}


// actions
const actions = {
    // clear cart
    clearCart: ({commit}) => {
        commit(types.SET_CART, []);
    }
}


// getters
const getters = {
    cartItemList: (state) => {
        return state.cartItemList;
    },
    cartTotalPrice: (state) => {
        let total = 0
        state.cartItemList.map((item,index) => {
            total += item.price * item.quantity
        })
        return total
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
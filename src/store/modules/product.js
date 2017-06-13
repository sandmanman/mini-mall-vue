/**
 * 商品
 * 
 */

import $http from '../../utils/axios-conf';
import api from '../../api/api-conf';

import * as types from '../mutation-types';

// init state
const state = {
    isLoading: true,
    product: []
}


// mutations
// mutations 是唯一允许更新应用状态的地方
const mutations = {
    [types.RECEIVE_PRODUCT] (state, { product }) {
        state.product = product
        state.isLoading = false
    }
}

// actions
const actions = {
    //获取商品
    getProduct: ({commit}, productId) => {
        $http.get(api.getProduct(productId))
            .then((res) => {
                commit('RECEIVE_PRODUCT', { product: res.data })
            }, (err) => {
                console.log(err)
            })
    }
}

//getters
const getters = {
    product: (state) => {
        return state.product
    },
    isProductLoading: (state) => {
		return state.isLoading;
	}
}

export default {
    state,
    mutations,
    actions,
    getters
}
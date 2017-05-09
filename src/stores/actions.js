import Vue from 'vue';

import AV from '../server/init-leancloud';

//
//更新购物车
//
const updateCart = ({commit}, {item,spec,quantity,isAdd}) => {
    /**
     * update current cart
     * item: 商品相关信息
     * spec: 所选商品规格
     * quantity:商品数量
     * isAdd:是否在购物车中
     */
    commit('UPDATE_CART', {item,spec,quantity,isAdd});
    if(isAdd) {
        //如果添加到了购物车
        //提示添加成功
        let messageObj = {
            message: '商品' + item.title + '加入了购物车',
            messageClass: 'success',
            autoClose: true
        }

        //call message
        commit('ADD_MESSAGE', messageObj);
    }
}


//
//移除某个商品
//
const removeItemInCart = ({commit}, {item}) => {
    commit('REMOVE_CART_ITEM', {item});
}


//
//获取当前用户的购物车数据
//
const getShoppingCart = () => {
    //leancloud数据存储
}


//
//保存当前用户的购物车数据
//
const saveShoppingCart = () => {
    //leancloud数据存储
}


export default {
    updateCart,
    removeItemInCart,
    getShoppingCart,
    saveShoppingCart
}






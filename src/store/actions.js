/**
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */



import AV from '../server/init-leancloud';

import * as types from './mutation-types';

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
    commit( types.UPDATE_CART, {item,spec,quantity,isAdd} );
    if(isAdd) {
        //如果添加到了购物车
        //提示添加成功
        let messageObj = {
            message: '商品' + item.title + '加入了购物车',
            messageClass: 'success',
            autoClose: true
        }
        console.log(messageObj);
        //call message
        //commit( types.ADD_MESSAGE, messageObj);
    }
}


//
//移除某个商品
//
const removeItemInCart = ({commit}, {item}) => {
    commit( types.REMOVE_CART_ITEM, {item});
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



//
//用户注册
//
const registerByEmail = () => {
    //leancloud User Register
}


//
//用户登录
//
const loginWithEmail = () => {
    //leancloud User Login
}


//
//退出
//
const logout = ({commit}) => {
    
    // clear current cart
    commit(types.SET_CART, []);

    //leancloud User Logout
}





export {
    updateCart,
    removeItemInCart,
    getShoppingCart,
    saveShoppingCart,
    registerByEmail,
    loginWithEmail,
    logout
}





/**
 * actions
 * 
 * Actions 即是定义提交触发更改信息的描述
 * 常见的例子有从服务端获取数据，在数据获取完成后会调用 store.commit() 来调用更改 Store 中的状态
 * 可以在组件中使用 ispatch 来发出 Actions
 */


//leancloud
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
        alert(messageObj);
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


export default {
    updateCart,
    removeItemInCart,
    getShoppingCart,
    saveShoppingCart
}






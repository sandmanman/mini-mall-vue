/**
 *  Router map
 */

import Home from 'pages/home/home.vue';
import shelfProductPreview from 'pages/shelf/shelf.vue';
import product from 'pages/product/product.vue';
import Cart from 'pages/cart/cart.vue';
import orderCreate from 'pages/order/create.vue';
import UserCenter from 'pages/user/user-center.vue';


export default [{
    path: '/',
    redirect() {
        return 'home'
    }
}, {
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/shelf/:id',
    name: 'shelfProductPreview',
    component: shelfProductPreview
}, {
    path: '/product/:id',
    name: 'product',
    component: product
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, , {
    path: '/order/create',
    name: 'orderCreate',
    component: orderCreate
}, {
    path: '/userCenter',
    name: 'userCenter',
    component: UserCenter
}]
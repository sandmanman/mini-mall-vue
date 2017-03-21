/**
 *  Router map
 */

import Home from 'pages/home/home.vue';
import shelfProductPreview from 'pages/shelf/shelf.vue';
import Cart from 'pages/cart/cart.vue';
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
    path: '/shelf',
    name: 'shelfProductPreview',
    component: shelfProductPreview
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/userCenter',
    name: 'userCenter',
    component: UserCenter
}]
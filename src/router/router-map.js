/**
 *  Router map
 */

import Home from 'pages/home/home.vue';
import ShelfProductPreview from 'pages/shelf/shelf.vue';
import Product from 'pages/product/product.vue';
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
    path: '/shelf/:id',
    name: 'shelfProductPreview',
    component: ShelfProductPreview
}, {
    path: '/product/:id',
    name: 'product',
    component: Product
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/userCenter',
    name: 'userCenter',
    component: UserCenter
}]
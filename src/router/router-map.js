/**
 *  Router map
 */

import Home from 'pages/home/home.vue';
import shelfPreview from 'pages/shelf/shelf.vue';
import Cart from 'pages/cart/cart.vue';
import UserCenter from 'pages/user/user-center.vue';


export default [{
    path: '/',
    name: 'index',
    component: Home
  },{
    path: '/home',
    name: 'home',
    component: Home
  },{
    path: '/shelf',
    name: 'shelfPreview',
    component: shelfPreview
  },{
    path: '/cart',
    name: 'cart',
    component: Cart
  },{
    path: '/userCenter',
    name: 'userCenter',
    component: UserCenter
  }
]

/**
 *  Router map
 */

import Home from 'pages/home/home.vue';
import Cart from 'pages/cart/cart.vue';
import UserCenter from 'pages/user/user-center.vue';


export default [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: UserCenter
  }
]

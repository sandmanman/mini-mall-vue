/*
 * router
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import RouterMap from './router-map';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: RouterMap
});


router.beforeEach((to, from, next, abort) => {
    next()
})
router.afterEach((to, from, next) => {})

export default router
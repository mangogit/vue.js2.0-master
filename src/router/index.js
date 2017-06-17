import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';

Vue.use(Router);

export default new Router({
    base: 'dist/',
	linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: home,
        children: [{
            path: '',
            name: 'goods',
            component: goods
        }, {
            path: 'seller',
            name: 'seller',
            component: seller
        }, {
            path: 'ratings',
            name: 'ratings',
            component: ratings
        }]
    }]
});

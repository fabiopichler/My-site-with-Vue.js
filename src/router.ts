import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        }, {
            path: '/blog/:slug',
            name: 'post',
            component: () => import('./views/Post.vue')
        }, {
            path: '/:slug',
            name: 'page',
            component: () => import('./views/Page.vue')
        }
    ]
})

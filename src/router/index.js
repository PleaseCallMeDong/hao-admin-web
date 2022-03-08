import {createRouter, createWebHashHistory} from 'vue-router'

export const constantRoutes = [
    // 基础路由
    {
        path: '/',
        redirect: '/introduce'
    },
    {
        path: '/introduce',
        name: 'introduce',
        component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    routes: constantRoutes,
    history: createWebHashHistory()
})

export default router
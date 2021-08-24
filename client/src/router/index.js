import { createWebHistory, createRouter } from "vue-router";
import home from '@/view/home.vue'
import user from '@/view/dashboard/index.vue'
import auth from '@/view/auth.vue'
import albums from '@/view/dashboard/albums/index.vue'
import isAuth from '@/middleware/auth.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'auth',
        component: auth,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token')
            token ? next('/dashboard') : next()
        }
    },
    {
        path: '/dashboard',
        name: 'user',
        component: user,
        beforeEnter: isAuth
    },
    {
        path: '/dashboard/albums',
        name: 'albums',
        component: albums
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
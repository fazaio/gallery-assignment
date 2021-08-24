import { createWebHistory, createRouter } from "vue-router";
import home from '@/view/home.vue'
import user from '@/view/user/index.vue'
import auth from '@/view/user/auth.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/user/auth',
        name: 'auth',
        component: auth
    },
    {
        path: '/user',
        name: 'user',
        component: user
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
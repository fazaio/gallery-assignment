import { createWebHistory, createRouter } from "vue-router";
import home from '@/view/home.vue'
import user from '@/view/dashboard/index.vue'
import auth from '@/view/auth.vue'
import albums from '@/view/dashboard/albums/index.vue'
import albumsDetail from '@/view/dashboard/albums/detail.vue'
import isAuth from '@/middleware/auth.js'
import photosEdit from '@/view/dashboard/photos/edit.vue'
import photosCreate from '@/view/dashboard/photos/create.vue'
import albumAll from '@/view/public/album.vue'
import albumCreate from '@/view/dashboard/albums/create.vue'

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
        path: '/album/:id',
        name: 'albumAll',
        component: albumAll
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
    },
    {
        path: '/dashboard/albums/:id',
        name: 'albumsDetail',
        component: albumsDetail
    },
    {
        path: '/dashboard/albums/create',
        name: 'albmusCreate',
        component: albumCreate
    },
    {
        path: '/dashboard/photos/edit/:id',
        name: 'photosEdit',
        component: photosEdit
    },
    {
        path: '/dashboard/photos/create',
        name: 'photosCreate',
        component: photosCreate
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
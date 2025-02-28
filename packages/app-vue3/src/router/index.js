const routes = [
    {
        path: '/',
        redirect: { name: 'home' },
        meta: { title: '首页' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/index.vue')
            }
        ]
    }
]

import {
    createRouter,
    createWebHistory
} from 'vue-router'
const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router
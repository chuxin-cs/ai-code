import {
    createRouter,
    createWebHistory
} from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'


const routes = [
    {
        path: '',
        redirect: { name: 'home' },
        meta: { title: '首页' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/pages/home/index.vue')
            },
            {
                // history模式需要通配所有路由，详见vue-router文档
                path: '/app/app-vue3/:pathMatch(.*)*',
                name: 'app-vue3',
                component: () => import('@/components/SubContainer/index.vue')
            },
            {
                // history模式需要通配所有路由，详见vue-router文档
                path: '/app/app-react/:pathMatch(.*)*',
                name: 'app-react',
                component: () => import('@/components/SubContainer/index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(
        qiankunWindow.__POWERED_BY_QIANKUN__
            ? '/app/app-vue3/'
            : '/'
    ),
    routes
})


export default router

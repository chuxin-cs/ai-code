import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
    base:"/",
    plugins: [
        vue(),
        qiankun('app-vue3', {
            useDevMode: true
        })
    ],
    server: {
        port: 7001, headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
})

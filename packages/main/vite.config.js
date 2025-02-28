import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
import {fileURLToPath} from 'url';

// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
// 使用 path.resolve 直接获取当前文件所在的目录
const __dirname = path.resolve(path.dirname(__filename));

export default defineConfig({
    base: "/",
    plugins: [vue()],
    server: {
        port: 7000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})

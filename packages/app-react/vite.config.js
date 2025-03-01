import {defineConfig} from 'vite'
// import react from '@vitejs/plugin-react'
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
    plugins: [qiankun('app-react')], base: "./", server: {
        port: 7002, headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
})

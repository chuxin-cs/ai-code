import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode, "===")

  return {
    plugins: [
      react(),
      tailwindcss(),
      vanillaExtractPlugin({
        identifiers: ({ debugId }) => `${debugId}`,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, '../../src/assets/icons')],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    server: {
      port: 3001
    },
    resolve: {
      // 配置别名
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
})

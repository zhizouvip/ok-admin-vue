import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://cn.vitejs.dev/config/#build-assetsdir
// https://vitejs.dev/config/
// https://www.vitejs.net/guide/build.html#公共基础路径
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// const dotenv = require("dotenv")

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log('env: ', env);
  console.log('mode: ', mode);
  console.log('command: ', command);

  return {
    plugins: [vue(), vueJsx()],
    base: env['VITE_PUBLIC_PATH'] || '/',
    build: {
      outDir: env['VITE_OUT_DIR'] || 'dist'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        comps: path.resolve(__dirname, 'src/components')
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    }
  };
});

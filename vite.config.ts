import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv, defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/** eslint效验插件 https://eslint.vuejs.org/rules/ */
import vitePluginEslint from 'vite-plugin-eslint'
/** 打包分析插件： https://www.npmjs.com/package/rollup-plugin-visualizer */
import { visualizer } from 'rollup-plugin-visualizer'
/** 打包生成gzip： https://www.npmjs.com/package/vite-plugin-compression */
import viteCompression from 'vite-plugin-compression'
/** 将外部导入转换为全局变量,打包把模块排除 */
// import externalGlobals from 'rollup-plugin-external-globals'

// https://cn.vitejs.dev/config/#build-assetsdir
// https://vitejs.dev/config/
// https://www.vitejs.net/guide/build.html#公共基础路径
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// const dotenv = require("dotenv")

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [
      vue(),
      vitePluginEslint({
        cache: false // 禁用eslint缓存
      }),
      vueJsx(),
      visualizer(),
      viteCompression({
        /** @name 文件超过4kb则进行压缩 */
        threshold: 4096,
        /** @name 压缩算法:'gzip','brotliCompress' ,'deflate','deflateRaw' */
        algorithm: 'gzip',
        /** @name 压缩文件后缀名 */
        ext: 'gzip'
      })
    ],
    base: env['VITE_PUBLIC_PATH'] || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    build: {
      outDir: env['VITE_OUT_DIR'] || 'dist'
      // 将外部导入转换为全局变量,打包把模块排除
      // rollupOptions: {
      //   external: ['vue', 'pinia', 'vue-router', 'axios'],
      //   plugins: [
      //     externalGlobals({
      //       vue: 'Vue',
      //       pinia: 'Pinia',,
      //       'vue-router': 'VueRouter',
      //       axios: 'axios'
      //     })
      //   ]
      // }
    }

    // 全局scss变量，混入
    /* css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "./src/assets/css/variables.scss";' + '@import "./src/assets/css/mixins.scss";'
        }
      }
    } */
  }
})

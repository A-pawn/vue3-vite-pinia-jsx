import { fileURLToPath, URL } from 'url'
import EslintPlugin from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
  // ElementPlusResolver,
  // VantResolver,
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode)
  return {
    plugins: [
      vue(),
      vueJsx(),
      Components({ resolvers: [AntDesignVueResolver()] }),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'], // 检查的文件
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          // configure: (proxy, options) => {
          //   // proxy 是 'http-proxy' 的实例
          // },
        },
      },
    },
  }
})

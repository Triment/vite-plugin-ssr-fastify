import react from '@vitejs/plugin-react'
import path from 'path'
import { UserConfig } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  resolve: {
    alias: {
      '#root': __dirname,
      unfetch: path.resolve(__dirname, 'node_modules/unfetch/dist/unfetch.mjs'), // unfetch bug see: https://github.com/developit/unfetch/pull/164
    },
  },
  server: {
    hmr: {
      port: 6372,
    },
  },
  plugins: [
    react(),
    ssr(),
    WindiCSS({
      scan: {
        // 默认情况下只有 `src/` 目录下被扫描
        dirs: ['pages', 'renderer'],
        // 我们只需要指定实际使用的文件扩展名
        fileExtensions: ['vue', 'js', 'ts', 'jsx', 'tsx'],
      },
    }),
  ],
}

export default config

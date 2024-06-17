import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import unoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    outDir: 'svg-site'
  },

  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          video: ['src'],
          audio: ['src'],
          'var-image': ['src'],
          'var-avatar': ['src'],
          'var-card': ['src'],
          'var-app-bar': ['image']
        }
      }
    }),

    components({
      resolvers: [VarletImportResolver()],
      dts: true,
    }),

    autoImport({
      imports: ['vue'],
      resolvers: [VarletImportResolver({ autoImport: true })],
      eslintrc: { enabled: true },
      dts: true
    }),

    unoCSS()
  ]
})

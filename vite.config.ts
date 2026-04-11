import { fileURLToPath, URL } from 'node:url'
import { lint, fmt, staged } from '@configurajs/vite-plus'
import { VarletImportResolver } from '@varlet/import-resolver'
import vue from '@vitejs/plugin-vue'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    outDir: 'svg-site',
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
          'var-app-bar': ['image'],
        },
      },
    }),

    components({
      resolvers: [VarletImportResolver()],
      dts: true,
    }),

    autoImport({
      imports: ['vue'],
      resolvers: [VarletImportResolver({ autoImport: true })],
      dts: true,
    }),

    unoCSS(),
  ],

  staged: staged(),

  lint: lint(),

  fmt: fmt(),
})

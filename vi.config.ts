import { defineConfig } from '@varlet/icon-builder'

export default defineConfig({
  name: 'i-icons',
  namespace: 'i',
  output: './svg-fonts',
  generate: {
    framework: 'react'
  }
})

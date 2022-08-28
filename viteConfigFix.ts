const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const svgLoader = require('vite-svg-loader')
const { resolve } = require('path')

module.exports = defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    svgLoader(),
  ],
})

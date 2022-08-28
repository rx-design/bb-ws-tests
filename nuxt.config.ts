import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [
      'vuetify',
    ],
  },
  css: [
    'vuetify/lib/styles/main.sass',
  ],
  experimental: {
    reactivityTransform: true,
  },
  ignore: [
    "**/*.cy.ts",
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      svgLoader(),
    ],
  },
})

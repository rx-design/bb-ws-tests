import { defineNuxtPlugin } from 'nuxt/app'
import { h } from 'vue'
import { createVuetify, IconProps } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import DynamicIcon from '~/components/DynamicIcon.vue'

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'custom',
    sets: {
      custom: {
        component: (props: IconProps) => h(DynamicIcon, props),
      },
    },
  },
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(vuetify)
})

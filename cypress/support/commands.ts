import { mount } from 'cypress/vue'
import Controls from '~/components/Controls.vue'
import Game from '~/components/Game.vue'
import Result from '~/components/Result.vue'
import { vuetify } from '~/plugins/vuetify'

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}

  options.global.components = options.global.components || {}
  options.global.components['Controls'] = Controls
  options.global.components['Game'] = Game
  options.global.components['Result'] = Result

  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(vuetify)

  return mount(component, options)
})

Cypress.Commands.add('getByTestId', value => {
  return cy.get(`[data-testid=${value}]`)
})

Cypress.Commands.add('isLoaded', () => {
  return cy.get('svg').should('have.length', 10)
})

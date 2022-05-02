/// <reference types="Cypress" />

import LoginPage from '../support/pageOjects/login.js'

describe('Demo Wizeline', () => {

    it('Login', () => {
        cy.visit('https://todoist.com/auth/login')
        cy.get('#element-0').type('wl.interview.session@gmail.com')
        cy.get('#element-2').type('WL2021&*')
        cy.get('button[type=submit]').click()
        cy.url().should('eq', 'https://todoist.com/app/today')
    })

})
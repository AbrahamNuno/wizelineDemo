/// <reference types="Cypress" />

export class LoginPage {
    get inputUser() { return '#element-0' }
    get inputPassword() { return '#element-2' }
}

export const login = new LoginPage();
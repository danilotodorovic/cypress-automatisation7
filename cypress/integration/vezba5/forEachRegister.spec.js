/// <reference types="Cypress" />

const registerData = require("../../fixtures/register_data.json");
const Locators = require("../../fixtures/Locators.json");


describe("It generator example", () => {
    beforeEach(() => {
        cy.visit("/register");
    })

    registerData.forEach((testCase) => {
        it(`${testCase.caseName}`, () => {
            cy.get(Locators.Register.FirstName).type(testCase.FirstName)
            cy.get(Locators.Register.LastName).type(testCase.LastName)
            cy.get(Locators.Register.Email).type(testCase.Email)
            cy.get(Locators.Register.Password).type(testCase.Password)
            cy.get(Locators.Register.ConfirmedPassword).type(testCase.PasswordConfirm)
            cy.get(Locators.Register.Checkbox).check()
            cy.get(Locators.Register.Submit).click()    
        })
    })
})
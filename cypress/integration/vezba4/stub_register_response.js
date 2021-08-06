/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";
import { createGallery } from "../../page_objects/createGalleryObject";

const Locators = require("../../fixtures/Locators.json");

describe("Stubovanje", () => {
    it("Stub example", () => {
        cy.visit("/")
        header.registerButton.click()
        cy.get(Locators.Register.FirstName).type("Djole")
        cy.get(Locators.Register.LastName).type("Djolic")
        cy.get(Locators.Register.Email).type("mejl@mejl.mejl")
        cy.get(Locators.Register.Password).type("12345678")
        cy.get(Locators.Register.ConfirmedPassword).type("12345678")
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/register",
        {
            fixture: "register_stub.json"
        })
    })
})
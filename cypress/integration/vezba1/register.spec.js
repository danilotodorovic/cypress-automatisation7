/// <reference types="Cypress" />


describe("Registration", () => {
    it("Registration without credentials", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("button").click();
    });
    it.only("Registration without valid credentials", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("ime");
        cy.get("#last-name").type("prezime");
        cy.get("#email").type("nekimejl@qa.com");
        cy.get("#password").type("nekipass1");
        cy.get("#password-confirmation").type("nekipass1");
        cy.get(".form-check-input").check();
        cy.get("button").click();
    });

});
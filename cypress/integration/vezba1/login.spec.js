/// <reference types="Cypress" />

describe("Login", () => {
    it('Visit', () => {
        cy.visit('/');
        cy.get('.nav-link').eq(1).click();
    });

    // .only pokrece samo konkretan it
    it("Login with valid data", () => {
        cy.visit('/');
        cy.get('.nav-link').eq(1).click();
        cy.get('#email').type("danilotodorqvic@gmail.com");
        cy.get('#password').type("bratdejan6");
        cy.get("button").click();
    });

    it("Logout", () => {
        cy.visit('/');
        cy.get('.nav-link').eq(1).click();
        cy.get('#email').type("danilotodorqvic@gmail.com");
        cy.get('#password').type("bratdejan6");
        cy.get("button").click();
        // cy.wait(500); //lose ga je koristiti, moze za debug ili ako bas nema drugog nacina
        cy.get(".nav-link").should("have.length", 4); // asertacija, moze da se koristi da sacekamo dok se ne ostvari ocekivano
        cy.get(".nav-link").eq(3).click();
    });

    it.only("Login without credentials", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        //cy.get("button").should("be.visible");
        cy.get("button").click();
    });

});